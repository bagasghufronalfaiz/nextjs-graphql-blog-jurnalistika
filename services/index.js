import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query GetPostsEdges {
            posts {
                edges {
                    node {
                        id
                        title
                        date
                        slug
                        excerpt
                        
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.posts.edges;
};

export const getPostDetails = async (slug) => {
    const query = gql`
        query getPostDetails($slug: string) {
            posts(where: { slug: $slug }) {
                id
                title
                date
                slug
                excerpt
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.posts;
};

// export const getPostDetails = async (slug) => {
//     const query = gql`
//         query getPostDetails($slug: String!) {
//             post(where: {slug: $slug}){
//                 author {
//                     bio
//                     name
//                     id
//                     photo {
//                         url
//                     }
//                 }
//                 createdAt
//                 slug
//                 title
//                 excerpt
//                 featuredimage {
//                     url
//                 }
//                 categories {
//                     name
//                     slug
//                 }
//                 content {
//                     raw
//                 }
//             }
//         }

//     `

//     const result = await request(graphqlAPI, query, { slug });

//     return result.post;
// }
