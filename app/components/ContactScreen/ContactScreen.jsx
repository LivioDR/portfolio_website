'use client'
import React, { useState } from "react";
import { Element } from 'react-scroll'
import { sendEmail, validateFields } from "@/app/services/emailService";
import { toast } from "react-toastify";
import { Send, Loader2 } from 'lucide-react'

const ContactScreen = () => {
    const [info, setInfo] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)

    const handleChange = (field) => (e) => {
        setInfo(prev => ({ ...prev, [field]: e.target.value }))
    }

    const onSendClicked = async (event) => {
        event.preventDefault()
        const validation = validateFields(info)
        if (validation[0]) {
            setSending(true)
            const sentEmail = await sendEmail(info)
            if (sentEmail[0]) {
                toast.success(sentEmail[1])
            } else {
                toast.error(sentEmail[1])
            }
            setInfo({ name: '', email: '', message: '' })
            setSending(false)
        } else {
            toast.error(validation[1])
        }
    }

    return (
        <Element name="contact">
            <section className="py-24 md:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="section-divider mb-16" />

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Left: copy */}
                        <div>
                            <p className="text-sm font-mono text-primary tracking-wider uppercase mb-3">Contact</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
                                {"Let's build something great together"}
                            </h2>
                            <p className="mt-6 text-muted-foreground leading-relaxed">
                                {"Looking for a front-end developer who can bring your vision to life with clean code, thoughtful design, and AI-powered features? I'd love to hear about your project. Whether you need a complete web application, a SaaS platform, or an AI integration for your existing product, let's connect and explore how I can help."}
                            </p>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                {"Based in London, Ontario, I work with clients across Canada and internationally. I bring expertise in React.js, Next.js, TypeScript, and modern cloud platforms to deliver solutions that are fast, accessible, and built to scale."}
                            </p>

                            {/* Social links */}
                            <div className="mt-8 flex items-center gap-6">
                                <a href="https://www.linkedin.com/in/liviodr/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    LinkedIn
                                </a>
                                <a href="https://github.com/LivioDR/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>

                        {/* Right: form */}
                        <div>
                            <form onSubmit={onSendClicked} className="flex flex-col gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={info.name}
                                        onChange={handleChange('name')}
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={info.email}
                                        onChange={handleChange('email')}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        value={info.message}
                                        onChange={handleChange('message')}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {sending ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}
export default ContactScreen
