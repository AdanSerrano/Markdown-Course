import { PostItems } from '@/components/post-items'
import { posts } from '#site/content'
import { sortPosts } from '@/lib/utils'

export default async function BlogPage() {
    const sortedPosts = sortPosts(posts.filter((post) => post.published))
    const displayPosts = sortedPosts;
    return (
        <div className='container max-w-6xl py-6 lg:py-10'>
            <div className='flex items-start gap-4 md:flex-row md:justify-between md:gap-8'>
                <div className='flex-1 space-y-4'>
                    <h1 className='inline-block font-black text-4xl xl:text-5xl'>
                        Blog
                    </h1>
                    <p className='text-xl text-muted-foreground'>
                        My ramblings on all things tech, design, and life.
                    </p>
                </div>
            </div>
            <hr className='mt-8 ' />
            {displayPosts?.length > 0 ? (
                <ul className='flex flex-col '>
                    {displayPosts.map((post) => {
                        const { slug, title, description, date } = post
                        return (
                            <li key={slug}>
                                <PostItems
                                    slug={slug}
                                    title={title}
                                    description={description}
                                    date={date}
                                />
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>
                    No posts found. Please check back later or contact me if you
                    believe this is a mistake.
                </p>
            )}
        </div>
    )
}
