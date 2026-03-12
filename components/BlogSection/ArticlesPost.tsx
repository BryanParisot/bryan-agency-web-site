import React from 'react'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'


const ArticlesPost = (post: Post) => {
    return (
        <article className="group flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white/95 p-4 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-34px_rgba(15,23,42,0.4)] sm:p-5">
            <div className="relative w-full overflow-hidden rounded-[1.25rem]">
                <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-[1.25rem] bg-stone-100 object-cover transition duration-500 group-hover:scale-[1.03] sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-black/5" />
            </div>
            <div className="flex max-w-xl flex-1 flex-col">
                <div className="mt-6 flex items-center gap-x-3 text-xs">
                    <time dateTime={post.date} className="text-stone-500">
                        {format(parseISO(post.date), 'd LLLL yyyy')}

                    </time>
                    <p
                        className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-semibold text-stone-700"
                    >
                        {post.category}
                    </p>
                    <span className='text-stone-500'>{post.readTime} min</span>
                </div>
                <div className="relative flex-1">
                    <h3 className="mt-4 text-xl font-semibold leading-7 text-slate-950 transition group-hover:text-primary">
                        <Link href={post.url}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </Link>
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 border-t border-stone-200/80 pt-5">
                    <img src={post.picture_author} alt="" className="h-11 w-11 rounded-full border border-stone-200 bg-stone-100" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-slate-950">
                            <span className="absolute inset-0" />
                            {post.author}
                        </p>
                        <p className="text-stone-500">{post.role}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticlesPost
