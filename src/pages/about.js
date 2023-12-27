// Step 1: Import React
/*import * as React from 'react'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}
export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage*/

import * as React from 'react'
import Layout from '../component/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there,what do you want to know about me :).</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage


