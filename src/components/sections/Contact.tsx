"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, FileText, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  // State for tracking submission success message overlay
  const [submitted, setSubmitted] = useState(false);

  // States for storing form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // State for loading indicator during submission
  const [loading, setLoading] = useState(false);

  // Handle form submission, save data to Supabase, and send email via Elastic Email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Insert form data into Supabase 'messages' table
      const { error: dbError } = await supabase
        .from("messages")
        .insert([{ name, email, message }]);

      if (dbError) {
        console.error("Error saving message to Supabase:", dbError.message);
        alert("Failed to save message. Please try again.");
        setLoading(false);
        return;
      }

      // 2. Send email notification via Elastic Email API
      const response = await fetch('https://api.elasticemail.com/v2/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          apikey: process.env.NEXT_PUBLIC_ELASTIC_EMAIL_API_KEY!,
          from: 'maryamasif1091@gmail.com', // Your verified sender email
          to: 'maryamasif1091@gmail.com',   // Your receiving email inbox
          subject: `New Portfolio Message from ${name}`,
          bodyText: `You got a new message!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        }),
      });

      if (!response.ok) {
        console.error("Failed to send email notification.");
      }

      // 3. Show success state and reset form fields
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Hide success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);

    } catch (err) {
      console.error("Unexpected error during submission:", err);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#050508] dark:bg-[#050508] light:bg-[#f8f9fa] py-24 px-6 relative overflow-hidden flex items-center transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ced1]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ced1]/10 border border-[#00ced1]/20 text-[#00ced1] text-xs font-semibold mb-4">
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-black tracking-tight">
            Get in <span className="text-[#00ced1]">Touch</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out and I will get back to you soon.
          </p>
        </div>

        {/* Two Cards Layout (Left & Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-black mb-6">
                Let's Build Something Together
              </h3>

              {/* Contact Details Container */}
              <div className="space-y-4 mb-8">
                {/* Email Box */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/5 dark:border-white/5 light:border-black/5">
                  <div className="w-10 h-10 rounded-xl bg-[#00ced1]/10 border border-[#00ced1]/20 flex items-center justify-center text-[#00ced1] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-500">Email Me</p>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=maryamasif1091@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white dark:text-white light:text-black hover:text-[#00ced1] transition-colors"
                    >
                      maryamasif1091@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Box */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/5 dark:border-white/5 light:border-black/5">
                  <div className="w-10 h-10 rounded-xl bg-[#00ced1]/10 border border-[#00ced1]/20 flex items-center justify-center text-[#00ced1] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-500">Call Me</p>
                    <a href="tel:+923049828272" className="text-sm font-semibold text-white dark:text-white light:text-black hover:text-[#00ced1] transition-colors">
                      +92 304 9828272
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10 flex items-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/maryamasif1091-cpu"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-11 h-11 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] hover:border-[#00ced1]/40 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/maryam-asif-25d2004"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-11 h-11 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] hover:border-[#00ced1]/40 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@maryamasif1091"
                target="_blank"
                rel="noopener noreferrer"
                title="Medium"
                className="w-11 h-11 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-[#00ced1] hover:border-[#00ced1]/40 transition-all"
              >
                <FileText size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Card: Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 rounded-3xl p-8 shadow-xl relative"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#00ced1]/10 border border-[#00ced1]/30 flex items-center justify-center text-[#00ced1] mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-white dark:text-white light:text-black mb-2">Message Sent!</h4>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 dark:text-gray-300 light:text-gray-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00ced1]/60 rounded-xl px-4 py-3 text-white dark:text-white light:text-black text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 dark:text-gray-300 light:text-gray-700 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email (e.g. name@example.com)"
                    className="w-full bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00ced1]/60 rounded-xl px-4 py-3 text-white dark:text-white light:text-black text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 dark:text-gray-300 light:text-gray-700 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00ced1]/60 rounded-xl px-4 py-3 text-white dark:text-white light:text-black text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  key="submit-button"
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#00ced1] hover:bg-[#00bfff] text-[#050508] font-bold text-sm transition-all shadow-lg shadow-[#00ced1]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send size={16} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}