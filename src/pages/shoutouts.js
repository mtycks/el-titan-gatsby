import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

import Video from '../../content/videos/Video.mp4'
import VideoWebm from '../../content/videos/Video.webm'
import Video2 from '../../content/videos/Video_2.mp4'
import Video2Webm from '../../content/videos/Video_2.webm'
import Video4 from '../../content/videos/Video_4.mp4'
import Video4Webm from '../../content/videos/Video_4.webm'
import Poster1 from '../../content/images/poster-1.jpg'
import Poster2 from '../../content/images/poster-2.jpg'
import Poster3 from '../../content/images/poster-3.jpg'

const ShoutoutsPage = ({ data, location }) => {
  
  const shoutoutVideos = [
    {mp4:Video4, webm:Video4Webm, title: 'Happy Birthday', link: 'https://google.com', poster:Poster1},
    {mp4:Video2, webm:Video2Webm, title: 'Happy Anniversary', link: 'https://google.com', poster:Poster2},
    {mp4:Video, webm:VideoWebm, title: 'Happy Mother\'s Day', link: 'https://google.com', poster:Poster3},
    
  ]

  console.log(shoutoutVideos)
  
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />

      <div className="container shoutouts-container mt-5">

        <div className="row">

          <div className="col-md-8 offset-md-2 text-center">

            <Img fluid={data.titan23logo.childImageSharp.fluid} className="logo" alt="Titan23 logo" style={{width:'40%', display:'inline-block'}} />
            
            <h2>Get a SHOUTOUT from EL TITAN!</h2>
            <p className="lead">Surprise your friends and family with a personalized message from Adrian.</p>
            <h3 className="mt-0">You create the message* and Adrian will deliver it.</h3>

          </div>

          {shoutoutVideos.map((shoutoutvideo, index) => {
            
            return(
              <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 offset-0 " key={index}>
                          
                <article className="video-card">
                  <aside className="video-card__aside">

                    <figure className="video-card__figure">

                      <div className="video-card__image">
                        <video controls poster={shoutoutvideo.poster}>
                          <source src={shoutoutvideo.mp4} type="video/mp4" />
                          <source src={shoutoutvideo.webm} type="video/webm" />
                        </video>
                      </div>

                    </figure>

                    <header className="video-card__header">
                      <h3 className="video-card__title">{shoutoutvideo.title}</h3>
                    </header>

                    <footer class="video-card__footer">
                      <div class="video-card__actions">
                        <a href={shoutoutvideo.link} class="btn btn-primary btn-block">
                          Order Now
                        </a>
                      </div>
                    </footer>

                  </aside>
                </article>

              </div>
            )

          })}

          <div className="col-md-12 text-center mt-5">
            <h3>Surprise your friends or co-workers<br />by having Adrian on your next Zoom meeting. </h3>
            <h2>Have Adrian deliver a Team Thank You or some Monday Motivation.</h2>
          </div>

          <div className="col-md-4 offset-md-4">
                          
            <article className="video-card">
              <aside className="video-card__aside">

                <figure className="video-card__figure">

                  <div className="video-card__image">
                    <Img fluid={data.zoom_call.childImageSharp.fluid} />
                  </div>

                </figure>

                <header className="video-card__header">
                  <h3 className="video-card__title">Zoom Call</h3>
                </header>

                <footer class="video-card__footer">
                  <div class="video-card__actions">
                    <a href="https://google.com" class="btn btn-primary btn-block">
                      Order Now
                    </a>
                  </div>
                </footer>

              </aside>
            </article>

          </div>

          <div className="col-12 col-sm-8 offset-sm-2 text-center">
            <p><small><sup>*</sup>All messages are subject to approval by Adrian Gonzalez. <br />Any messages containing language determined by PopFlyXP to be discriminatory or promoting violence based on race, ethnicity, religion, gender or sexual orientation will not be considered.</small></p>
          </div>


        </div>

      </div>

    </Layout>
  )
}

export default ShoutoutsPage

export const pageQuery = graphql`
  query ShoutoutsQuery {
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
    zoom_call: file(absolutePath: { regex: "/zoom-16x9.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
