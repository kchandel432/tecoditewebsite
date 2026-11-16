'use client'

import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

export default function SocialMedia({ size = 'medium', variant = 'default' }) {
    const companySocials = {
        instagram: { handle: 'techoditesolutionpvt', url: 'https://instagram.com/techoditesolutionpvt' },
        linkedin: { handle: 'techodite-solutions', url: 'https://linkedin.com/company/techodite-solutions' },
        twitter: { handle: 'techodite_ai', url: 'https://twitter.com/techodite_ai' },
        github: { handle: 'techodite', url: 'https://github.com/techodite' },
        email: { handle: 'techodite@gmail.com', url: 'mailto:techodite@gmail.com' },
    }

    const sizeClasses = {
        small: 'w-8 h-8',
        medium: 'w-10 h-10',
        large: 'w-12 h-12',
    }

    const iconSizes = {
        small: 16,
        medium: 20,
        large: 24,
    }

    const base = 'flex items-center justify-center border border-ink-200 dark:border-ink-700 rounded-lg bg-white dark:bg-ink-800 text-ink-400 hover:text-ink-900 dark:hover:text-white hover:bg-ink-50 dark:hover:bg-ink-800/50 transition-colors duration-200'

    const socialPlatforms = [
        { key: 'instagram', icon: Instagram },
        { key: 'linkedin', icon: Linkedin },
        { key: 'twitter', icon: Twitter },
        { key: 'github', icon: Github },
        { key: 'email', icon: Mail },
    ]

    return (
        <div className="flex items-center gap-3">
            {socialPlatforms.map(({ key, icon: Icon }) => (
                <a
                    key={key}
                    href={companySocials[key].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${sizeClasses[size]} ${base}`}
                    aria-label={`Follow us on ${key}`}
                    title={`${key.charAt(0).toUpperCase() + key.slice(1)}: ${companySocials[key].handle}`}
                >
                    <Icon className="text-ink-400 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white" size={iconSizes[size]} />
                </a>
            ))}
        </div>
    )
}

export function FollowButton({ platform = 'instagram' }) {
    const platforms = {
        instagram: { icon: Instagram, text: 'Follow on Instagram', handle: '@techoditesolutionpvt', url: 'https://instagram.com/techoditesolutionpvt' },
        linkedin: { icon: Linkedin, text: 'Follow on LinkedIn', handle: 'Techodite Solutions', url: 'https://linkedin.com/company/techodite-solutions' },
        twitter: { icon: Twitter, text: 'Follow on Twitter', handle: '@techodite_ai', url: 'https://twitter.com/techodite_ai' },
    }

    const { icon: Icon, text, handle, url } = platforms[platform]

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-white font-medium hover:bg-ink-50 dark:hover:bg-ink-800 hover:text-ink-900 dark:hover:text-white transition-colors duration-200"
        >
            <Icon className="text-ink-600 dark:text-ink-400" size={20} />
            <div className="text-left">
                <div className="text-sm">{text}</div>
                <div className="text-xs text-ink-500 dark:text-ink-400">{handle}</div>
            </div>
        </a>
    )
}
