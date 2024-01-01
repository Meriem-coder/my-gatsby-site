/*import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link><br/>
      <a href="/about">About</a>
      <p>.</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage*/
import * as React from 'react'
import Layout from '../component/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <p>Hello 2IAD.</p>

      <StaticImage
        alt="voici une image"
        src="https://www.aquaportail.com/pictures2307/phones/chat-domestique-europeen.jpg"
        layout="fullWidth"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage







