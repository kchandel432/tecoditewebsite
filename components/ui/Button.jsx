import React from 'react'
import { forwardRef } from 'react'

const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm',
    secondary: 'bg-white text-ink-800 border border-ink-200 hover:border-ink-300 hover:bg-ink-50 dark:bg-ink-800 dark:text-white dark:border-ink-700',
    ghost: 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800',
}

const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
}

const baseClasses = [
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
    'transition-colors duration-200 ease-corporate',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
]

const Button = forwardRef(({ variant = 'primary', size = 'md', className, asChild, children, ...props }, ref) => {
    const classes = baseClasses.concat([variants[variant], sizes[size], className]).filter(Boolean).join(' ')

    if (asChild) {
        return React.cloneElement(children, {
            ref,
            className: [classes, children?.props?.className].filter(Boolean).join(' '),
            ...props,
        })
    }

    return (
        <button ref={ref} type="button" className={classes} {...props}>
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export { Button }
export default Button
