import React, { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';

const MailSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:ravi9991ct@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')')}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 mb-6">
            <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00FFFF' }}>
              Contact
            </span>{' '}
            <span className="text-purple-500" style={{ textShadow: '0 0 20px #8A2BE2' }}>
              Me
            </span>
          </h2>
          <p className="text-xl text-slate-300 font-exo">
            Clients can send me a message directly via email using the form below.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-cyan-400/20 shadow-lg">
            <div className="mb-6">
              <label className="block text-slate-200 font-exo mb-2" htmlFor="name">
                <User className="inline w-5 h-5 mr-2 text-cyan-400" /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-slate-100 border border-slate-600 focus:border-cyan-400 outline-none font-exo"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-slate-200 font-exo mb-2" htmlFor="email">
                <Mail className="inline w-5 h-5 mr-2 text-purple-500" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-slate-100 border border-slate-600 focus:border-purple-500 outline-none font-exo"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-slate-200 font-exo mb-2" htmlFor="message">
                <MessageCircle className="inline w-5 h-5 mr-2 text-cyan-400" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-slate-100 border border-slate-600 focus:border-cyan-400 outline-none font-exo"
                placeholder="Type your message here..."
              />
            </div>
            <button
              type="submit"
              className="group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700 font-exo w-full"
            >
              Send Message
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 blur-md -z-10"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailSection;