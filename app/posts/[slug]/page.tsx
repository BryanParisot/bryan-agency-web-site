import RenderMdx from '@/components/blog/RenderMdx';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';


export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    const title = post?.title.replace(/\s+/g, '-').toLowerCase();
    const canonical = post?.canonical?.replace(/\s+/g, '-').toLowerCase();

    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `${process.env.URL_SITE}/posts/${canonical}`
        }
    };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    return (
        <>
            <div className="relative overflow-hidden bg-slate-950 pb-14 pt-36 sm:pb-20 sm:pt-44">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,64,47,0.32),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,230,214,0.16),transparent_28%)]" />
                <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
                    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                        Article de blog
                    </div>
                    <time dateTime={post.date} className="mt-6 block text-sm text-stone-300">
                        {format(parseISO(post.date), 'd LLLL yyyy')}
                    </time>
                    <h1 className="mx-auto mt-4 max-w-4xl font-anton text-3xl tracking-wide text-white sm:text-6xl">
                        {post.title}
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                        {post.description}
                    </p>
                    <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
                        <span className='rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-slate-900'>{post.category}</span>
                        <span className='rounded-full border border-white/15 px-4 py-2 text-sm text-stone-200'>{post.readTime} min de lecture</span>
                    </div>
                </div>
            </div>
            <section className="relative z-[1] -mt-8 pb-20">
                <article className="mx-auto max-w-5xl px-4 sm:px-6">
                    <RenderMdx blog={post} />
                </article>
            </section>
        </>
    );
};

export default PostLayout;
