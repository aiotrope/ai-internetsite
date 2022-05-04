import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PrismicRichText } from "@prismicio/react"
import { WindupChildren } from "windups"
import Whoiam from "../components/aboutPage/whoIam"

const Pages = props => {
  //console.log(props)
  const [aboutPageComponents, setAboutPageComponents] = React.useState(false)

  React.useEffect(() => {
    if (props.data.prismicPages?.uid === "about") {
      setAboutPageComponents(true)
    }
  }, [])

  return (
    <Layout>
      <Seo
        title={props.data.prismicPages.data?.title.text}
        description={props.data.prismicPages.data?.description.text}
      />

      <section key={props.data.prismicPages?.uid}>
        
        {aboutPageComponents ? (
          <>
            <h2>Whoiam</h2>

            <PrismicRichText
              field={props.data.prismicPages.data?.content.richText}
              components={{
                paragraph: ({ children }) => (
                 <WindupChildren>{children}</WindupChildren>
                ),
              }}
            />
          </>
        ) : (
          <>
            <PrismicRichText
              field={props.data.prismicPages.data?.title.richText}
            />

            <PrismicRichText
              field={props.data.prismicPages.data?.content.richText}
            />
          </>
        )}

        {aboutPageComponents && <Whoiam />}
      </section>
    </Layout>
  )
}

export default Pages

export const pageQuery = graphql`
  query MyQuery($id: String) {
    prismicPages(id: { eq: $id }) {
      uid
      data {
        author {
          slug
        }
        title {
          richText
          text
        }
        description {
          text
        }
        content {
          richText
        }
      }
    }
  }
`
