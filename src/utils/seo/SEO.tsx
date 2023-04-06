import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

import { siteName, titleMerge } from "../../configs/seo.configs"
import { onlyText } from "../string/clearText"

import { MetaNoIndex } from "./MetaNoIndex"

type SEOProps = {
  title: string
  description?: string
  type?: string
  keywords?: string
}
const SEO: FC<SEOProps> = ({ title, description, keywords = "Englis tili organish", type = "article" }) => {
  const { pathname } = useLocation()
  const currentUrl = "https://newaction.uz/" + pathname
  return (
    <>
      {description ? (
        <Helmet>
          <title>{titleMerge(title)}</title>
          <meta name="description" content={description} />
          <meta property="keywords" content={keywords} />
          <meta property="og:type" content={type} />
          <meta property="og:title" content={titleMerge(title)} />
          <meta property="og:description" content={onlyText(description, 197)} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:site_name" content={siteName} />
        </Helmet>
      ) : (
        <MetaNoIndex title={title} />
      )}
    </>
  )
}
export default SEO
