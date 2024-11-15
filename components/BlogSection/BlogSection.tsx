import React from 'react'
import ArticlesPost from './ArticlesPost'
import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Button } from "../ui/button"
import Link from 'next/link'


const BlogSection = () => {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 3);

    return (
        <div className="bg-white py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold  text-gray-900 sm:text-5xl font-anton tracking-wider mb-2">Nos articles de <span className="text-primary">blog </span> </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Explorez notre phare de connaissances sur des sujets captivants.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                    {posts.map((post, idx) => (
                        <ArticlesPost key={idx} {...post} />
                    ))}
                </div>

                <div className="flex justify-center items-center mt-12">
                    <Link href="/blog">
                        <Button variant="secondary" size="lg">Lire plus d'articles</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSection