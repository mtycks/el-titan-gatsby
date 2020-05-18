import React from "react"

import Layout from "../components/layout"
import {Link} from "gatsby"

const NotFoundPage = () => (
  <Layout secondary="true">

    <section id="top" className="portfolio-item" style={{padding:"1.5rem"}}>&nbsp;</section>

    <div className="container">
      <div className="row">
        <div className="col-12 text-center pb-5 pt-5">
          <h1 className="museo" style={{color:"rgba(255,255,255,.9)", fontSize:"20rem"}}>404</h1>
          <p className="lead" style={{color:"#FFFFFF"}}>Hmm, looks like this page doesn't exist.</p>
          <p><Link to="/" className="btn btn-primary">Go Back to Home</Link></p>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default NotFoundPage
