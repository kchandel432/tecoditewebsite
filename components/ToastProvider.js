'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastProvider({ children }) {
    return (
        <>
            {children}
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#1f2937',
                        color: '#fff',
                        border: '1px solid #374151',
                        borderRadius: '0.5rem',
                        padding: '16px',
                        maxWidth: '500px',
                    },
                    success: {
                        iconTheme: {
                            primary: '#10b981',
                            secondary: '#fff',
                        },
                        style: {
                            background: '#064e3b',
                            border: '1px solid #047857',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                        style: {
                            background: '#7f1d1d',
                            border: '1px solid #dc2626',
                        },
                    },
                    loading: {
                        style: {
                            background: '#1e293b',
                            border: '1px solid #475569',
                        },
                    },
                }}
            />
        </>
    )
}