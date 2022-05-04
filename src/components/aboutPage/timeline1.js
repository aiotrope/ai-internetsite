import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./timeline1.css"
//import { WindupChildren } from "windups"
import { PrismicRichText } from "@prismicio/react"

const Timeline1 = () => {
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
          current {
            desc {
              text
            }
            label {
              text
            }
            yr {
              text
            }
          }
          freelance {
            desc {
              text
            }
            label {
              text
            }
            yr {
              text
            }
          }
          latomatina {
            desc {
              text
            }
            label {
              text
            }
            yr {
              text
            }
          }
          first {
            entry
            intro
            years
          }
          genesis {
            entry
            intro
            years
          }
          grunt {
            entry
            intro
            years
          }
          horizons {
            entry
            intro
            years
          }
          hs {
            entry
            intro
            years
          }
          lab {
            entry
            intro
            years
          }
          palawan {
            entry
            intro
            years
          }
          uni {
            entry
            intro
            years
          }
          vocation {
            entry
            intro
            years
          }
          r_d {
            entry
            intro
            years
          }
          rough {
            entry
            intro
            years
          }
        }
      }
    }
  `)

  return (
    <>
    <h2>In Details</h2>
    <ul className="timeline">
      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">
              {query.prismicAboutPageComponents.data.current[0].label.text}
            </span>
            <span className="time-wrapper">
              <span className="time">
                {query.prismicAboutPageComponents.data.current[0].yr.text}
              </span>
            </span>
          </div>
          <div className="desc">
            {query.prismicAboutPageComponents.data.current[0].desc.text}
          </div>
        </div>
      </li>

      <li>
        <div className="direction-l">
          <div className="flag-wrapper">
            <span className="flag">
              {query.prismicAboutPageComponents.data.freelance[0].label.text}
            </span>
            <span className="time-wrapper">
              <span className="time">
                {query.prismicAboutPageComponents.data.freelance[0].yr.text}
              </span>
            </span>
          </div>
          <div className="desc">
            {query.prismicAboutPageComponents.data.freelance[0].desc.text}
          </div>
        </div>
      </li>

      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">
              {query.prismicAboutPageComponents.data.latomatina[0].label.text}
            </span>
            <span className="time-wrapper">
              <span className="time">
                {query.prismicAboutPageComponents.data.latomatina[0].yr.text}
              </span>
            </span>
          </div>
          <div className="desc">
            {query.prismicAboutPageComponents.data.latomatina[0].desc.text}
          </div>
        </div>
      </li>

      {query.prismicAboutPageComponents.data.horizons.map(res => {
        return (
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}

      {query.prismicAboutPageComponents.data.palawan.map(res => {
        return (
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}

      {query.prismicAboutPageComponents.data.rough.map(res => {
        return (
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}
      {query.prismicAboutPageComponents.data.grunt.map(res => {
        return (
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}

      {query.prismicAboutPageComponents.data.vocation.map(res => {
        return (
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}

      {query.prismicAboutPageComponents.data.r_d.map(res => {
        return (
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}
      {query.prismicAboutPageComponents.data.lab.map(res => {
        return (
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}

      {query.prismicAboutPageComponents.data.first.map(res => {
        return (
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}
      {query.prismicAboutPageComponents.data.uni.map(res => {
        return (
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}

      {query.prismicAboutPageComponents.data.hs.map(res => {
        return (
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}

      {query.prismicAboutPageComponents.data.genesis.map(res => {
        return (
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">{res.intro}</span>
                <span className="time-wrapper">
                  <span className="time">{res.years}</span>
                </span>
              </div>
              <div className="desc">{res.entry}</div>
            </div>
          </li>
        )
      })}
    </ul>
    
    </>
    
  )
}

export default Timeline1
/*   {query.prismicAboutPageComponents.data.first.map(f => {
          console.log(f.entry)
        })} */
