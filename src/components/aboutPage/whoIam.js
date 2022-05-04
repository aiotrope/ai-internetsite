import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { WindupChildren } from "windups"
import { PrismicRichText } from "@prismicio/react"
import Timeline1 from "./timeline1"
import OpenStudies from "./openStudies"

const MoreAboutMe = () => {
  return (
    <>
      <h2>More About Myself</h2>
      <p>
        Before becoming a professional cook, I worked as a food technologist.
        I'll admit that coding was never my first option, that it was never my
        cup of tea, but that was before the passage of time convinced me
        otherwise to change my mind.
      </p>
    </>
  )
}

const Whoiam = () => {
  const query = useStaticQuery(graphql`
    query {
      prismicAboutPageComponents {
        data {
          more_about_me {
            text
            richText
          }
        }
      }
    }
  `)

  const [moreAboutMe, setMoreAboutMe] = React.useState("")
  const [moreAboutMeButton, setMoreAboutMeButton] = React.useState(false)
  const [aboutMeTimeLine, setAboutMeTimeLine] = React.useState("")
  const [aboutMeTimeLineButton, setAboutMeTimeLineButton] =
    React.useState(false)
  const [sample, setSample] = React.useState("")
  const [sampleButton, setSampleButton] = React.useState(false)

  const _moreAboutMe = () => {
    setMoreAboutMe(
      <PrismicRichText
        field={query.prismicAboutPageComponents.data?.more_about_me.richText}
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
        }}
      />
    )
    setMoreAboutMeButton(false)
    const aboutMeTimeLineTimer = setTimeout(() => {
      setAboutMeTimeLineButton(true)
    }, 9000)
  }

  const _aboutMeTimeLine = () => {
    setAboutMeTimeLine(<Timeline1 />)
    setAboutMeTimeLineButton(false)
    setMoreAboutMe(false)
    const sampleTimer = setTimeout(() => {
      setSampleButton(true)
    }, 1000)
  }

  const _sample = () => {
    setAboutMeTimeLine("")
    setSample(<OpenStudies />)
    setSampleButton(false)
  }

  React.useEffect(() => {
    const moreAboutMeTimer = setTimeout(() => {
      setMoreAboutMeButton(true)
    }, 12000)
  }, [])

  return (
    <>
      <div
        style={{
          textAlign: `center`,
          marginTop: `1rem`,
          marginBottom: `1rem`,
        }}
      >
        {moreAboutMeButton && (
          <button
            style={{ marginTop: `1rem`, marginBottom: `1rem` }}
            onClick={() => _moreAboutMe()}
          >
            More About Me
          </button>
        )}
      </div>

      {moreAboutMe}

      <div
        style={{
          textAlign: `center`,
          marginTop: `1rem`,
          marginBottom: `1rem`,
        }}
      >
        {aboutMeTimeLineButton && (
          <button
            style={{ marginTop: `1rem`, marginBottom: `1rem` }}
            onClick={() => _aboutMeTimeLine()}
          >
            Details about myself in greater depth
          </button>
        )}
      </div>
      {aboutMeTimeLine}
      <div
        style={{
          textAlign: `center`,
          marginTop: `1rem`,
          marginBottom: `1rem`,
        }}
      >
        {sampleButton && (
          <button
            style={{ marginTop: `1rem`, marginBottom: `1rem` }}
            onClick={() => _sample()}
          >
            Open University Studies
          </button>
        )}
      </div>
      {sample}
    </>
  )
}

export default Whoiam
