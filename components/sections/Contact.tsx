'use client'

import { 
  Mail, 
  ArrowRight, 
  Shield, 
  Zap,
  Clock,
  CheckCircle,
  MessageCircle,
  Users,
  Award,
  Sparkles
} from 'lucide-react'

export default function Contact() {
  const faqs = [
    {
      question: "How quickly can I get my custom invoice design?",
      answer: "Most custom designs are implemented within 2-3 business days. Rush delivery available for urgent needs."
    },
    {
      question: "What if I don't like the final design?",
      answer: "30-day money-back guarantee, no questions asked. You can even keep the design files if you're not satisfied."
    },
    {
      question: "Do I need technical skills to use this?",
      answer: "Zero technical skills required. We handle all implementation. You just provide your brand guidelines and we do the rest."
    },
    {
      question: "How does this integrate with my Shopify store?",
      answer: "Seamless integration with your existing Shopify setup. No disruption to your current workflow or customer experience."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-navy-50">
      <div className="section-container">
        
        {/* Final Value Reinforcement */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-success-700 bg-success-100 rounded-full">
            <Award className="w-4 h-4 mr-2" />
            Join the Design Freedom Revolution
          </div>
          
          <h2 className="headline-lg text-navy-900 mb-6">
            Stop Settling for 
            <span className="gradient-text-warning"> Generic Templates</span>
          </h2>
          
          <p className="body-lg text-navy-600 max-w-3xl mx-auto mb-8">
            You've seen the comparison. You understand the value. Now it's time to claim your 
            professional invoice freedom and join the businesses who chose ownership over subscriptions.
          </p>

          {/* Social Proof Numbers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">500+</div>
              <div className="text-navy-600 text-sm">Businesses Liberated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust-600 mb-2">$500+</div>
              <div className="text-navy-600 text-sm">Average Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-600 mb-2">0</div>
              <div className="text-navy-600 text-sm">Monthly Anxiety</div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout: CTA + Contact */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left: Final CTA */}
          <div className="bg-gradient-to-br from-success-600 to-trust-600 rounded-3xl p-10 text-white">
            
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-success-200" />
              <h3 className="text-2xl font-bold">Ready to Break Free?</h3>
            </div>
            
            <p className="text-lg text-success-100 mb-8">
              Get your custom invoice design implemented by our expert team. 
              One payment, lifetime ownership, zero limitations.
            </p>

            {/* What You Get */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Custom Design Implementation</div>
                  <div className="text-success-200 text-sm">Your brand, pixel-perfect execution</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Lifetime Technical Support</div>
                  <div className="text-success-200 text-sm">Always here when you need us</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">All Future Updates</div>
                  <div className="text-success-200 text-sm">Continuous improvements included</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">30-Day Money-Back Guarantee</div>
                  <div className="text-success-200 text-sm">Risk-free investment in your brand</div>
                </div>
              </div>
            </div>

            {/* Urgency Element */}
            <div className="bg-warning-500 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Limited Time: $20 Off (Regular $100, Now $80)</span>
              </div>
            </div>

            {/* Primary CTA */}
            <button className="btn-primary bg-white text-success-600 hover:bg-success-50 w-full text-lg py-4 mb-4 group">
              Get Your Custom Design - $80
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="text-center text-success-200 text-sm">
              🔒 Secure payment • ⚡ Instant access • 💎 Lifetime ownership
            </div>

          </div>

          {/* Right: Contact & Support */}
          <div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Questions? We're Here to Help
              </h3>
              
              <p className="text-navy-600 mb-8">
                Our team of design and technical experts is ready to make your custom invoice vision a reality. 
                Get in touch for personalized guidance or enterprise solutions.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                
                {/* Email Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-trust-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-trust-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Direct Support</h4>
                    <p className="text-navy-600 text-sm mb-3">
                      Get technical help, discuss custom requirements, or ask any questions about implementation.
                    </p>
                    <a 
                      href="mailto:engineering@signalovernoise.io" 
                      className="text-trust-600 hover:text-trust-700 font-medium transition-colors"
                    >
                      engineering@signalovernoise.io
                    </a>
                  </div>
                </div>

                {/* Enterprise Solutions */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Enterprise Solutions</h4>
                    <p className="text-navy-600 text-sm mb-3">
                      Need multiple designs, team training, or advanced integrations? Let's discuss custom enterprise packages.
                    </p>
                    <div className="text-navy-500 text-sm">
                      Contact us for volume pricing and enterprise features
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Response Time Promise */}
            <div className="bg-trust-50 rounded-xl p-6 border border-trust-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-trust-600" />
                <h4 className="font-semibold text-navy-900">Fast Response Guarantee</h4>
              </div>
              <p className="text-navy-600 text-sm">
                We respond to all inquiries within 4 hours during business days. 
                Your success is our priority, and we're here to ensure your custom invoice project exceeds expectations.
              </p>
            </div>

          </div>

        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Common Questions Answered
            </h3>
            <p className="text-navy-600">
              Everything you need to know to make the smart decision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MessageCircle className="w-5 h-5 text-trust-600 mt-1 flex-shrink-0" />
                  <h4 className="font-semibold text-navy-900">{faq.question}</h4>
                </div>
                <p className="text-navy-600 text-sm pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Authority Statement */}
        <div className="bg-navy-900 rounded-3xl p-12 text-center text-white">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-success-400" />
            <h3 className="text-3xl font-bold">Your Professional Image Awaits</h3>
          </div>
          
          <p className="text-xl text-navy-200 mb-8 max-w-3xl mx-auto">
            You have two choices: Keep paying monthly for generic templates that make you blend in, 
            or own a custom solution that makes you stand out. The smart choice is obvious.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            
            <button className="btn-primary bg-success-500 hover:bg-success-600 text-lg px-10 py-4 group">
              Claim Your Design Freedom - $80
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="text-navy-400">
              or <a href="mailto:engineering@signalovernoise.io" className="text-trust-400 hover:text-trust-300 transition-colors">ask us anything</a>
            </div>
            
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
            <div className="trust-badge bg-white/10 text-navy-200">
              ✓ 30-Day Guarantee
            </div>
            <div className="trust-badge bg-white/10 text-navy-200">
              ✓ Lifetime Updates
            </div>
            <div className="trust-badge bg-white/10 text-navy-200">
              ✓ Expert Support
            </div>
            <div className="trust-badge bg-white/10 text-navy-200">
              ✓ Instant Access
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}