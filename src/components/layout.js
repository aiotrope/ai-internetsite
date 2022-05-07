import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import MenuNav from "./menuNav"

import "../static/scss/layout.scss"
import { Parent } from "../static/styled-components/parent.style"
import { Wrapper } from "../static/styled-components/mainWrapper.style"
import { Footer } from "../static/styled-components/footer.style"

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
    <Parent>
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
    </Parent>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
