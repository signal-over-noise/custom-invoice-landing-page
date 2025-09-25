'use client'

import { AlertTriangle, DollarSign, Palette, Shield, Zap, ArrowRight } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        
        {/* Problem Statement */}
        <div className="text-center mb-20">
          <h2 className="headline-lg text-navy-900 mb-6">
            The <span className="gradient-text-warning">Subscription Trap</span> Is Killing Your Brand
          </h2>
          <p className="body-lg text-navy-600 max-w-3xl mx-auto">
            Every month, you're paying for mediocrity while your competitors get the same generic templates. 
            It's time to break the cycle.
          </p>
        </div>

        {/* Problem Amplification Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Pain Points */}
          <div className="space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-warning-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  Bleeding Money Monthly
                </h3>
                <p className="text-navy-600 mb-3">
                  $29/month × 24 months = <strong className="text-warning-600">$696 for basic templates</strong>. 
                  Competitors like Sufio and Invoice Hero keep charging you forever.
                </p>
                <div className="text-sm text-warning-700 bg-warning-50 px-3 py-2 rounded-lg">
                  💸 That's $696 you'll never get back for features you should own
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  Watermarked Shame
                </h3>
                <p className="text-navy-600 mb-3">
                  Every invoice screams "I use cheap software." Your clients notice. 
                  Professional credibility dies with every branded watermark.
                </p>
                <div className="text-sm text-red-700 bg-red-50 px-3 py-2 rounded-lg">
                  🏷️ Nothing says "small business" like a competitor's logo on YOUR invoice
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  Template Prison
                </h3>
                <p className="text-navy-600 mb-3">
                  Stuck with their colors, their fonts, their layout. Your brand guidelines? 
                  Irrelevant. You're building their brand, not yours.
                </p>
                <div className="text-sm text-orange-700 bg-orange-50 px-3 py-2 rounded-lg">
                  🎨 5 template choices. 50,000+ businesses. Same boring look.
                </div>
              </div>
            </div>

          </div>

          {/* Right: Visual Representation */}
          <div className="relative">
            
            {/* Subscription Trap Visual */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
              
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-red-800 mb-2">
                  The Competitor Reality
                </h4>
                <p className="text-red-600 text-sm">What you're actually paying for</p>
              </div>

              {/* Monthly Cost Visualization */}
              <div className="space-y-4 mb-6">
                {['Month 1: $29', 'Month 6: $174', 'Month 12: $348', 'Month 24: $696'].map((cost, index) => (
                  <div key={cost} className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200">
                    <span className="text-navy-700">{cost.split(':')[0]}</span>
                    <span className="font-semibold text-red-600">{cost.split(':')[1]}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium">
                  Still paying...
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Solution Bridge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-success-100 to-trust-100 rounded-full mb-6">
            <Zap className="w-8 h-8 text-success-600" />
          </div>
          <h2 className="headline-md text-navy-900 mb-4">
            There's a <span className="gradient-text-primary">Better Way</span>
          </h2>
          <p className="body-lg text-navy-600 max-w-2xl mx-auto">
            What if you could own your invoice design forever? No subscriptions, no limitations, no compromises.
          </p>
        </div>

        {/* Solution Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Ownership */}
          <div className="text-center card-premium p-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-success-100 to-trust-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-success-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Own It Forever
            </h3>
            <p className="text-navy-600 mb-6">
              One payment. Lifetime access. No recurring anxiety about monthly bills or feature removals.
            </p>
            <div className="trust-badge">
              ✓ Permanent ownership
            </div>
          </div>

          {/* Design Freedom */}
          <div className="text-center card-highlight p-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-trust-100 to-success-100 rounded-2xl flex items-center justify-center">
              <Palette className="w-8 h-8 text-trust-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Unlimited Design Freedom
            </h3>
            <p className="text-navy-600 mb-6">
              Your brand, your colors, your layout. Pixel-perfect invoices that build trust and authority.
            </p>
            <div className="trust-badge">
              ✓ Zero limitations
            </div>
          </div>

          {/* Professional Authority */}
          <div className="text-center card-premium p-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-navy-100 to-trust-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-navy-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Professional Authority
            </h3>
            <p className="text-navy-600 mb-6">
              No watermarks. No competitor branding. Just your professional image building client trust.
            </p>
            <div className="trust-badge">
              ✓ Pure professionalism
            </div>
          </div>

        </div>

        {/* Transformation Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Transform Your Invoicing Forever
            </h3>
            <p className="text-xl text-navy-200 mb-8">
              Stop renting basic templates. Start owning your brand's professional image.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary bg-success-500 hover:bg-success-600">
                Break Free Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <div className="text-navy-300 text-sm">
                Join the businesses who chose ownership over subscriptions
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}