import React from "react";
import { getPosts, getPostDetails } from "../services/index";
import Layout from "../components/Layout";
import PostDetail from "../components/PostDetail";

const PostDetails = ({ post }: any) => {
    return (
        <Layout title={post.title.rendered}>
            <div className="max-w-7xl mx-auto py-6 px-4 md:px-2 lg:px-2 xl:px-0">
                <main className="flex flex-col">
                    <PostDetail post={post} />
                </main>
            </div>
        </Layout>
    );
};

export default PostDetails;

type Params = {
    params: {
        id: number;
    };
};

export async function getStaticProps({ params }: Params) {
    const res = await fetch(
        "https://internal.jurnalistika.id/wp-json/wp/v2/posts/" + params.id
    );
    const post = await res.json();
    return {
        props: { post: post },
    };
}

export async function getStaticPaths() {
    const res = await fetch(
        "https://internal.jurnalistika.id/wp-json/wp/v2/posts"
    );
    const posts = await res.json();
    return {
        paths: posts.map((post: any) => {
            return {
                params: {
                    id: post.id.toString(),
                },
            };
        }),
        fallback: false,
    };
}
