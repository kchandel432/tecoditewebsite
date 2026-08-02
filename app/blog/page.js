import { getAllPosts } from '@/lib/blogPosts'
import Link from 'next/link'

export const metadata = {
    title: 'Blog',
    description:
        'Insights from Techodite on enterprise AI, cybersecurity, compliance, and secure cloud transformation.',
}

export default function BlogIndexPage() {
    const posts = getAllPosts()

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-transparent">
                <div className="container mx-auto px-6 text-center">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                        Insights & Research
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-white">
                        The Techodite Blog
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Insights from Techodite on enterprise AI, cybersecurity, compliance, and
                        secure cloud transformation.
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400">No posts published yet. Check back soon.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-slate-900/50 backdrop-blur border border-slate-700/60 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all flex flex-col"
                                >
                                    <div className="flex items-center gap-2 flex-wrap mb-4">
                                        {post.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/60 text-xs text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-300">{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span>{post.date}</span>
                                            <span className="text-cyan-500">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

