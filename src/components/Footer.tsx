import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      {/* Newsletter signup section */}
      <div className="border-b border-background/10 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Stay Updated with AI Voice Technology
              </h3>
              <p className="text-background/70 text-sm md:text-base">
                Get the latest insights, product updates, and best practices for AI voice agents in your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto max-w-md shrink-0">
              {status === 'success' ? (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center md:text-left text-sm text-green-300">
                  <p className="font-semibold">Successfully subscribed!</p>
                  <p className="text-xs text-green-300/80 mt-1">Thank you for subscribing. Check your inbox for a confirmation email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1 min-w-[240px]">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-background/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={status === 'loading'}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-background/20 bg-background/10 text-white placeholder:text-background/55 focus:outline-none focus:border-white focus:ring-1 focus:ring-white text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-background/90 transition-all shadow-md shrink-0"
                  >
                    {status === 'loading' ? (
                      <span className="h-4 w-4 border-2 border-foreground/35 border-t-foreground animate-spin rounded-full" />
                    ) : (
                      <>
                        Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
              <p className="text-[11px] text-background/40 mt-3 text-center md:text-left">
                No spam. Unsubscribe at any time. Read our <Link to="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer directory */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
          {/* Brand Bio */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-foreground shadow-md">
                <PhoneCall className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                helllo<span className="text-primary-light">.ai</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Enterprise-grade AI voice agents built for businesses of all sizes. Easy setup, seamless integration, and enterprise-grade security.
            </p>
            {/* Socials */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/helllo_ai"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-white hover:bg-background/20 transition-all"
                aria-label="Twitter link"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/helllo-ai"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-white hover:bg-background/20 transition-all"
                aria-label="LinkedIn link"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://github.com/helllo-ai"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-white hover:bg-background/20 transition-all"
                aria-label="GitHub link"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#features" className="text-background/70 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="/#agentic-flows" className="text-background/70 hover:text-white transition-colors">Agentic Flows</a>
              </li>
              <li>
                <a href="/#pricing" className="text-background/70 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="https://console.helllo.ai" className="text-background/70 hover:text-white transition-colors">Developer Portal</a>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#docs" className="text-background/70 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="/#api" className="text-background/70 hover:text-white transition-colors">API Reference</a>
              </li>
              <li>
                <a href="/#status" className="text-background/70 hover:text-white transition-colors">System Status</a>
              </li>
              <li>
                <a href="/#support" className="text-background/70 hover:text-white transition-colors">Support Center</a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/terms" className="text-background/70 hover:text-white transition-colors block">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-background/70 hover:text-white transition-colors block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cancellation-refund" className="text-background/70 hover:text-white transition-colors block">Cancellation & Refund Policy</Link>
              </li>
              <li>
                <Link to="/privacy#gdpr" className="text-background/70 hover:text-white transition-colors block">GDPR & DPDP Compliance</Link>
              </li>
              <li>
                <Link to="/privacy#cookies" className="text-background/70 hover:text-white transition-colors block">Cookie Settings</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate registration metadata */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-background/50 text-xs">
              © 2026 HellloAI Technologies Pvt Ltd. All rights reserved.
            </p>
            <p className="text-background/40 text-[11px] mt-1">
              Parent company:{' '}
              <a
                href="https://perceptorylabs.ai"
                target="_blank"
                rel="noreferrer"
                className="text-background/60 hover:text-white underline underline-offset-2"
              >
                Perceptory AI Labs Private Limited
              </a>
            </p>
          </div>
          <div className="text-background/50 text-xs">
            DPIIT Recognised Startup · Made with ❤️ in Bengaluru, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
