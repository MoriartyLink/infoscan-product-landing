import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

type Language = 'EN' | 'MY'

const content = {
  EN: {
    nav: { howItWorks: 'How It Works', solutions: 'Solutions', pricing: 'Pricing', demo: 'Book a Demo' },
    hero: {
      eyebrow: 'Pricing',
      h1: ['Simple,', 'Transparent Plans'],
      p: 'From a single showroom to a multi-branch operation. No hidden fees.',
    },
    plans: [
      {
        name: 'API Subscription',
        shops: '1 Shop',
        pro: '29,900',
        ultra: '39,900',
        features: ['Full API Access', 'Inventory Management', 'QR Code Generation', 'AI Chat Enabled'],
      },
      {
        name: 'Subscription',
        shops: '5 Shops',
        pro: '49,900',
        ultra: '59,900',
        features: ['5 Branch Management', 'Centralized Control', 'Advanced Analytics', 'Priority Support'],
        popular: true,
      },
      {
        name: 'Custom Setup',
        shops: '10 Shops',
        basePrice: '30 Lakhs',
        features: ['Up to 10 Branches', 'Dedicated Infrastructure', 'SLA Guarantee', 'Custom Configuration'],
      },
    ],
    tiers: { pro: 'Pro', ultra: 'Ultra', perMonth: 'Ks/mo', baseSetup: 'Base Setup Price' },
    cta: { getStarted: 'Get Started', contactSales: 'Contact Sales' },
    modal: {
      title: 'Experience InfoScan',
      successH3: 'Request Received',
      successP: 'Our team will reach out shortly to schedule your demo.',
      desc: "Enter your details below and we'll show you how InfoScan can transform your showroom.",
      name: 'Full Name',
      email: 'Business Email',
      showroom: 'Showroom Name',
      submit: 'Schedule My Demo',
    },
    faq: {
      heading: 'Common Questions',
      items: [
        { q: 'Can I switch plans later?', a: 'Yes. You can upgrade or downgrade at any time. Changes apply from the next billing cycle.' },
        { q: 'Is there a free trial?', a: 'We offer a live demo of the full product. Book one from the button above — no commitment required.' },
        { q: 'What counts as a "shop"?', a: 'A shop is a single physical showroom location. Each location gets its own dashboard, QR codes, and analytics.' },
        { q: 'How does the Custom Setup price work?', a: 'The 30-Lakh base covers installation, onboarding, and dedicated infrastructure for up to 10 branches. Monthly running costs are quoted separately.' },
      ],
    },
  },
  MY: {
    nav: { howItWorks: 'အသုံးပြုပုံ', solutions: 'အဖြေများ', pricing: 'ဈေးနှုန်း', demo: 'Demo ကြည့်ရန်' },
    hero: {
      eyebrow: 'ဈေးနှုန်း',
      h1: ['ရိုးရှင်းသော', 'အစီအစဉ်များ'],
      p: 'ပြခန်းတစ်ခုမှသည် လုပ်ငန်းကြီးများအထိ။ လျှို့ဝှက်ကြေးများ မရှိပါ။',
    },
    plans: [
      {
        name: 'API Subscription',
        shops: 'ဆိုင် ၁ ခု',
        pro: '29,900',
        ultra: '39,900',
        features: ['Full API Access', 'ပစ္စည်းစာရင်း စီမံခြင်း', 'QR Code ထုတ်ယူခြင်း', 'AI Chat'],
      },
      {
        name: 'Subscription',
        shops: 'ဆိုင် ၅ ခု',
        pro: '49,900',
        ultra: '59,900',
        features: ['ဆိုင်ခွဲ ၅ ခု စီမံခြင်း', 'Centralized Control', 'Advanced Analytics', 'Priority Support'],
        popular: true,
      },
      {
        name: 'Custom Setup',
        shops: 'ဆိုင် ၁၀ ခု',
        basePrice: '၃၀ သိန်း',
        features: ['ဆိုင်ခွဲ ၁၀ ခုအထိ', 'Dedicated Server', 'SLA အာမခံချက်', 'Custom Configuration'],
      },
    ],
    tiers: { pro: 'Pro', ultra: 'Ultra', perMonth: 'Ks/mo', baseSetup: 'အခြေခံ စနစ်တပ်ဆင်ခ' },
    cta: { getStarted: 'စတင်မည်', contactSales: 'ဆက်သွယ်ရန်' },
    modal: {
      title: 'InfoScan ကို စမ်းသပ်ကြည့်ပါ',
      successH3: 'စာရင်းသွင်းပြီးပါပြီ',
      successP: 'ကျွန်ုပ်တို့အဖွဲ့မှ Demo ပြသရန် မကြာမီ ဆက်သွယ်ပါမည်။',
      desc: 'သင့်အချက်အလက်များကို ဖြည့်သွင်းပြီး InfoScan ၏ အကျိုးကျေးဇူးများကို လေ့လာပါ။',
      name: 'အမည်အပြည့်အစုံ',
      email: 'အီးမေးလ်',
      showroom: 'ဆိုင်အမည်',
      submit: 'Demo ကြည့်ရန် စာရင်းသွင်းမည်',
    },
    faq: {
      heading: 'မေးလေ့ရှိသောမေးခွန်းများ',
      items: [
        { q: 'နောက်မှ Plan ပြောင်းနိုင်ပါသလား?', a: 'ပြောင်းနိုင်ပါသည်။ Upgrade သို့မဟုတ် Downgrade ကို မည်သည့်အချိန်မဆို ပြုလုပ်နိုင်သည်။ နောက်လ Billing Cycle မှ စတင်သက်ရောက်ပါမည်။' },
        { q: 'Free Trial ရှိပါသလား?', a: 'Live Demo ကြည့်ရှုနိုင်ပါသည်။ အပေါ်ရှိ Button မှ Book လုပ်ပါ — Commitment မလိုအပ်ပါ။' },
        { q: '"ဆိုင်" ဆိုသည်မှာ ဘာကိုဆိုလိုသနည်း?', a: 'ဆိုင်တစ်ခုဆိုသည်မှာ Physical Location တစ်ခုဖြစ်သည်။ တစ်ဆိုင်စီတွင် ၎င်းပိုင် Dashboard, QR Code နှင့် Analytics ရှိသည်။' },
        { q: 'Custom Setup ဈေးနှုန်း ဘယ်လိုတွက်သနည်း?', a: '၃၀ သိန်းသည် ဆိုင်ခွဲ ၁၀ ခုအထိအတွက် Installation, Onboarding နှင့် Dedicated Infrastructure ပါဝင်သည်။ နောက်ပိုင်း Monthly ကြေးကို သီးခြားတွက်ချက်ပါမည်။' },
      ],
    },
  },
}

