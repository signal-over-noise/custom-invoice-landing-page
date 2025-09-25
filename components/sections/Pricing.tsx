'use client'

import { 
  Check, 
  Crown, 
  Shield, 
  ArrowRight,
  DollarSign,
  Calculator,
  Clock,
  Sparkles,
  AlertTriangle
} from 'lucide-react'

export default function Pricing() {
  const competitorCosts = [
    { name: 'Sufio', monthly: 29, yearly: 348, twoYear: 696 },
    { name: 'Invoice Hero', monthly: 24, yearly: 288, twoYear: 576 },
    { name: 'GST Pro', monthly: 19, yearly: 228, twoYear: 456 },
    { name: 'Order Printer Pro', monthly: 25, yearly: 300, twoYear: 600 }
  ]

  const features = [
    'Unlimited Custom Invoice Designs',
    'Pixel-Perfect Brand Implementation', 
    'Zero Watermarks Forever',
    'Email & Download Distribution',
    'Lifetime Technical Support',
    'All Future Updates Included',
    'Custom Design Implementation',
    'Professional Brand Authority',
    'No Monthly Subscription Anxiety',
    'Permanent Ownership Rights'
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-navy-50 to-white">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-success-700 bg-success-100 rounded-full">
            <DollarSign className="w-4 h-4 mr-2" />
            Investment That Pays for Itself
          </div>
          
          <h2 className="headline-lg text-navy-900 mb-6">
            Own Your Invoice Design
            <span className="gradient-text-primary"> Forever</span>
          </h2>
          
          <p className="body-lg text-navy-600 max-w-3xl mx-auto mb-8">
            Break free from the subscription trap. One strategic investment gives you 
            unlimited design freedom for life—no recurring fees, no limitations.
          </p>

          {/* Competitor Cost Reality Check */}
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-warning-100 rounded-xl mb-8">
            <AlertTriangle className="w-5 h-5 text-warning-600" />
            <span className="text-warning-800">
              <strong>Reality Check:</strong> Competitors cost $456-$696 in just 24 months
            </span>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-success-500 to-trust-500 rounded-3xl p-12 text-white relative overflow-hidden">
            
            {/* Premium Badge */}
            <div className="absolute top-6 right-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                <Crown className="w-4 h-4 text-warning-300" />
                Lifetime Plan
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Value Proposition */}
              <div>
                <h3 className="text-4xl font-bold mb-4">
                  Custom Invoicing
                  <br />
                  <span className="text-success-200">Lifetime Access</span>
                </h3>
                
                <p className="text-lg text-success-100 mb-8">
                  Pay once, own forever. Get everything you need to create 
                  stunning, branded invoices without monthly anxiety.
                </p>

                {/* Key Features */}
                <div className="space-y-3">
                  {features.slice(0, 5).map((feature, index) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success-200 mt-0.5 flex-shrink-0" />
                      <span className="text-success-100">{feature}</span>
                    </div>
                  ))}
                  <div className="text-success-200 text-sm font-medium pt-2">
                    + 5 more premium features included
                  </div>
                </div>
              </div>

              {/* Right: Pricing */}
              <div className="text-center">
                
                {/* Price Reveal */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-2xl text-success-300 line-through">$100</div>
                    <div className="text-5xl font-bold">$80</div>
                  </div>
                  <div className="text-success-200 text-lg">One-time payment</div>
                  <div className="text-success-300 text-sm">No monthly fees. Ever.</div>
                  <div className="inline-flex items-center px-3 py-1 mt-3 bg-warning-500 text-white text-sm font-medium rounded-full">
                    🔥 Limited Time: $20 Off
                  </div>
                </div>

                {/* Value Comparison */}
                <div className="bg-white/10 rounded-xl p-6 mb-8">
                  <div className="text-sm text-success-200 mb-3">Compare to competitors:</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-success-300">Sufio (3 months)</span>
                      <span className="text-white font-semibold">$87</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-success-300">Invoice Hero (4 months)</span>
                      <span className="text-white font-semibold">$96</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 mt-3">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>You break even in</span>
                        <span className="text-warning-300">3-4 months</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="btn-primary bg-white text-success-600 hover:bg-success-50 w-full text-lg py-4 mb-4 group">
                  Get Lifetime Access Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="text-success-200 text-sm">
                  🔒 Secure payment • 💳 All major cards accepted
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Value Amplification */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* ROI Calculator */}
          <div className="card-premium p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-success-100 to-trust-100 rounded-2xl flex items-center justify-center">
              <Calculator className="w-8 h-8 text-success-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Return on Investment
            </h3>
            <div className="space-y-3 text-sm text-navy-600 mb-6">
              <div className="flex justify-between">
                <span>Custom Invoicing:</span>
                <span className="font-semibold">$80</span>
              </div>
              <div className="flex justify-between">
                <span>Competitor (2 years):</span>
                <span className="font-semibold text-red-600">$456-696</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-lg font-bold text-success-600">
                  <span>You save:</span>
                  <span>$376-616+</span>
                </div>
              </div>
            </div>
            <div className="text-xs text-navy-500">
              Savings compound every year after
            </div>
          </div>

          {/* Time Value */}
          <div className="card-highlight p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-trust-100 to-success-100 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-trust-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Time Investment
            </h3>
            <div className="space-y-4 text-navy-600 mb-6">
              <div>
                <div className="text-2xl font-bold text-trust-600">2-3 days</div>
                <div className="text-sm">Custom design implementation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success-600">Forever</div>
                <div className="text-sm">Lifetime of professional invoices</div>
              </div>
            </div>
            <div className="text-xs text-navy-500">
              One setup, infinite professional impact
            </div>
          </div>

          {/* Risk Elimination */}
          <div className="card-premium p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-navy-100 to-success-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-navy-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Risk-Free Guarantee
            </h3>
            <div className="space-y-3 text-navy-600 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-success-600" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-success-600" />
                No questions asked refund
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-success-600" />
                Keep design if not satisfied
              </div>
            </div>
            <div className="text-xs text-navy-500">
              Your investment is protected
            </div>
          </div>

        </div>

        {/* Competitor Reality Check */}
        <div className="bg-navy-900 rounded-3xl p-12 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Subscription Trap in Numbers
            </h3>
            <p className="text-navy-300 text-lg">
              See what you're escaping when you choose ownership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitorCosts.map((competitor, index) => (
              <div key={competitor.name} className="bg-navy-800 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold mb-4">{competitor.name}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-red-400">${competitor.monthly}</div>
                    <div className="text-navy-400 text-sm">per month</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-red-300">${competitor.yearly}</div>
                    <div className="text-navy-400 text-xs">Year 1 total</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-red-200">${competitor.twoYear}</div>
                    <div className="text-navy-400 text-xs">2-year cost</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-red-400">
                  + still paying...
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-success-600 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg">
                You escape all of this with one smart decision
              </span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Own Your Professional Image?
          </h3>
          
          <p className="text-lg text-navy-600 mb-8">
            Join the smart businesses who chose ownership over subscriptions. 
            Your branded invoice freedom is just one decision away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="btn-primary text-lg px-10 py-4 group">
              Get Lifetime Access - $80 (Save $20)
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="text-navy-500 text-sm">
              Or contact us for custom enterprise solutions
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-navy-500">
            <span className="trust-badge">✓ 30-Day Guarantee</span>
            <span className="trust-badge">✓ Secure Payment</span>
            <span className="trust-badge">✓ Instant Access</span>
            <span className="trust-badge">✓ Lifetime Updates</span>
          </div>
        </div>

      </div>
    </section>
  )
}