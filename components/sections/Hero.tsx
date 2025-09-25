'use client'

import { ArrowRight, CheckCircle, X } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-navy-100/[0.02] bg-[size:40px_40px]" />
      
      <div className="relative section-container section-padding">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Pattern Interrupt Hook */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-warning-700 bg-warning-100 rounded-full animate-fade-in">
            <X className="w-4 h-4" />
            Stop Paying Monthly for Basic Invoice Templates
          </div>
          
          {/* Main Headline - Loss Aversion + Authority */}
          <h1 className="headline-xl text-navy-900 mb-6 animate-fade-up">
            Your Invoices Look Like{' '}
            <span className="gradient-text-warning">Everyone Else's</span>
            <br />
            <span className="gradient-text-primary">Break Free</span> with Custom Design
          </h1>
          
          {/* Value Proposition - Problem Agitation */}
          <p className="body-xl text-navy-600 mb-8 max-w-3xl mx-auto animate-fade-up [animation-delay:0.1s]">
            Generic templates. Monthly fees. Watermarks everywhere. 
            <strong className="text-navy-900"> Your brand deserves better than subscription mediocrity.</strong>
          </p>
          
          {/* Social Proof Placeholder */}
          <div className="flex items-center justify-center gap-2 mb-10 animate-fade-up [animation-delay:0.2s]">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-trust-400 to-success-400 border-2 border-white" />
              ))}
            </div>
            <span className="text-sm text-navy-600 ml-3">
              Join <strong className="text-navy-900">500+</strong> businesses who escaped subscription hell
            </span>
          </div>
          
          {/* Value Proposition Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-up [animation-delay:0.3s]">
            
            {/* Design Freedom */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-success-100 to-trust-100 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                Pixel-Perfect Freedom
              </h3>
              <p className="text-navy-600 text-sm">
                Your design, your colors, your brand. Zero limitations.
              </p>
            </div>
            
            {/* No Watermarks */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-trust-100 to-success-100 rounded-2xl flex items-center justify-center">
                <X className="w-8 h-8 text-navy-600 line-through" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                No Watermarks Ever
              </h3>
              <p className="text-navy-600 text-sm">
                Professional invoices that build trust with clients.
              </p>
            </div>
            
            {/* Lifetime Value */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-warning-100 to-success-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-success-600">∞</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                One Payment Forever
              </h3>
              <p className="text-navy-600 text-sm">
                Break free from the subscription trap.
              </p>
            </div>
            
          </div>
          
          {/* CTA Section with Urgency */}
          <div className="animate-fade-up [animation-delay:0.4s]">
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button className="btn-primary group">
                Get Lifetime Access Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="btn-ghost">
                See How It Works
              </button>
            </div>
            
            {/* Trust Signals */}
            <div className="text-sm text-navy-500">
              <span className="trust-badge mr-2">✓ Instant Access</span>
              <span className="trust-badge mr-2">✓ 30-Day Guarantee</span>
              <span className="trust-badge">✓ Lifetime Updates</span>
            </div>
            
          </div>
          
        </div>
        
        {/* Visual Mockup */}
        <div className="mt-20 animate-fade-up [animation-delay:0.5s]">
          <div className="relative max-w-4xl mx-auto">
            
            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* BEFORE - Generic Template */}
              <div className="relative">
                <div className="absolute -top-4 left-4 warning-badge">
                  Before: Generic Template
                </div>
                <div className="bg-gray-100 rounded-lg p-6 border-2 border-dashed border-gray-300">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    <div className="text-xs text-gray-400 italic">*Template Watermark</div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-warning-500 text-white text-xs px-2 py-1 rounded">
                  $29/month
                </div>
              </div>
              
              {/* AFTER - Custom Design */}
              <div className="relative">
                <div className="absolute -top-4 left-4 trust-badge">
                  After: Your Brand
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-success-200 shadow-lg">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-trust-500 to-success-500 rounded w-1/3"></div>
                    <div className="h-3 bg-trust-200 rounded w-2/3"></div>
                    <div className="h-3 bg-success-200 rounded w-1/2"></div>
                    <div className="text-xs text-success-600 font-medium">✓ Your Professional Brand</div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-success-600 text-white text-xs px-2 py-1 rounded">
                  One-time
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}