'use client'

import toast from 'react-hot-toast'

export function useToast() {
    const showSuccess = (message) => {
        toast.success(message, {
            duration: 4000,
            position: 'top-right',
        })
    }

    const showError = (message) => {
        toast.error(message, {
            duration: 5000,
            position: 'top-right',
        })
    }

    const showLoading = (message) => {
        return toast.loading(message, {
            position: 'top-right',
        })
    }

    const showInfo = (message) => {
        toast(message, {
            icon: 'ℹ️',
            duration: 3000,
            position: 'top-right',
        })
    }

    return {
        showSuccess,
        showError,
        showLoading,
        showInfo,
        dismiss: toast.dismiss,
    }
}