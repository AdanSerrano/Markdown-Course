import MDXComponents from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import { posts } from '#site/content';

interface SlugBlogPageProps {
    params: {
        slug: string[];
    }
}

async function getPostsFromParams(params: SlugBlogPageProps['params']) {
    const slug = params?.slug.join('/');
    const post = posts.find((post) => post.slugAsParams === slug);
    return post;
}

export async function generateStaticParams(): Promise<SlugBlogPageProps["params"][]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function SlugBlogPage({ params }: SlugBlogPageProps) {
    const post = await getPostsFromParams(params);

    if (!post || !post.published) {
        return notFound();
    }

    const MDXContent = post.body;

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2">{post.title}</h1>
            {post.description && (
                <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
            )}
            <hr className="my-4" />
            <MDXComponents code={MDXContent} />
        </article>
    );
}
