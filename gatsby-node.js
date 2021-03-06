/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const {createPage} = actions;

    return graphql(`
    {
        allMarkdownRemark {
            totalCount
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
      }
    `).then(result => {
        // query result
        // console.log(JSON.stringify(result, null, 4));
        result.data.allMarkdownRemark.edges.map(edge => {
            const node = edge.node;
            // to see page url
            // console.log("create page", `posts/${node.frontmatter.slug}`);
            createPage({
                path: `posts/${node.frontmatter.slug}`,
                component: path.resolve("./src/templetes/post.tsx"),
                context: {
                    slug: node.frontmatter.slug
                }
            })
        })
    })
}