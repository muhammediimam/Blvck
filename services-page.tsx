'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { PricingWithChart } from '@/components/ui/pricing-with-chart';
import {
  ArrowRightIcon,
  CalendarIcon,
  BuildingIcon,
  PhoneIcon,
  MailIcon,
  UserIcon,
  CheckCircleIcon,
} from 'lucide-react';

const INDUSTRIES = [
  'Fashion & Luxury',
  'Real Estate & Property',
  'Hospitality & Travel',
  'Finance & Wealth Management',
  'Technology & SaaS',
  'Health & Wellness',
  'Food & Beverage',
  'Entertainment & Media',
  'Professional Services',
  'E-Commerce & Retail',
  'Other',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  industry: string;
};

export function ServicesPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    industry: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Discovery Call Request — ${form.industry || 'New Inquiry'}`,
    );
    const body = encodeURIComponent(
      `Hi BlvckCube,\n\nI'd like to book a discovery call.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nBusiness Industry: ${form.industry}\n\nLooking forward to connecting.`,
    );
    window.location.href = `mailto:info@blvckcube.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const isValid = form.name && form.email && form.phone && form.industry;

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Subtle top glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-b-full blur-[120px]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto h-full max-w-6xl border-x border-white/[0.06]">
        {/* ── Header ── */}
        <div className="flex flex-col justify-center px-6 md:px-10 pt-32 pb-16">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/25 mb-4">
            BlvckCube · Packages & Pricing
          </p>
          <h1 className="text-4xl font-black md:text-6xl tracking-[-0.045em] leading-[0.9]">
            Services
          </h1>
          <p className="text-white/40 mt-4 text-sm font-light leading-relaxed max-w-lg">
            From brand audits to full-scale creative direction — every engagement is
            built for market dominance, not mediocrity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-white text-black font-bold text-xs tracking-[0.14em] uppercase px-5 py-2.5 hover:bg-white/90 transition-colors"
            >
              Book Discovery Call
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 font-bold text-xs tracking-[0.14em] uppercase px-5 py-2.5 hover:border-white/40 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.07]" />

        {/* ── Pricing component ── */}
        <div className="px-6 md:px-10 py-16">
          <PricingWithChart />
        </div>

        <div className="border-t border-white/[0.07]" />

        {/* ── Consultation Booking Form ── */}
        <div id="book" className="px-6 md:px-10 py-20">
          {/* Section header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <CalendarIcon className="h-4 w-4 text-white/50" />
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/30">
                  Free · 30 Minutes
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-[-0.04em] leading-[0.9]">
                Book a Discovery Call
              </h2>
              <p className="text-white/40 mt-3 text-sm font-light leading-relaxed max-w-md">
                Tell us about your brand and we'll reach out within one business day to
                schedule your free 30-minute strategy session.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-xs text-white/20 font-mono tracking-widest">
                info@blvckcube.com
              </p>
            </div>
          </div>

          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border border-white/20 bg-white/[0.04]">
                <CheckCircleIcon className="h-7 w-7 text-white/70" />
              </div>
              <h3 className="text-xl font-bold">Request Submitted</h3>
              <p className="text-white/40 text-sm max-w-sm">
                Your email client should have opened with the details pre-filled.
                We'll be in touch within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 border border-white/20 text-white text-xs font-bold tracking-[0.14em] uppercase px-5 py-2.5 hover:border-white/40 transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-2xl">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-white/40"
                >
                  <UserIcon className="h-3.5 w-3.5" />
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={cn(
                    'w-full bg-white/[0.03] border border-white/10 px-4 py-3',
                    'text-sm text-white placeholder:text-white/20 font-light',
                    'focus:outline-none focus:border-white/40 transition-colors',
                  )}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-white/40"
                >
                  <MailIcon className="h-3.5 w-3.5" />
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={cn(
                    'w-full bg-white/[0.03] border border-white/10 px-4 py-3',
                    'text-sm text-white placeholder:text-white/20 font-light',
                    'focus:outline-none focus:border-white/40 transition-colors',
                  )}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-white/40"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className={cn(
                    'w-full bg-white/[0.03] border border-white/10 px-4 py-3',
                    'text-sm text-white placeholder:text-white/20 font-light',
                    'focus:outline-none focus:border-white/40 transition-colors',
                  )}
                />
              </div>

              {/* Industry */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="industry"
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-white/40"
                >
                  <BuildingIcon className="h-3.5 w-3.5" />
                  Business Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={form.industry}
                  onChange={handleChange}
                  className={cn(
                    'w-full bg-white/[0.03] border border-white/10 px-4 py-3',
                    'text-sm font-light appearance-none',
                    'focus:outline-none focus:border-white/40 transition-colors',
                    form.industry ? 'text-white' : 'text-white/20',
                  )}
                >
                  <option value="" disabled className="bg-zinc-900 text-white/40">
                    Select your industry
                  </option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind} className="bg-zinc-900 text-white">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-white/20 font-light">
                  Submission opens your email client addressed to{' '}
                  <span className="text-white/40 font-mono">info@blvckcube.com</span>
                </p>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={cn(
                    'inline-flex items-center gap-2 font-bold text-xs tracking-[0.14em] uppercase px-6 py-3 transition-colors shrink-0',
                    isValid
                      ? 'bg-white text-black hover:bg-white/90 cursor-pointer'
                      : 'bg-white/10 text-white/30 cursor-not-allowed',
                  )}
                >
                  Send Inquiry
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── Footer strip ── */}
        <div className="border-t border-white/[0.07] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-light">
            © {new Date().getFullYear()} BlvckCube · Cairo, Egypt & Canada
          </p>
          <div className="flex items-center gap-4 text-xs font-bold tracking-[0.14em] uppercase text-white/20">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <a href="/contact" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
