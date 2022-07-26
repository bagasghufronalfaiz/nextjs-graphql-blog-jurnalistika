import type { NextPage } from "next";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

const posts = [
    { title: "Next JS", excerpt: "Learn next JS" },
    { title: "Next with Tailwing", excerpt: "Learn next with tailwind" },
];

const Home: NextPage = () => {
    return (
        <Layout title="Jurnalistika by bagas">
            <div className="max-w-7xl mx-auto py-6 px-4 md:px-2 lg:px-2 xl:px-0">
                <main className="flex flex-col">
                    {posts.map((post) => (
                        <PostCard
                            title={post.title}
                            excerpt={post.excerpt}
                            key={post.title}
                        />
                    ))}
                </main>
            </div>
        </Layout>
    );
};

export default Home;
