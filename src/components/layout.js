import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <div className="parent">
      <MenuNav siteTitle={data.prismicAuthors.data?.name.text || `Title`} />
      <Wrapper>{children}</Wrapper>

      <Footer>
        <nav className="nav-footer">
          <ul className="footer-ul">
            <li className="footer-li"><Link to="/">Index</Link></li>
            <li className="footer-li">About</li>
            <li className="footer-li"><Link to="/contact">Contact</Link></li>
            <li className="footer-li"><Link to="/projects">Projects</Link></li>
            <li className="footer-li">2019 - 2022</li>
          </ul>
        </nav>
      </Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
