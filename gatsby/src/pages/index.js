import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const query = graphql`
  query {
    allStrapiRestaurant {
      edges {
        node {
          strapiId
          name
          description
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

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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
  </Layout>
)

export default IndexPage
