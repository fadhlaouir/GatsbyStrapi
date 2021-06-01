import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.css"

export const query = graphql`
  query {
    allStrapiRestaurant {
      edges {
        node {
          strapiId
          name
          description
          image {
            url
          }
        }
      }
    }
    allStrapiCategory {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

function IndexPage({ data }) {
  // const image = getImage(data.allStrapiRestaurant.edges.node.image)
  return (
    <Layout>
      <Seo title="Home" />
      {/* Method One */}
      <StaticQuery
        query={query}
        render={data => (
          <div>
            <h3>Restaurant</h3>
            <ul>
              {data.allStrapiRestaurant.edges.map(restaurant => (
                <li key={restaurant.node.strapiId}>
                  {restaurant.node.name}
                  <ul>{restaurant.node.description}</ul>
                  <GatsbyImage
                    image={getImage(restaurant.node.image)}
                    alt={restaurant.node.name}
                  />
                </li>
              ))}
            </ul>
            <h3>Categories</h3>
            <ul>
              {data.allStrapiCategory.edges.map(category => (
                <li key={category.node.strapiId}>{category.node.name}</li>
              ))}
            </ul>
          </div>
        )}
      />
      {/* Method Two */}
      {/* <section>
        <h3>Restaurant</h3>
        <ul>
          {data.allStrapiRestaurant.edges.map(restaurant => (
            <li key={restaurant.node.strapiId}>
              {restaurant.node.name}
              <ul>{restaurant.node.description}</ul>
            </li>
          ))}
        </ul>
        <h3>Categories</h3>
        <ul>
          {data.allStrapiCategory.edges.map(category => (
            <li key={category.node.strapiId}>{category.node.name}</li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}
export default IndexPage
