import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Notes from "../components/IndexPage/notes"

const IndexPage = () => (
  <Layout>
    <Seo title="Index" />
    <section>
      <Notes />
    </section>
  </Layout>
)

export default IndexPage
