import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SliceZone } from "@prismicio/react"
import { components } from "./slices"

const OpenStudies = () => {
  const query = useStaticQuery(graphql`
    query {
      prismicAboutPageComponents(
        data: { title: { text: { eq: "About Page Components" } } }
      ) {
        uid
        data {
          title {
            text
          }
          body {
            ... on PrismicAboutPageComponentsDataBodyOpenUniversity {
              id
              slice_type
              primary {
                description {
                  richText
                }
                program {
                  richText
                }
              }
            }
          }
        }
      }
    }
  `)

  return(
     <SliceZone slices={query.prismicAboutPageComponents.data.body} components={components} />
    
  )
}

export default OpenStudies
