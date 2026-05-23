'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  Check,
  Copy,
  type LucideIcon,
  Mail,
  MapPin,
  Clock,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  GlobeIcon,
} from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui/button';

const APP_EMAIL = 'imam@blvckcube.com';
const APP_LOCATION_PRIMARY = 'Cairo, Egypt';
const APP_LOCATION_SECONDARY = 'Canada';
const APP_HOURS = 'Sun – Thu · 10:00 AM – 6:00 PM';

export function ContactPage() {
  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: 'https://linkedin.com/company/blvckcube',
      label: 'LinkedIn',
    },
    {
      icon: InstagramIcon,
      href: 'https://instagram.com/blvckcube',
      label: 'Instagram',
    },
    {
      icon: TwitterIcon,
      href: 'https://twitter.com/blvckcube',
      label: 'Twitter / X',
    },
    {
      icon: GlobeIcon,
      href: 'https://blvckcube.com',
      label: 'Website',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-b-full blur-[120px]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto h-full max-w-6xl border-x border-white/[0.06]">
        {/* Header */}
        <div className="flex grow flex-col justify-center px-6 md:px-10 pt-32 pb-16">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/25 mb-4">
            BlvckCube · Creative Agency
          </p>
          <h1 className="text-4xl font-black md:text-6xl tracking-[-0.045em] leading-[0.9]">
            Contact Us
          </h1>
          <p className="text-white/40 mt-4 text-sm font-light leading-relaxed">
            Reach our team — we respond within one business day.
          </p>
        </div>

        <div className="border-t border-white/[0.07]" />

        {/* Contact boxes */}
        <div className="grid md:grid-cols-3">
          <Box icon={Mail} title="Email" description="We respond within 24 hours.">
            <a
              href={`mailto:${APP_EMAIL}`}
              className="font-mono text-sm font-medium tracking-wide hover:text-white/60 transition-colors"
            >
              {APP_EMAIL}
            </a>
            <CopyButton className="size-6" test={APP_EMAIL} />
          </Box>

          <Box
            icon={MapPin}
            title="Locations"
            description="Headquarters in Cairo, regional office in Canada."
          >
            <div className="space-y-1.5">
              <div className="font-mono text-sm font-medium tracking-wide">{APP_LOCATION_PRIMARY}</div>
              <div className="font-mono text-sm font-medium tracking-wide text-white/50">{APP_LOCATION_SECONDARY}</div>
            </div>
          </Box>

          <Box
            icon={Clock}
            title="Office Hours"
            description="All times are Egypt Standard Time (EET)."
            className="md:border-r-0"
          >
            <span className="font-mono text-sm font-medium tracking-wide">{APP_HOURS}</span>
          </Box>
        </div>

        <div className="border-t border-white/[0.07]" />

        {/* Social / Find us online */}
        <div className="relative flex h-full min-h-[320px] items-center justify-center px-6 md:px-10">
          {/* Dot grid background */}
          <div
            className={cn(
              'absolute inset-0 size-full pointer-events-none',
              '[background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]',
              '[background-size:32px_32px]',
              '[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]',
            )}
          />

          <div className="relative z-10 space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-[-0.045em] leading-[0.9]">
              Find Us Online
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <link.icon className="size-4 text-white/60" />
                  <span className="font-mono text-xs font-medium tracking-wide text-white/70">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/[0.07] px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-white/25 mb-2">
              Ready to start?
            </p>
            <h3 className="text-2xl font-black tracking-[-0.04em]">Let's build something extraordinary.</h3>
          </div>
          <a
            href={`mailto:${APP_EMAIL}`}
            className="inline-flex items-center gap-2 bg-white text-black font-bold text-xs tracking-[0.18em] uppercase px-6 py-3 hover:bg-white/90 transition-colors"
          >
            Send a Message
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Box ── */
type ContactBoxProps = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({ title, description, className, children, ...props }: ContactBoxProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between border-b border-white/[0.07] md:border-r md:border-b-0 border-r-white/[0.07]',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/[0.07] p-5 bg-white/[0.02]">
        <props.icon className="text-white/30 size-4" strokeWidth={1.5} />
        <h2 className="text-xs font-bold tracking-[0.18em] uppercase text-white/60">{title}</h2>
      </div>
      <div className="flex items-center gap-2 p-5 py-10">{children}</div>
      <div className="border-t border-white/[0.07] p-5">
        <p className="text-white/30 text-xs font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ── CopyButton ── */
type CopyButtonProps = ButtonProps & { test: string };

function CopyButton({ className, variant = 'ghost', size = 'icon', test, ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(test);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('disabled:opacity-100 relative', className)}
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      disabled={copied || props.disabled}
      {...props}
    >
      <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
        <Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
      </div>
      <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </Button>
  );
}
