import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { PrismicRichText } from "@prismicio/react"
import { WindupChildren } from "windups"
import Cookies from "universal-cookie"

const Blog = props => {
  console.log(props)

  const cookies = new Cookies()
  const blogUid = props.data.prismicBlogs.uid

  if (cookies.get(blogUid)) {
    return (
      <Layout>
        <Seo
          title={props.data.prismicBlogs.data?.title.text}
          description={props.data.prismicBlogs.data?.description}
        />

        <section key={props.data.prismicBlogs.uid}>
          <article>
            <PrismicRichText
              field={props.data.prismicBlogs.data?.title.richText}
            />
            <PrismicRichText
              field={props.data.prismicBlogs.data?.content.richText}
            />
          </article>
        </section>
      </Layout>
    )
  } else {
    cookies.set(blogUid, "visited", { path: "/", maxAge: 7200 })
    return (
      <Layout>
        <Seo title="Page two" description="Example description" />
        <section key={props.data.prismicBlogs.uid}>
          <PrismicRichText
            field={props.data.prismicBlogs.data.title.richText}
            components={{
              heading1: ({ children }) => (
                <WindupChildren>
                  <h1>{children}</h1>
                </WindupChildren>
              ),
            }}
          />

          <PrismicRichText
            field={props.data.prismicBlogs.data.content.richText}
            components={{
              heading2: ({ children }) => (
                <WindupChildren>
                  <h2>{children}</h2>
                </WindupChildren>
              ),
              paragraph: ({ children }) => (
                <WindupChildren>
                  <p>{children}</p>
                </WindupChildren>
              ),

              preformatted: ({ children }) => (
                <WindupChildren>
                  <pre>{children}</pre>
                </WindupChildren>
              ),
            }}
          />
        </section>
      </Layout>
    )
  }
}

export default Blog

export const blogQuery = graphql`
  query BlogQuery($id: String) {
    prismicBlogs(id: { eq: $id }) {
      uid
      data {
        title {
          richText
          text
        }
        content {
          richText
        }
        description
        reading_time
        author {
          slug
        }
      }
    }
  }
`
