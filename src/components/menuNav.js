import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

import { HeaderContainer } from "../static/styled-components/menuNav.style"

const MenuNav = ({ siteTitle }) => {
  const _result = useStaticQuery(graphql`
    {
      prismicPagesNavigation {
        data {
          navigation_items {
            item_name
            page_link {
              uid
            }
          }
        }
      }
    }
  `)

  return (
    <HeaderContainer>
      <nav>
        <h1>
          <Link
            to="/"
            
            style={{
              color: `#647687`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <ul>
          {_result.prismicPagesNavigation.data.navigation_items.map(item => {
            let capItems =
              item.item_name.charAt(0).toUpperCase() + item.item_name.slice(1)

            return (
              <li key={item.page_link.uid}>
                <Link
                  activeClassName="active"
                  rel={
                    item.page_link.uid === "about"
                      ? "noopener"
                      : "noreferrer noopener"
                  }
                  to={`/${item.page_link.uid}`}
                >
                  {capItems}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </HeaderContainer>
  )
}

MenuNav.propTypes = {
  siteTitle: PropTypes.string,
}

MenuNav.defaultProps = {
  siteTitle: ``,
}

export default MenuNav

/*  */
