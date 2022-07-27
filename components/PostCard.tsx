import React from "react";
import moment from "moment";
import Link from "next/link";

type post = {
    data?: string;
};

const PostCard = ({ data }: any) => {
    return (
        <div key={data.id}>
            <Link href={`/${data.id}`}>
                <div className="pointer-events-auto cursor-pointer bg-white leading-5 shadow-xl shadow-black/5 hover:bg-slate-100 ring-1 ring-slate-700/10 rounded-lg p-0 lg:p-8 pb-12 mb-10">
                    <div className="relative mb-6 lg:rounded-lg">
                        <img
                            src={data.jetpack_featured_media_url}
                            alt={data.title.rendered}
                            className="h-auto w-full object-cover shadow-md rounded-t-lg lg:rounded-lg"
                        />
                    </div>
                    <h1 className="transition duration-700 mb-4 cursor-pointer hover:text-pink-600 text-3xl font-semibold mx-4 lg:mx-0">
                        {data.title.rendered}
                    </h1>
                    <div className="text-lg text-gray-700 font-normal px-4 lg:px-0 mb-4">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.excerpt.rendered,
                            }}
                        ></div>
                    </div>
                    <div className="flex px-4 lg:px-0">
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
                                {moment(data.createdAt).format("MMMM DD, YYYY")}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PostCard;
