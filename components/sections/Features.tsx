'use client'

import { 
  Paintbrush, 
  Download, 
  Mail, 
  Zap, 
  Shield, 
  Infinity,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Clock
} from 'lucide-react'

export default function Features() {
  return (
    <section className="section-padding bg-gradient-to-b from-navy-50 to-white">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-success-700 bg-success-100 rounded-full">
            <Sparkles className="w-4 h-4 mr-2" />
            Design Freedom Meets Technical Excellence
          </div>
          
          <h2 className="headline-lg text-navy-900 mb-6">
            Everything You Need to Create 
            <span className="gradient-text-primary"> Stunning Invoices</span>
          </h2>
          
          <p className="body-lg text-navy-600 max-w-3xl mx-auto">
            Stop compromising on design. Get unlimited customization with enterprise-grade features 
            that make your invoices as unique as your business.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left: Design Freedom */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-trust-500 rounded-xl flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">
                Unlimited Design Control
              </h3>
            </div>
            
            <p className="text-lg text-navy-600 mb-6">
              Your brand guidelines become reality. Every color, font, layout element, and spacing 
              is precisely crafted to match your vision. No compromises.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900">Pixel-Perfect Customization</h4>
                  <p className="text-navy-600 text-sm">Every element positioned exactly where you want it</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900">Brand Color Perfection</h4>
                  <p className="text-navy-600 text-sm">Your exact hex codes, gradients, and color schemes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900">Typography Freedom</h4>
                  <p className="text-navy-600 text-sm">Any font, any size, any style that matches your brand</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Demo */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-navy-100 p-8">
              <div className="space-y-6">
                {/* Custom Header */}
                <div className="flex items-center justify-between">
                  <div className="h-8 bg-gradient-to-r from-trust-500 to-success-500 rounded w-32"></div>
                  <div className="text-right">
                    <div className="h-3 bg-navy-200 rounded w-20 mb-1"></div>
                    <div className="h-3 bg-navy-200 rounded w-16"></div>
                  </div>
                </div>
                
                {/* Custom Content */}
                <div className="border-t border-navy-100 pt-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-3 bg-trust-200 rounded"></div>
                    <div className="h-3 bg-success-200 rounded w-3/4"></div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-trust-50 to-success-50 rounded-lg border border-success-200"></div>
                </div>
                
                {/* Custom Footer */}
                <div className="border-t border-navy-100 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gradient-to-r from-success-400 to-trust-400 rounded w-24"></div>
                    <div className="text-xs text-success-600 font-medium">✓ Your Brand, Your Rules</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-success-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
              Zero Limitations
            </div>
          </div>

        </div>

        {/* Feature Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Multi-Channel Distribution */}
          <div className="text-center card-premium p-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-trust-100 to-navy-100 rounded-2xl flex items-center justify-center">
              <div className="flex items-center gap-1">
                <Mail className="w-5 h-5 text-trust-600" />
                <Download className="w-5 h-5 text-navy-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Send & Download Anywhere
            </h3>
            <p className="text-navy-600 mb-4">
              Email directly to clients or download for your records. 
              One platform handles all your invoice distribution needs.
            </p>
            <div className="text-sm text-trust-600">
              ✓ Direct email integration<br />
              ✓ Multiple format downloads<br />
              ✓ Batch processing
            </div>
          </div>

          {/* Speed & Efficiency */}
          <div className="text-center card-highlight p-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-success-100 to-trust-100 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-success-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Lightning-Fast Creation
            </h3>
            <p className="text-navy-600 mb-4">
              Just provide your design and let us handle the technical complexity. 
              From concept to custom invoice in minutes, not hours.
            </p>
            <div className="text-sm text-success-600">
              ✓ Rapid implementation<br />
              ✓ Technical expertise included<br />
              ✓ No learning curve
            </div>
          </div>

          {/* Lifetime Value */}
          <div className="text-center card-premium p-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-navy-100 to-success-100 rounded-2xl flex items-center justify-center">
              <Infinity className="w-8 h-8 text-navy-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">
              Lifetime Ownership
            </h3>
            <p className="text-navy-600 mb-4">
              Pay once, own forever. Includes all updates, improvements, 
              and ongoing support without additional charges.
            </p>
            <div className="text-sm text-navy-600">
              ✓ Permanent access<br />
              ✓ Free updates forever<br />
              ✓ Continuous support
            </div>
          </div>

        </div>

        {/* Technical Excellence Section */}
        <div className="bg-navy-900 rounded-3xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-success-400" />
                <h3 className="text-2xl font-bold">
                  Enterprise-Grade Technical Foundation
                </h3>
              </div>
              
              <p className="text-navy-200 text-lg mb-8">
                While competitors offer basic templates, we deliver technical excellence. 
                Your custom designs are built with precision and reliability.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-400 mb-2">99.9%</div>
                  <div className="text-navy-300 text-sm">Uptime Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-trust-400 mb-2">&lt;2s</div>
                  <div className="text-navy-300 text-sm">Invoice Generation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning-400 mb-2">24/7</div>
                  <div className="text-navy-300 text-sm">System Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-400 mb-2">∞</div>
                  <div className="text-navy-300 text-sm">Design Possibilities</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-success-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Precision Implementation</h4>
                  <p className="text-navy-300">Your designs translated with pixel-perfect accuracy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-trust-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Consistent Updates</h4>
                  <p className="text-navy-300">Regular improvements and feature additions included</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-warning-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Dedicated Support</h4>
                  <p className="text-navy-300">Technical expertise whenever you need assistance</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Own Your Invoice Design?
          </h3>
          <p className="text-lg text-navy-600 mb-8 max-w-2xl mx-auto">
            Stop settling for generic templates. Get the custom invoice solution 
            that grows with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary group">
              Start Your Custom Design
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="btn-ghost">
              View Design Examples
            </button>
          </div>
          
          <div className="mt-6 text-sm text-navy-500">
            <span className="trust-badge mr-2">✓ No Monthly Fees</span>
            <span className="trust-badge mr-2">✓ Lifetime Updates</span>
            <span className="trust-badge">✓ Custom Implementation</span>
          </div>
        </div>

      </div>
    </section>
  )
}