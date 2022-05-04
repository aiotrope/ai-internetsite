import * as React from "react"
import { Link } from "gatsby"
import Timeline from "../components/aboutPage/timeline"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { WindupChildren } from "windups"

const Whoiam = () => {
  return (
    <>
      <h2>Whoiam</h2>
      <p>
        Hey there! My name is Arnel Imperial, and I'd like to welcome you to my
        small corner on the internet, where I save my imprints. I develop
        websites just like this one, for instance. Building websites is one of
        my connections to my way of life.
      </p>
      <p>
        Even though this activity provides me with numerous reasons to get up in
        the morning and sleep late at night, it is not yet my bread & butter.
        But despite this, I hope to put it to good use in meeting life's
        pressing demands. I've learned a lot and expect more challenges to come
        and simply having fun while learning.
      </p>
    </>
  )
}

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
      <p>
        Coding, in a nutshell, it's an acquired taste for me, but if the perfect
        chance presents itself, I'd like to pursue a career in this field. I'm
        striving to be upbeat about it. Good luck to me, and thanks in advance
        for your good wishes (for those who do). Bless your heart for those who
        don't.
      </p>
    </>
  )
}

const InDepthDetailsAboutMe = () => {
  return (
    <>
      <h2>In Depth Details About Me</h2>
      <p>
        Before becoming a professional cook, I worked as a food technologist.
        I'll admit that coding was never my first option, that it was never my
        cup of tea, but that was before the passage of time convinced me
        otherwise to change my mind.
      </p>
      <p>
        Coding, in a nutshell, it's an acquired taste for me, but if the perfect
        chance presents itself, I'd like to pursue a career in this field. I'm
        striving to be upbeat about it. Good luck to me, and thanks in advance
        for your good wishes (for those who do).
      </p>
    </>
  )
}

const About = () => {
  const [moreAboutMe, setMoreAboutMe] = React.useState("")
  const [moreAboutMeButton, setMoreAboutMeButton] = React.useState(false)
  const [inDepthDetailsAboutMe, setInDepthDetailsAboutMe] = React.useState("")
  const [inDepthDetailsAboutMeButton, setinDepthDetailsAboutMeButton] = React.useState(false)

  const _moreAboutMe = () => {
    setMoreAboutMe(<MoreAboutMe />)
    setMoreAboutMeButton(false)
    const inDepthDetailsAboutMeTimer = setTimeout(() => {
      setinDepthDetailsAboutMeButton(true)
    }, 2000)
  }

  const _inDepthDetailsAboutMe = () => {
    setInDepthDetailsAboutMe(<Timeline />)
    setinDepthDetailsAboutMeButton(false)
    setMoreAboutMe(false)
    
  }

  React.useEffect(() => {
    const moreAboutMeTimer = setTimeout(() => {
      setMoreAboutMeButton(true)
    }, 2000)
  }, [])

  return (
    <Layout>
      <Seo title="About" />
      <section>
        {<Whoiam />}
        <div
          style={{
            textAlign: `center`,
            marginTop: `3rem`,
            marginBottom: `3rem`,
          }}
        >
          {moreAboutMeButton && (
            <button
              style={{ marginTop: `3rem`, marginBottom: `3rem` }}
              onClick={() => _moreAboutMe()}
            >
              More About Me
            </button>
          )}
        </div>
      </section>

      <section>
        {moreAboutMe}

        <div
          style={{
            textAlign: `center`,
            marginTop: `3rem`,
            marginBottom: `3rem`,
          }}
        >
          {inDepthDetailsAboutMeButton && (
            <button
              style={{ marginTop: `3rem`, marginBottom: `3rem` }}
              onClick={() => _inDepthDetailsAboutMe()}
            >
              In Depth Details About Me
            </button>
          )}
        </div>
      </section>

      <section>
        {inDepthDetailsAboutMe}
      </section>
    </Layout>
  )
}

export default About
