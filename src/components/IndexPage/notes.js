import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Notes = () => {
  const blogs = useStaticQuery(graphql`
    query {
      allPrismicBlogs(sort: { fields: last_publication_date, order: ASC }) {
        nodes {
          date: first_publication_date(formatString: "YYYY-MM-DD HH:mm:ss")
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Posts</th>
          </tr>
        </thead>
        {blogs.allPrismicBlogs.nodes.map(node => {
          return (
            <tbody key={node.uid}>
              <tr>
                <td>
                  <Link
                    to={`/notes/${node.uid}`}
                    style={{ fontSize: `12px`, color: `#454545` }}
                  >
                    {node.date}
                  </Link>
                </td>
                <td>
                  <Link to={`/notes/${node.uid}`} rel="noopener">
                    {node.data.title.text}
                  </Link>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </section>
  )
}

export default Notes
