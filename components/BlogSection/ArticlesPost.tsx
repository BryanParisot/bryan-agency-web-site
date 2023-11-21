import React from 'react'
import { format, parseISO } from 'date-fns'
// import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import Image from 'next/image'


const ArticlesPost = (post: Post) => {
    return (
        <article key={post.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
                <img
                    src={post.image}
                    alt="aaaaa"
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                        {format(parseISO(post.date), 'LLLL d, yyyy')}

                    </time>
                    <p
                        // href={post.category}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {post.category}
                    </p>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.url}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                    </h3>
                    {/* <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}

                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.picture_author} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0" />
                            {post.author}
                        </p>
                        <p className="text-gray-600">{post.role}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticlesPost