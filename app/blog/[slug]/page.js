import { getAllPosts, getPostBySlug } from '@/lib/blogPosts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }) {
    const post = getPostBySlug(params.slug)
    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        }
    }
    const metaDesc =
        post.excerpt.length >= 140 && post.excerpt.length <= 160
            ? post.excerpt
            : 'Read Techodite\u2019s latest research on enterprise AI security, cybersecurity, compliance, and secure cloud transformation from our engineering team.'
    return {
        title: `${post.title} — Techodite`,
        description: metaDesc,
    }
}

export default function BlogPostPage({ params }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <div className="container-mnc py-16 max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium transition-colors mb-8"
                >
                    ← Back to Blog
                </Link>

                <header className="mb-10">
                    <div className="flex items-center gap-2 flex-wrap mb-5">
                        {post.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 font-medium bg-white dark:bg-ink-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="h1 mb-6">{post.title}</h1>

                    <div className="flex items-center gap-4 text-sm text-ink-500 dark:text-ink-300 border-b border-ink-100 dark:border-ink-800 pb-6">
                        <span className="text-ink-700 dark:text-ink-200 font-medium">{post.author}</span>
                        <span className="text-ink-400">•</span>
                        <span>{post.date}</span>
                        <span className="text-ink-400">•</span>
                        <span>{post.readTime}</span>
                    </div>
                </header>

                <article className="space-y-6 leading-relaxed text-ink-600 dark:text-ink-300 text-lg">
                    {post.content?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </article>

                <div className="mt-12 pt-8 border-t border-ink-100 dark:border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-ink-500 dark:text-ink-300">
                        By <span className="text-ink-900 dark:text-white font-medium">{post.author}</span>
                    </p>
                    <Button asChild>
                        <a href="/contact">Talk to sales</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