export function PricingPage() {
  const [lang, setLang] = useState<Language>('EN')
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const t = content[lang]

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setShowDemoModal(false)
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-primary selection:text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.jpg" alt="InfoScan" className="h-7 sm:h-8 w-auto object-contain" />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/#how-it-works" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{t.nav.howItWorks}</Link>
              <Link to="/#solutions" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{t.nav.solutions}</Link>
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">{t.nav.pricing}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex bg-slate-100 p-1 rounded-none">
                <button
                  onClick={() => setLang('EN')}
                  className={`px-3 py-1 text-[10px] font-bold transition-all ${lang === 'EN' ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('MY')}
                  className={`px-3 py-1 text-[10px] font-bold transition-all ${lang === 'MY' ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  MY
                </button>
              </div>
              <Button size="sm" className="hidden sm:inline-flex" onClick={() => setShowDemoModal(true)}>{t.nav.demo}</Button>
              {/* Hamburger button — mobile only */}
              <button
                onClick={() => setMobileMenuOpen(o => !o)}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-orange-100 bg-brand-bg/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-0">
              <Link
                to="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-[11px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em] border-b border-orange-100"
              >
                {t.nav.howItWorks}
              </Link>
              <Link
                to="/#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-[11px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em] border-b border-orange-100"
              >
                {t.nav.solutions}
              </Link>
              <span className="py-3 text-[11px] font-bold text-brand-primary uppercase tracking-[0.2em] border-b border-orange-100">
                {t.nav.pricing}
              </span>
              <button
                onClick={() => { setMobileMenuOpen(false); setShowDemoModal(true) }}
                className="mt-3 w-full py-3 bg-brand-primary text-white text-[11px] font-bold uppercase tracking-[0.2em] text-center"
              >
                {t.nav.demo}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 bg-brand-bg/30 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 mb-6">
            <span className="size-1.5 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.25em]">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-brand-dark mb-4 leading-[1.05] uppercase font-serif">
            {t.hero.h1[0]} <span className="text-brand-primary italic">{t.hero.h1[1]}</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{t.hero.p}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {t.plans.map((plan, i) => (
              <div
                key={i}
                className={`relative p-6 md:p-10 border flex flex-col ${
                  plan.popular ? 'border-brand-primary bg-brand-bg' : 'border-slate-100 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-brand-primary text-white text-[8px] font-bold uppercase px-3 py-1 tracking-[0.2em]">
                    Popular
                  </div>
                )}
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{plan.name}</h3>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-6">{plan.shops}</span>

                {'basePrice' in plan ? (
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-brand-dark font-serif tracking-tighter">{plan.basePrice}</span>
                    </div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{t.tiers.baseSetup}</p>
                  </div>
                ) : (
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center justify-between bg-slate-50 px-4 py-3 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.tiers.pro}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-brand-dark font-serif tracking-tighter">{plan.pro}</span>
                        <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{t.tiers.perMonth}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-gradient-to-r from-brand-primary to-orange-400 px-4 py-3">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t.tiers.ultra}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-white font-serif tracking-tighter">{plan.ultra}</span>
                        <span className="text-white/70 text-[9px] font-bold uppercase tracking-widest">{t.tiers.perMonth}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <span className="text-brand-primary shrink-0">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  fullWidth
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="rounded-none"
                  onClick={() => setShowDemoModal(true)}
                >
                  {'basePrice' in plan ? t.cta.contactSales : t.cta.getStarted}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-bg/30 border-t border-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark uppercase tracking-tight font-serif mb-12 text-center">
            {t.faq.heading}
          </h2>
          <div className="divide-y divide-orange-100 border border-orange-100 bg-white">
            {t.faq.items.map((item, i) => (
              <div key={i}>
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 hover:bg-brand-bg/40 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-bold text-brand-dark uppercase tracking-wider">{item.q}</span>
                  <span className={`text-brand-primary font-bold text-lg shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <Modal open={showDemoModal} onClose={() => setShowDemoModal(false)} title={t.modal.title}>
        {isSubmitted ? (
          <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl font-bold text-brand-dark mb-2 uppercase font-serif">{t.modal.successH3}</h3>
            <p className="text-slate-500">{t.modal.successP}</p>
          </div>
        ) : (
          <form onSubmit={handleDemoSubmit} className="space-y-4">
            <p className="text-slate-500 mb-6">{t.modal.desc}</p>
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-widest">{t.modal.name}</label>
              <input required type="text" className="w-full px-4 py-2 rounded-none border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-sans" placeholder={lang === 'MY' ? 'မောင်ကျော်' : 'Aung Kyaw'} />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-widest">{t.modal.email}</label>
              <input required type="email" className="w-full px-4 py-2 rounded-none border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-sans" placeholder="kyaw@showroom.com" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-widest">{t.modal.showroom}</label>
              <input required type="text" className="w-full px-4 py-2 rounded-none border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-sans" placeholder="TechZone Showroom" />
            </div>
            <Button fullWidth size="lg" className="mt-4 rounded-none">{t.modal.submit}</Button>
          </form>
        )}
      </Modal>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="InfoScan" className="h-6 w-auto object-contain opacity-70" />
            <span className="text-slate-400 text-[10px] tracking-widest ml-4">© 2026</span>
          </Link>
          <div className="flex gap-10 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
            <a href="mailto:sales@infoscan.io" className="hover:text-brand-primary transition-colors">Contact Sales</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
