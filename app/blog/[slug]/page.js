import { getAllPosts, getPostBySlug } from '@/lib/blogPosts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
    return {
        title: post.title,
        description: post.excerpt,
    }
}

export default function BlogPostPage({ params }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
            <div className="container mx-auto px-6 py-16 max-w-3xl">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors mb-8"
                >
                    ← Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-10">
                    <div className="flex items-center gap-2 flex-wrap mb-5">
                        {post.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-slate-400 border-b border-slate-700/60 pb-6">
                        <span className="text-slate-200 font-medium">{post.author}</span>
                        <span className="text-cyan-500">•</span>
                        <span>{post.date}</span>
                        <span className="text-cyan-500">•</span>
                        <span>{post.readTime}</span>
                    </div>
                </header>

                {/* Content */}
                <article className="space-y-6 leading-relaxed text-slate-300 text-lg">
                    {post.content?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </article>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        By <span className="text-slate-200 font-medium">{post.author}</span>
                    </p>
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                    >
                        Talk to an Expert
                    </Link>
                </div>
            </div>
        </div>
    )
}

