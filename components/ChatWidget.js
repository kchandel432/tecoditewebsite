'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I'm your AI assistant from Techodite. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) throw new Error('Failed to get response');

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Sorry, I'm having trouble connecting. Please try again later or contact us directly."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex w-10 h-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-card hover:bg-brand-700 transition-colors"
                aria-label="Open chat"
            >
                <MessageSquare size={20} strokeWidth={1.5} />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-6 z-50 w-full md:w-96 max-w-xs flex h-[500px] flex-col rounded-xl border border-ink-200 dark:border-ink-700 shadow-card bg-white dark:bg-ink-800">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-ink-100 dark:border-ink-800">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex-shrink-0">
                                <MessageSquare size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-ink-900 dark:text-white">Techodite assistant</h3>
                                <p className="text-xs text-ink-500 dark:text-ink-300">Online &bull; Ready to help</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 rounded-lg text-ink-400 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800 transition-colors"
                            aria-label="Close chat"
                        >
                            <X size={20} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-xl p-3 ${msg.role === 'user'
                                        ? 'bg-brand-600 text-white'
                                        : 'bg-ink-100 dark:bg-ink-800 text-ink-900 dark:text-white'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        {msg.role === 'assistant' && (
                                            <MessageSquare className="text-brand-600 dark:text-brand-400" size={14} strokeWidth={1.5} />
                                        )}
                                        <span className="text-xs font-semibold">
                                            {msg.role === 'user' ? 'You' : 'AI Assistant'}
                                        </span>
                                    </div>
                                    <p className="text-sm">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-ink-100 dark:bg-ink-800 text-ink-900 dark:text-white rounded-xl p-3">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="text-brand-600 dark:text-brand-400" size={14} strokeWidth={1.5} />
                                        <span className="text-xs font-semibold">AI Assistant</span>
                                    </div>
                                    <p className="text-xs text-ink-500 dark:text-ink-400 mt-2">Typing&hellip;</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-ink-100 dark:border-ink-800">
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your message here…"
                                className="w-full px-4 py-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-900 dark:text-white pr-12 resize-none focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                                rows="2"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="absolute right-3 bottom-3 rounded-lg bg-brand-600 text-white px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                aria-label="Send message"
                            >
                                <Send size={18} strokeWidth={1.5} />
                            </button>
                        </div>
                        <p className="text-xs text-ink-500 dark:text-ink-400 mt-2 text-center">
                            AI assistant can help with services, pricing, and technical queries
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
