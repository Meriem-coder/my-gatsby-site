/*import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link><br/>
      <a href="/about">About</a>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage*/
import * as React from 'react'
import Layout from '../component/Layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello 2IAD.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage