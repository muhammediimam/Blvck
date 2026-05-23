'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Lock, Eye, EyeClosed, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        className,
      )}
      {...props}
    />
  );
}

export function SignInCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background — BlvckCube monochrome radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black" />

      {/* Top radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vh] h-[50vh] rounded-b-[50%] bg-white/[0.03] blur-[100px]" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vh] h-[45vh] rounded-b-full bg-white/[0.04] blur-[80px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10"
        style={{ perspective: 1500 }}
      >
        <motion.div
          className="relative"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative group">
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-[1px] rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 10px 2px rgba(255,255,255,0.03)',
                  '0 0 20px 5px rgba(255,255,255,0.06)',
                  '0 0 10px 2px rgba(255,255,255,0.03)',
                ],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
            />

            {/* Traveling light beams */}
            <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
              {/* Top */}
              <motion.div
                className="absolute top-0 left-0 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ left: ['-50%', '100%'], opacity: [0.2, 0.6, 0.2] }}
                transition={{ left: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror' } }}
              />
              {/* Right */}
              <motion.div
                className="absolute top-0 right-0 h-[50%] w-[2px] bg-gradient-to-b from-transparent via-white to-transparent"
                animate={{ top: ['-50%', '100%'], opacity: [0.2, 0.6, 0.2] }}
                transition={{ top: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: 0.6 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: 0.6 } }}
              />
              {/* Bottom */}
              <motion.div
                className="absolute bottom-0 right-0 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ right: ['-50%', '100%'], opacity: [0.2, 0.6, 0.2] }}
                transition={{ right: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: 1.2 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: 1.2 } }}
              />
              {/* Left */}
              <motion.div
                className="absolute bottom-0 left-0 h-[50%] w-[2px] bg-gradient-to-b from-transparent via-white to-transparent"
                animate={{ bottom: ['-50%', '100%'], opacity: [0.2, 0.6, 0.2] }}
                transition={{ bottom: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: 1.8 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: 1.8 } }}
              />
            </div>

            {/* Glass card */}
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] shadow-2xl overflow-hidden">
              {/* Subtle inner grid */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(135deg, white 0.5px, transparent 0.5px), linear-gradient(45deg, white 0.5px, transparent 0.5px)`,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Header */}
              <div className="text-center space-y-1 mb-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                  className="mx-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="text-sm font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 tracking-tighter">
                    BC
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                >
                  Welcome Back
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/50 text-xs tracking-wide"
                >
                  Sign in to your BlvckCube account
                </motion.p>
              </div>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 2000);
                }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  {/* Email */}
                  <motion.div
                    className={`relative ${focusedInput === 'email' ? 'z-10' : ''}`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <div className="relative flex items-center overflow-hidden rounded-lg">
                      <Mail
                        className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                          focusedInput === 'email' ? 'text-white' : 'text-white/40'
                        }`}
                      />
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full bg-white/5 border-transparent focus:border-white/20 text-white placeholder:text-white/30 h-10 transition-all duration-300 pl-10 pr-3 focus:bg-white/8"
                      />
                    </div>
                  </motion.div>

                  {/* Password */}
                  <motion.div
                    className={`relative ${focusedInput === 'password' ? 'z-10' : ''}`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <div className="relative flex items-center overflow-hidden rounded-lg">
                      <Lock
                        className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                          focusedInput === 'password' ? 'text-white' : 'text-white/40'
                        }`}
                      />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocusedInput('password')}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full bg-white/5 border-transparent focus:border-white/20 text-white placeholder:text-white/30 h-10 transition-all duration-300 pl-10 pr-10 focus:bg-white/8"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <Eye className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                        ) : (
                          <EyeClosed className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="appearance-none h-4 w-4 rounded border border-white/20 bg-white/5 checked:bg-white checked:border-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-200"
                      />
                      {rememberMe && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center text-black pointer-events-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                    <label htmlFor="remember-me" className="text-xs text-white/50 hover:text-white/80 transition-colors duration-200 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-xs text-white/50 hover:text-white transition-colors duration-200">
                    Forgot password?
                  </Link>
                </div>

                {/* Sign in button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative group/button mt-2"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover/button:opacity-70 transition-opacity duration-300" />
                  <div className="relative overflow-hidden bg-white text-black font-semibold h-10 rounded-lg transition-all duration-300 flex items-center justify-center tracking-wide text-sm">
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="w-4 h-4 border-2 border-black/70 border-t-transparent rounded-full animate-spin" />
                        </motion.div>
                      ) : (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-1.5"
                        >
                          Sign In
                          <ArrowRight className="w-3.5 h-3.5 group-hover/button:translate-x-0.5 transition-transform duration-300" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>

                {/* Divider */}
                <div className="relative flex items-center my-1">
                  <div className="flex-grow border-t border-white/6" />
                  <motion.span
                    className="mx-3 text-xs text-white/30"
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    or
                  </motion.span>
                  <div className="flex-grow border-t border-white/6" />
                </div>

                {/* Google Sign In */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full relative group/google"
                >
                  <div className="relative overflow-hidden bg-white/[0.04] text-white font-medium h-10 rounded-lg border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-xs tracking-wide">
                    <span className="font-bold text-white/60 group-hover/google:text-white transition-colors">G</span>
                    <span className="text-white/60 group-hover/google:text-white transition-colors">
                      Continue with Google
                    </span>
                  </div>
                </motion.button>

                {/* Sign up link */}
                <motion.p
                  className="text-center text-xs text-white/40 mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="text-white/70 hover:text-white transition-colors duration-300 font-semibold">
                    Sign up
                  </Link>
                </motion.p>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
