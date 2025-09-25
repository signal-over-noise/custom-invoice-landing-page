'use client'

import { 
  Check, 
  X, 
  AlertTriangle, 
  Crown,
  TrendingDown,
  TrendingUp,
  Calculator,
  Zap
} from 'lucide-react'

export default function Comparison() {
  const competitors = [
    {
      name: 'Sufio',
      pricing: '$29/month',
      yearlyTotal: '$348',
      twoYearTotal: '$696'
    },
    {
      name: 'Invoice Hero',
      pricing: '$24/month',
      yearlyTotal: '$288',
      twoYearTotal: '$576'
    },
    {
      name: 'GST Pro',
      pricing: '$19/month',
      yearlyTotal: '$228',
      twoYearTotal: '$456'
    },
    {
      name: 'Order Printer Pro',
      pricing: '$25/month',
      yearlyTotal: '$300',
      twoYearTotal: '$600'
    }
  ]

  const features = [
    {
      category: 'Design Freedom',
      items: [
        { feature: 'Custom Designs', us: true, them: false },
        { feature: 'Pixel-Perfect Control', us: true, them: false },
        { feature: 'No Design Restrictions', us: true, them: false },
        { feature: 'Brand Color Matching', us: true, them: 'limited' },
        { feature: 'Custom Typography', us: true, them: 'limited' }
      ]
    },
    {
      category: 'Professional Branding',
      items: [
        { feature: 'Zero Watermarks', us: true, them: false },
        { feature: 'Your Logo Only', us: true, them: false },
        { feature: 'Professional Credibility', us: true, them: false },
        { feature: 'Client Trust Building', us: true, them: 'limited' }
      ]
    },
    {
      category: 'Cost & Ownership',
      items: [
        { feature: 'One-Time Payment', us: true, them: false },
        { feature: 'Lifetime Access', us: true, them: false },
        { feature: 'No Recurring Fees', us: true, them: false },
        { feature: 'Predictable Costs', us: true, them: false }
      ]
    },
    {
      category: 'Support & Updates',
      items: [
        { feature: 'Lifetime Support', us: true, them: 'limited' },
        { feature: 'Free Updates Forever', us: true, them: false },
        { feature: 'Custom Implementation', us: true, them: false },
        { feature: 'Technical Expertise', us: true, them: 'basic' }
      ]
    }
  ]

  const renderFeatureIcon = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-success-600" />
    if (value === false) return <X className="w-5 h-5 text-red-500" />
    if (value === 'limited') return <AlertTriangle className="w-5 h-5 text-warning-600" />
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-warning-700 bg-warning-100 rounded-full">
            <TrendingDown className="w-4 h-4 mr-2" />
            The Subscription Trap Exposed
          </div>
          
          <h2 className="headline-lg text-navy-900 mb-6">
            Why Keep Paying When You Can 
            <span className="gradient-text-primary"> Own Forever?</span>
          </h2>
          
          <p className="body-lg text-navy-600 max-w-3xl mx-auto">
            See how Custom Invoicing delivers more value, more freedom, and more professionalism 
            than every major competitor—without the recurring anxiety.
          </p>
        </div>

        {/* Cost Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              The Real Cost of "Cheap" Subscriptions
            </h3>
            <p className="text-navy-600">
              What you're actually paying over time (spoiler: it's not pretty)
            </p>
          </div>

          <div className="bg-gradient-to-br from-navy-50 to-trust-50 rounded-2xl p-8 overflow-hidden">
            
            {/* Custom Invoicing vs Competitors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Custom Invoicing (Our Solution) */}
              <div className="bg-gradient-to-br from-success-500 to-trust-500 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Crown className="w-8 h-8 text-warning-300" />
                </div>
                
                <h4 className="text-2xl font-bold mb-2">Custom Invoicing</h4>
                <div className="text-success-100 text-sm mb-6">The Smart Choice</div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-success-100">One-time investment</span>
                    <span className="text-2xl font-bold">$X100*</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-success-100">Year 1 total</span>
                    <span className="text-xl font-semibold">$X100</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-success-100">Year 2 total</span>
                    <span className="text-xl font-semibold">$X100</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-success-100">Lifetime cost</span>
                    <span className="text-xl font-semibold">$X100</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Breaks even in 6-12 months vs competitors</span>
                  </div>
                </div>
              </div>

              {/* Competitors Comparison */}
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <div key={competitor.name} className="bg-white rounded-lg p-6 border border-red-200">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold text-navy-900">{competitor.name}</h5>
                      <div className="text-right">
                        <div className="text-lg font-bold text-red-600">{competitor.pricing}</div>
                        <div className="text-xs text-red-500">+ taxes & fees</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-navy-900">{competitor.yearlyTotal}</div>
                        <div className="text-navy-600">Year 1</div>
                      </div>
                      <div>
                        <div className="font-semibold text-red-600">{competitor.twoYearTotal}</div>
                        <div className="text-navy-600">Year 2</div>
                      </div>
                      <div>
                        <div className="font-semibold text-red-700">$2,000+</div>
                        <div className="text-navy-600">Lifetime</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Savings Calculator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-warning-100 rounded-xl">
                <Calculator className="w-6 h-6 text-warning-600" />
                <span className="text-warning-800 font-semibold">
                  Average 2-year savings: <span className="text-warning-900">$400-500+</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Comparison Matrix */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Feature-by-Feature Domination
            </h3>
            <p className="text-navy-600">
              See exactly what you're missing with template-based competitors
            </p>
          </div>

          <div className="bg-navy-50 rounded-2xl p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-6 pb-6 border-b-2 border-navy-200">
                <div className="text-lg font-semibold text-navy-900">Feature Categories</div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-success-500 to-trust-500 text-white rounded-lg font-semibold">
                    <Crown className="w-4 h-4" />
                    Custom Invoicing
                  </div>
                </div>
                <div className="text-center">
                  <div className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">
                    All Competitors
                  </div>
                </div>
              </div>

              {/* Feature Categories */}
              {features.map((category, categoryIndex) => (
                <div key={category.category} className="py-6 border-b border-navy-200 last:border-b-0">
                  
                  {/* Category Header */}
                  <div className="grid grid-cols-3 gap-6 mb-4">
                    <h4 className="text-lg font-semibold text-navy-900">{category.category}</h4>
                    <div></div>
                    <div></div>
                  </div>

                  {/* Category Features */}
                  {category.items.map((item, itemIndex) => (
                    <div key={item.feature} className="grid grid-cols-3 gap-6 py-3">
                      <div className="text-navy-700 pl-4">{item.feature}</div>
                      <div className="text-center">
                        {renderFeatureIcon(item.us)}
                      </div>
                      <div className="text-center">
                        {renderFeatureIcon(item.them)}
                      </div>
                    </div>
                  ))}

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* The Verdict */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 text-white text-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-success-400" />
            <h3 className="text-3xl font-bold">The Verdict Is Clear</h3>
          </div>
          
          <p className="text-xl text-navy-200 mb-8 max-w-3xl mx-auto">
            Stop paying monthly for limitations. Join the businesses who chose ownership, 
            design freedom, and lifetime value over subscription mediocrity.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-success-400 mb-2">$500+</div>
              <div className="text-navy-300">2-Year Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-400 mb-2">∞</div>
              <div className="text-navy-300">Design Freedom</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning-400 mb-2">0</div>
              <div className="text-navy-300">Watermarks</div>
            </div>
          </div>

          <button className="btn-primary bg-success-500 hover:bg-success-600 text-lg px-10 py-4">
            Break Free from Subscriptions Today
          </button>

          <div className="mt-6 text-navy-400 text-sm">
            * Actual pricing revealed on next section. Spoiler: it's less than 2 months of competitor fees.
          </div>

        </div>

      </div>
    </section>
  )
}