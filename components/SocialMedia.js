'use client'

import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

export default function SocialMedia({ size = 'medium', variant = 'default' }) {
    const companySocials = {
        instagram: {
            handle: 'techoditesolutionpvt',
            url: 'https://instagram.com/techoditesolutionpvt',
            color: 'from-pink-500 to-purple-600'
        },
        linkedin: {
            handle: 'techodite-solutions',
            url: 'https://linkedin.com/company/techodite-solutions',
            color: 'from-blue-600 to-blue-800'
        },
        twitter: {
            handle: 'techodite_ai',
            url: 'https://twitter.com/techodite_ai',
            color: 'from-cyan-500 to-blue-500'
        },
        github: {
            handle: 'techodite',
            url: 'https://github.com/techodite',
            color: 'from-gray-700 to-gray-900'
        },
        email: {
            handle: 'techodite@gmail.com',
            url: 'mailto:techodite@gmail.com',
            color: 'from-red-500 to-orange-600'
        },
        website: {
            handle: 'techodite.com',
            url: '#',
            color: 'from-green-500 to-emerald-600'
        }
    }

    const sizeClasses = {
        small: 'w-8 h-8',
        medium: 'w-10 h-10',
        large: 'w-12 h-12'
    }

    const iconSizes = {
        small: 16,
        medium: 20,
        large: 24
    }

    const variants = {
        default: 'rounded-lg hover:shadow-lg transition-all',
        circle: 'rounded-full hover:shadow-lg transition-all',
        minimal: 'rounded-lg hover:bg-gray-800/50 transition-colors'
    }

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
                    className={`
            ${sizeClasses[size]}
            ${variants[variant]}
            bg-gradient-to-br ${companySocials[key].color}
            flex items-center justify-center
            hover:scale-105 active:scale-95
            transition-all duration-200
          `}
                    aria-label={`Follow us on ${key}`}
                    title={`${key.charAt(0).toUpperCase() + key.slice(1)}: ${companySocials[key].handle}`}
                >
                    <Icon className="text-white" size={iconSizes[size]} />
                </a>
            ))}
        </div>
    )
}

// Also create a social media follow button for specific platforms
export function FollowButton({ platform = 'instagram' }) {
    const platforms = {
        instagram: {
            icon: Instagram,
            text: 'Follow on Instagram',
            handle: '@techoditesolutionpvt',
            color: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-pink-500/30',
            url: 'https://instagram.com/techoditesolutionpvt'
        },
        linkedin: {
            icon: Linkedin,
            text: 'Follow on LinkedIn',
            handle: 'Techodite Solutions',
            color: 'bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-blue-500/30',
            url: 'https://linkedin.com/company/techodite-solutions'
        },
        twitter: {
            icon: Twitter,
            text: 'Follow on Twitter',
            handle: '@techodite_ai',
            color: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/30',
            url: 'https://twitter.com/techodite_ai'
        }
    }

    const { icon: Icon, text, handle, color, url } = platforms[platform]

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        inline-flex items-center gap-3
        px-6 py-3 rounded-lg
        ${color}
        text-white font-semibold
        hover:shadow-lg transition-all
        hover:scale-105 active:scale-95
      `}
        >
            <Icon className="text-white" size={20} />
            <div className="text-left">
                <div>{text}</div>
                <div className="text-sm text-white/80">{handle}</div>
            </div>
        </a>
    )
}