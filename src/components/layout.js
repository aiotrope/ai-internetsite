import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MenuNav from "./menuNav"

import "../static/css/layout.css"
import { Wrapper } from "./misc/styles/mainWrapper.style"
import { Footer } from "./misc/styles/footer.style"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      prismicAuthors {
        uid
        data {
          name {
            richText
            text
          }
        }
      }
    }
  `)

  return (
    <>
      <MenuNav siteTitle={data.prismicAuthors.data?.name.text || `Title`} />
      <Wrapper>{children}</Wrapper>

      {/*   <Footer>
        <section>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </section>
      </Footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
