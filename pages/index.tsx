import type { NextPage } from "next";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import {getPosts} from "../services/index";

const Home: NextPage = ({ posts }:any) => {
    return (
        <Layout title="Jurnalistika by bagas">
            <div className="max-w-7xl mx-auto py-6 px-4 md:px-2 lg:px-2 xl:px-0">
                <main className="flex flex-col">
                    {posts.map((post:any) => (
                        <PostCard
                            data={post} key={post.id}
                        />
                    ))}
                </main>
            </div>
        </Layout>
    );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch('https://internal.jurnalistika.id/wp-json/wp/v2/posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}