import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import RenderMdx from '@/components/blog/RenderMdx';


export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
    return {
        title: post.title,
        description: post.description,
    };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    return (
        <>
            <div className="bg-emerald-800 mb-8 text-center pb-10 pt-36 sm:pt-44 sm:pb-32 space-y-6">
                <time dateTime={post.date} className="mb-1 text-xs text-emerald-50">
                    {format(parseISO(post.date), 'd LLLL yyyy')}
                </time>
                <h1 className="font-semibold text-emerald-50 text-2xl sm:text-5xl">{post.title}</h1>
                <div className='space-x-8'>
                    <span className='bg-emerald-100 px-4 py-2 rounded-full'>{post.category}</span>
                    <span className='text-emerald-100 text-sm'>{post.readTime} min</span>
                </div>
            </div>
            <article className="mx-auto max-w-4xl py-8">
                {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
                <RenderMdx blog={post} />
            </article>
        </>
    );
};

export default PostLayout;
