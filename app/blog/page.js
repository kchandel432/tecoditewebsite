import { getAllPosts } from '@/lib/blogPosts'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export const metadata = {
    title: 'Blog — Techodite',
    description:
        'Insights from Techodite on enterprise AI, cybersecurity, compliance, and secure cloud transformation for regulated organizations worldwide, daily.',
}

export default function BlogIndexPage() {
    const posts = getAllPosts()

    return (
        <div className="min-h-screen bg-white text-ink-700 dark:bg-ink-900 dark:text-ink-200">
            <Section
                eyebrow="Insights & Research"
                title="The Techodite Blog"
                intro="Insights from Techodite on enterprise AI, cybersecurity, compliance, and secure cloud transformation."
            />

            <section className="py-16">
                <div className="container-mnc">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-ink-500 dark:text-ink-300">No posts published yet. Check back soon.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 p-6 transition-colors hover:border-brand-300 dark:hover:border-brand-700"
                                >
                                    <div className="flex items-center gap-2 flex-wrap mb-4">
                                        {post.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-500 dark:text-ink-400 font-medium bg-white dark:bg-ink-800"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-ink-500 dark:text-ink-300 mb-5 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-ink-100 dark:border-ink-800 text-xs text-ink-400 dark:text-ink-500">
                                        <div className="flex items-center gap-2">
                                            <span className="text-ink-700 dark:text-ink-300">{post.author}</span>
                                        </div>
                                        <div className="mt-2 md:mt-0 flex items-center gap-3">
                                            <span>{post.date}</span>
                                            <span className="text-ink-400">•</span>
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
