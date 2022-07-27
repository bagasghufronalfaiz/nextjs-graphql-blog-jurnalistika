import React from "react";
import moment from "moment";

const PostDetail = ({ post }: any) => {
    return (
        <div className="pointer-events-auto bg-white leading-5 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 rounded-lg p-0 lg:p-8 pb-12 mb-10">
            <div>
                <h1 className="mb-8 text-3xl font-semibold">
                    {post.title.rendered}
                </h1>
            </div>
            <div className="relative overflow-hidden shadow-md mb-6">
                <img
                    src={post.jetpack_featured_media_url}
                    alt={post.title}
                    className="object-top h-full w-full rounded-t-lg lg:rounded-b-lg"
                />
            </div>
            <div className="px-4  lg:px-0">
                <div className="flex">
                    <div className="flex text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="inline align-middle text-gray-700 ml-1 text-lg">
                            {moment(post.createdAt).format("DD MMMM YYYY")}
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
