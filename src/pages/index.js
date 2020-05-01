import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/meta'
import Layout from 'components/layout'

const BlogIndex = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />

        <div className="content-container">
          
          <div className="text">
            
            <Img fluid={data.titan23logo.childImageSharp.fluid} className="logo" alt="Titan23 logo" style={{width:'100%', display:'inline-block'}} />
            
            <h2>Welcome!</h2>
            <p>Let's stay connected!<br />Download my App Titan23</p>

            <div className="mb-3">
              <a href="https://play.google.com/store/apps/details?id=com.titan23" alt="Get it on Google Play" className="store">
                <Img fluid={data.store_google.childImageSharp.fluid} alt="Get it on Google Play" style={{width:'100%', display:'inline-block'}} />
              </a>
              <a href="https://apps.apple.com/us/app/titan23/id1454549170" alt="Download on the App Store" className="store">
                <Img fluid={data.store_apple.childImageSharp.fluid} alt="Download on the App Store" style={{width:'100%', display:'inline-block'}} />
              </a>
            </div>
          
            <div className="bottom-button-holder">
              
              <hr className="w-100" />
              
              <div className="row">
                
                <div className="col-sm-6">
                  <h5><em>For Help &amp; Support, please click on the button below</em></h5>
                  <a href="mailto:support@popflyxp.com" className="btn btn-info" target="_blank" title="Click here to send us a email">Help &amp; Support</a>
                </div>
                
                <div className="col-sm-6">
                  <h5><em>For More Information, please click on the button below</em></h5>
                  <a href="mailto:info@popflyxp.com" className="btn btn-info" target="_blank" title="Click here to send us a email">More Information</a>
                </div>
                
              </div>
              
              
            </div>

          </div>
          
        </div>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    titan23logo: file(absolutePath: { regex: "/titan23logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    store_google: file(absolutePath: { regex: "/store_google.png/" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }  
    store_apple: file(absolutePath: { regex: "/store_apple.png/" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
  }
`
