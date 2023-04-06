import { useQuery } from "@tanstack/react-query"
//@ts-ignore
import Zoom from "react-reveal/Zoom"

import { PortfolioSerivce } from "../../../../../../service/portfolio/portfolio.service"

import styles from "./Tabs.module.scss"
import Card from "./card/Card"

type TabContentProps = {
  activeTab: number
  category: string
}
const TabContent = ({ activeTab, category }: TabContentProps) => {
  const { data } = useQuery(["products", category], () => PortfolioSerivce.getByCategory(category), {
    keepPreviousData: true,
    enabled: !!category,
  })

  return (
    <div className={styles.content}>
      {data?.map((item) => (
        <Zoom  key={item.id}>
          <Card {...item} />
        </Zoom>
      ))}
    </div>
  )
}
export default TabContent
