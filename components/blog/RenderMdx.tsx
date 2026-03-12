"use client";

import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface Blog {
    body: {
        code: string;
    };
}

interface RenderMdxProps {
    blog: Blog;
}

const RenderMdx: React.FC<RenderMdxProps> = ({ blog }) => {
    const MDXContent = useMDXComponent(blog.body.code);

    return (
        <div className='
            col-span-12 lg:col-span-8 max-w-none rounded-[2rem] border border-stone-200/80 bg-white/95
            px-6 py-8 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.45)] backdrop-blur sm:px-10 sm:py-12
        '>
            <div
                className='
                    prose prose-stone sm:prose-base md:prose-lg max-w-none
                    prose-headings:font-anton prose-headings:tracking-wide prose-headings:text-slate-950
                    prose-p:text-slate-700 prose-p:leading-8
                    prose-strong:text-slate-950
                    prose-a:text-primary prose-a:decoration-primary/35 prose-a:underline-offset-4 hover:prose-a:text-red-700
                    prose-blockquote:rounded-r-2xl prose-blockquote:border-l-4 prose-blockquote:border-primary
                    prose-blockquote:bg-secondary prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:text-slate-800 prose-blockquote:not-italic
                    prose-li:text-slate-700 prose-li:marker:text-primary
                    prose-hr:border-stone-200
                    prose-img:rounded-3xl prose-img:shadow-lg
                    prose-code:rounded prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-primary prose-code:before:content-none prose-code:after:content-none
                    prose-pre:border prose-pre:border-stone-200 prose-pre:bg-slate-950
                    first-letter:text-3xl first-letter:font-semibold first-letter:text-slate-950 sm:first-letter:text-5xl
                '
            >
            <MDXContent components={{ Image }} />
            </div>
        </div>
    );
};

export default RenderMdx;
