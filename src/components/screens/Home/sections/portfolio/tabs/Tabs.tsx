import { useQuery } from "@tanstack/react-query"
import cn from "classnames"
import { useState } from "react"
import { useDispatch } from "react-redux"

import useAppSelector from "../../../../../../hooks/useAppSelector.hook"
import { PortfolioSerivce } from "../../../../../../service/portfolio/portfolio.service"
import { setCategories } from "../../../../../../store/portfolio/portfolio.slice"

import TabContent from "./TabContent"
import styles from "./Tabs.module.scss"

const Tabs = () => {
  const dispatch = useDispatch()
  const { categories } = useAppSelector((state) => state.portfolio)
  const { data } = useQuery(["categories"], () => PortfolioSerivce.getCategory(), {
    onSuccess(data) {
      dispatch(setCategories(data))
    },
    keepPreviousData: true,
    enabled: !!dispatch,
  })

  const [tab, setTab] = useState(0)

  return (
    <div className={styles.tabs}>
      <div className={styles.top}>
        {categories.map((item, i) => (
          <span className={cn({ [styles.active]: tab === i })} onClick={() => setTab(i)} key={item}>
            {item}
          </span>
        ))}
      </div>
      <TabContent activeTab={tab} category={categories[tab]} />
    </div>
  )
}
export default Tabs
