import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'

import { Modal } from '@/components/ui/Modal'

type Language = 'EN' | 'MY'

export function LandingPage() {
  const [lang, setLang] = useState<Language>('EN')
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'manager' | 'owner' | 'customer'>('manager')
  const [workflowPlaying, setWorkflowPlaying] = useState(false)

  const content = {
    MY: {
      nav: { features: 'လုပ်ဆောင်ချက်များ', solutions: 'အဖြေများ', pricing: 'ဈေးနှုန်း', demo: 'Demo ကြည့်ရန်' },
      hero: {
        eyebrow: 'ပြခန်းများအတွက် ဒစ်ဂျစ်တယ် AI',
        h1: ['ဝယ်ယူသူများ', 'တစ်ချက် Scan', 'နဲ့ အဖြေရသည်။'],
        p: 'ဖုန်းကင်မရာဖြင့် QR Code ကို ညွှန်းလိုက်ရုံနဲ့ ထုတ်ကုန်အချက်အလက်များ၊ ဈေးနှုန်း၊ AI နှိုင်းယှဉ်ချက်များ ချက်ချင်းရပါသည်။ ဝန်ထမ်းမလိုပါ။ App မရိုက်ဆင်းရပါ။ သင့်ဝန်ထမ်းများ ရောင်းချမှုကိုသာ အာရုံစိုက်နိုင်ပါသည်။',
        cta1: 'Demo ကြည့်ရန် ဆက်သွယ်ပါ',
      },
      metrics: [
        { value: '< 3s', label: 'ထုတ်ကုန်အချက်အလက် ရောက်ရှိချိန်' },
        { value: '0', label: 'App ဒေါင်းလုပ် မလိုပါ' },
        { value: '24/7', label: 'အချိန်မရွေး ဝန်ဆောင်မှု' },
        { value: '1 scan', label: 'လိုအပ်သည့် အချက်အလက်အားလုံး' },
      ],
      howItWorks: {
        h2: 'အသုံးပြုပုံ',
        p: 'သုံးဆင့်သာ။ ဘာမှ ရှုပ်ထွေးမှုမရှိ။',
        steps: [
          { num: '01', title: 'QR Code တပ်ဆင်ပါ', desc: 'InfoScan QR codes ကို ပြခန်းရှိ ထုတ်ကုန်တိုင်းတွင် ကပ်ပါ။ မိနစ်ပိုင်းအတွင်း ပြီးဆုံး — အထူး hardware မလိုပါ။' },
          { num: '02', title: 'ဝယ်ယူသူများ ကိုယ်တိုင်ကြည့်ပါ', desc: 'မည်သည့် ဖုန်းကင်မရာဖြင့်မဆို scan ဖတ်ကာ အချက်အလက်များ၊ ဈေးနှုန်း၊ AI နှိုင်းယှဉ်ချက်များ ချက်ချင်းကြည့်ရှုပါ။' },
          { num: '03', title: 'သင်က ထိန်းချုပ်ပါ', desc: 'ဆိုင်ခွဲအားလုံး၌ ဈေးနှုန်းကို ချက်ချင်းပြောင်းပါ။ မည်သည့် ပစ္စည်းကို အများဆုံး scan ဖတ်သည် ကြည့်ပါ။ Dashboard တစ်ခုတည်းမှ အားလုံးကို ထိန်းသိမ်းပါ။' },
        ]
      },
      workflow: {
        h2: 'Workflow ဗီဒီယိုများ',
        p: 'အသုံးပြုသူအမျိုးအစားအလိုက် InfoScan ၏ လုပ်ဆောင်ပုံကို ကြည့်ရှုပါ။',
        tabs: {
          manager: { label: 'Manager', title: 'မန်နေဂျာ ထိန်းချုပ်မှု', desc: 'ဈေးနှုန်းများပြောင်းလဲခြင်း၊ QR codes ထုတ်ယူခြင်းနှင့် ပစ္စည်းစာရင်း စီမံခန့်ခွဲခြင်းတို့ကို လွယ်ကူစွာ ဆောင်ရွက်ပါ။' },
          owner: { label: 'Owner', title: 'ပိုင်ရှင် ခြုံငုံသုံးသပ်မှု', desc: 'ဆိုင်ခွဲအားလုံး၏ Analytics၊ scan အရေအတွက်များနှင့် လုပ်ငန်းအခြေအနေကို တစ်နေရာတည်းမှ ကြည့်ရှုပါ။' },
          customer: { label: 'Customer', title: 'ဝယ်ယူသူ အတွေ့အကြုံ', desc: 'QR code ကို scan ဖတ်ကာ ထုတ်ကုန်အချက်အလက်များ၊ ဈေးနှုန်းနှင့် AI နှိုင်းယှဉ်ချက်များကို ချက်ချင်းကြည့်ရှုပုံ ကို ကြည့်ပါ။' }
        },
      },
      modal: {
        title: 'InfoScan ကို စမ်းသပ်ကြည့်ပါ',
        successH3: 'စာရင်းသွင်းပြီးပါပြီ',
        successP: 'ကျွန်ုပ်တို့အဖွဲ့မှ Demo ပြသရန် မကြာမီ ဆက်သွယ်ပါမည်။',
        desc: 'သင့်အချက်အလက်များကို ဖြည့်သွင်းပြီး InfoScan ၏ အကျိုးကျေးဇူးများကို လေ့လာပါ။',
        name: 'အမည်အပြည့်အစုံ',
        email: 'အီးမေးလ်',
        showroom: 'ဆိုင်အမည်',
        submit: 'Demo ကြည့်ရန် စာရင်းသွင်းမည်'
      },
      solutions: {
        h2: ['သင့်လုပ်ငန်းအတွက်', 'အကောင်းဆုံး အဖြေများ'],
        p: 'သင်သည် နည်းပညာပစ္စည်းများ သို့မဟုတ် ဇိမ်ခံပစ္စည်းများ ရောင်းချသည်ဖြစ်စေ InfoScan က သင့်ပြခန်းအတွက် အကောင်းဆုံး ဝန်ဆောင်မှုပေးနိုင်ပါသည်။',
        items: [
          {
            title: "Premium Electronics",
            desc: "ရှုပ်ထွေးသော Spec များနှင့် မော်ဒယ်နှိုင်းယှဉ်ချက်များကို AI ဖြင့် ချက်ချင်းဖြေဆိုသည်။ ဝန်ထမ်းများ တစ်နေ့ ၄၀ ကြိမ် တူညီသောမေးခွန်းများ မဖြေဆိုရတော့ပါ။"
          },
          {
            title: "Automotive Showrooms",
            desc: "ကားမော်ဒယ်များ၊ ရရှိနိုင်မှု၊ Trim Level နှိုင်းယှဉ်ချက်များကို ဝယ်ယူသူ ကိုယ်တိုင်ကြည့်ရှုနိုင်သည်။ Test drive ချိန်းဆိုမှုများကို ချောမွေ့စွာ စီစဉ်နိုင်သည်။"
          },
          {
            title: "Luxury Furnishing",
            desc: "ပစ္စည်းအရည်အသွေး၊ အတိုင်းအတာ၊ မှာယူမှုရက်ချိန်းများကို အသေးစိတ်ဖော်ပြသည်။ Brand experience ကို ထိန်းသိမ်းနိုင်သည်။"
          }
        ],
        comparison: {
          title: 'InfoScan မသုံးမီ vs သုံးပြီးနောက်',
          before: {
            label: 'မသုံးမီ',
            items: [
              'ဝယ်ယူသူများ အရောင်းဝန်ထမ်းကို စောင့်ရသည်',
              'ဈေးနှုန်း Manual ပြောင်းရ အမှားများဖြစ်သည်',
              'ဝယ်ယူသူ ဘယ်ပစ္စည်းကို စိတ်ဝင်စားသည် မသိ',
              'ဝန်ထမ်းများ တူညီသောမေးခွန်းများ ဖြေနေရသည်'
            ]
          },
          after: {
            label: 'InfoScan သုံးပြီး',
            items: [
              'ပစ္စည်းတိုင်းတွင် ချက်ချင်း အဖြေရသည်',
              'ဆိုင်ခွဲအားလုံး ဈေးနှုန်း တပြိုင်နက် ပြောင်းသည်',
              'Scan Analytics ဖြင့် ဝယ်ယူသူ စိတ်ဝင်စားမှု သိနိုင်သည်',
              'ဝန်ထမ်းများ ရောင်းချမှုကိုသာ အာရုံစိုက်နိုင်သည်'
            ]
          }
        },
        challenge: {
          title: 'The Challenge',
          quote: '"ရိုးရာပြခန်းများတွင် ဝယ်ယူသူများသည် အချက်အလက်များကို ချက်ချင်းမသိရှိနိုင်ဘဲ အရောင်းဝန်ထမ်းများကိုသာ အားကိုးနေရသဖြင့် အခွင့်အရေးများ ဆုံးရှုံးနေရပါသည်။"',
          desc: 'InfoScan သည် ဤပြဿနာကို ဖြေရှင်းပေးရန် ဒစ်ဂျစ်တယ်နည်းပညာဖြင့် သင့်ပြခန်းကို ၂၄ နာရီပတ်လုံး အဆင့်မြင့် ဝန်ဆောင်မှုပေးနိုင်ရန် ဖန်တီးထားပါသည်။'
        }
      },
      pricing: {
        h2: 'သင့်လုပ်ငန်းနှင့် ကိုက်ညီသော အစီအစဉ်များ',
        p: 'ပြခန်းတစ်ခုမှသည် လုပ်ငန်းကြီးများအထိ အကောင်းဆုံး ဝန်ဆောင်မှုများ။',
        plans: [
          { name: 'API Subscription', shops: 'ဆိုင် ၁ ခု', pro: '29,900', ultra: '39,900', features: ['API အသုံးပြုခွင့်', 'ပစ္စည်းစာရင်း စီမံခြင်း', 'QR Code ထုတ်ယူခြင်း', 'AI Chat ဝန်ဆောင်မှု'] },
          { name: 'Subscription', shops: 'ဆိုင် ၅ ခု', pro: '49,900', ultra: '59,900', features: ['ဆိုင်ခွဲ ၅ ခု စီမံခြင်း', 'ဗဟိုမှ ထိန်းချုပ်ခြင်း', 'အသေးစိတ် Analytics', 'ဦးစားပေး Support'], popular: true },
          { name: 'Custom Setup', shops: 'ဆိုင် ၁၀ ခု', basePrice: '၃၀ သိန်း', features: ['ဆိုင်ခွဲ ၁၀ ခုအထိ', 'သီးသန့် Server', 'SLA အာမခံချက်', 'စိတ်ကြိုက် ပြင်ဆင်ခြင်း'] }
        ]
      }
    },
    EN: {
      nav: { features: 'Features', solutions: 'Solutions', pricing: 'Pricing', demo: 'Book a Demo' },
      hero: {
        eyebrow: 'AI-Powered Digital Assistant for Showrooms',
        h1: ['Customers Get', 'Full Answers.', 'One Scan.'],
        p: 'Point a phone at any product\'s QR code and instantly get specs, live pricing, AI comparisons, and recommendations — no salesperson needed, no app to download. Your staff focuses on closing deals instead of answering the same questions 40 times a day.',
        cta1: 'Book a Demo',
      },
      metrics: [
        { value: '< 3s', label: 'Time to full product info' },
        { value: '0', label: 'App installs required' },
        { value: '24/7', label: 'Always-on product assistant' },
        { value: '1 scan', label: 'All the info customers need' },
      ],
      howItWorks: {
        h2: 'How It Works',
        p: 'Three steps. Zero friction.',
        steps: [
          { num: '01', title: 'Attach QR Codes', desc: 'Print and place InfoScan QR codes on any product in your showroom. Takes minutes — no hardware or technical setup needed.' },
          { num: '02', title: 'Customers Self-Serve', desc: 'Any phone camera. Scan → instant specs, live pricing, AI comparisons, and personalized recommendations. No app download.' },
          { num: '03', title: 'You Stay In Control', desc: 'Push price updates across all branches in seconds. See which products get scanned most. Run every branch from one dashboard.' },
        ]
      },
      workflow: {
        h2: 'Workflow Demos',
        p: 'See how InfoScan works for each user role in your showroom.',
        tabs: {
          manager: { label: 'Manager', title: 'Manager Controls', desc: 'Update pricing across branches in seconds, generate QR codes, and manage inventory with ease.' },
          owner: { label: 'Owner', title: 'Owner Overview', desc: 'View analytics across all branches, track scan volumes, and monitor business performance from one dashboard.' },
          customer: { label: 'Customer', title: 'Customer Experience', desc: 'See how a customer scans a QR code and instantly gets full product specs, live pricing, and AI comparisons — no app needed.' }
        },
      },
      modal: {
        title: 'Experience InfoScan',
        successH3: 'Request Received',
        successP: 'Our team will reach out shortly to schedule your demo.',
        desc: 'Enter your details below and we\'ll show you how InfoScan can transform your showroom.',
        name: 'Full Name',
        email: 'Business Email',
        showroom: 'Showroom Name',
        submit: 'Schedule My Demo'
      },
      solutions: {
        h2: ['Built for', 'High-Value Retail'],
        p: 'Every showroom category has the same hidden problem: customers leave because they couldn\'t get answers fast enough. InfoScan fixes that.',
        items: [
          {
            title: "Premium Electronics",
            desc: "Customers ask \"what\'s the difference?\" dozens of times a day. InfoScan answers with full specs, AI model comparisons, and live pricing — instantly, without a salesperson."
          },
          {
            title: "Automotive Showrooms",
            desc: "Let buyers explore trim levels, check availability, compare models, and schedule test drives on their own. Your team spends less time explaining and more time selling."
          },
          {
            title: "Luxury Furnishing",
            desc: "Deep dives into materials, dimensions, lead times, and custom order options — delivered at the product, not at the front desk. Your brand experience stays premium."
          }
        ],
        comparison: {
          title: 'The Shift',
          before: {
            label: 'Without InfoScan',
            items: [
              'Customers wait for a free salesperson',
              'Pricing errors from manual branch updates',
              'No data on what products interest buyers',
              'Staff tied up answering the same questions'
            ]
          },
          after: {
            label: 'With InfoScan',
            items: [
              'Instant answers at every product, 24/7',
              'Live pricing synced across all branches instantly',
              'Full scan analytics — per product, per branch',
              'Staff freed to close deals, not answer FAQs'
            ]
          }
        },
        challenge: {
          title: 'The Core Problem',
          quote: '"Traditional showrooms suffer from information asymmetry. Customers want deep data instantly, but sales staff are overstretched answering the same questions all day."',
          desc: 'InfoScan solves this by turning every physical product into a 24/7 AI-powered digital twin — available the moment a customer points their phone at it.'
        }
      },
      pricing: {
        h2: 'Simple, Transparent Plans',
        p: 'From a single showroom to a multi-branch operation.',
        plans: [
          { name: 'API Subscription', shops: '1 Shop', pro: '29,900', ultra: '39,900', features: ['Full API Access', 'Inventory Management', 'QR Code Generation', 'AI Chat Enabled'] },
          { name: 'Subscription', shops: '5 Shops', pro: '49,900', ultra: '59,900', features: ['5 Branch Management', 'Centralized Control', 'Advanced Analytics', 'Priority Support'], popular: true },
          { name: 'Custom Setup', shops: '10 Shops', basePrice: '30 Lakhs', features: ['Up to 10 Branches', 'Dedicated Infrastructure', 'SLA Guarantee', 'Custom Configuration'] }
        ]
      }
    }
  }

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
    <div className={`min-h-screen flex flex-col selection:bg-brand-primary selection:text-white ${lang === 'MY' ? 'font-sans' : 'font-sans'}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-brand-dark uppercase tracking-[0.2em] font-serif">InfoScan</span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#how-it-works" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{lang === 'EN' ? 'How It Works' : 'အသုံးပြုပုံ'}</a>
              <a href="#solutions" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{t.nav.solutions}</a>
              <a href="#pricing" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{t.nav.pricing}</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-slate-100 p-1 rounded-none mr-2">
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
              <Button size="sm" onClick={() => setShowDemoModal(true)}>{t.nav.demo}</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 mb-8">
            <span className="size-1.5 bg-brand-primary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.25em]">{t.hero.eyebrow}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-dark mb-8 leading-[1.05] uppercase">
            {t.hero.h1[0]} <br />
            <span className="text-brand-primary font-serif">{t.hero.h1[1]}</span> {t.hero.h1[2]}
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
            {t.hero.p}
          </p>

          <div className="flex items-center justify-center mb-16">
            <Button size="lg" className="px-16 rounded-none text-base" onClick={() => setShowDemoModal(true)}>{t.hero.cta1}</Button>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-orange-100 mb-20 bg-white/60">
            {t.metrics.map((m, i) => (
              <div key={i} className={`py-8 px-6 text-center ${i < t.metrics.length - 1 ? 'border-r border-orange-100' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-brand-dark font-serif tracking-tighter">{m.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-2 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Workflow Demo Section */}
        <div className="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 uppercase tracking-tight font-serif">{t.workflow.h2}</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">{t.workflow.p}</p>
          </div>

          <div className="relative flex flex-col lg:flex-row gap-0">
            {/* Video Player Area */}
            <div className="flex-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-orange-400/20 blur-sm"></div>
              <div
                className="relative aspect-video bg-brand-dark border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center cursor-pointer"
                onClick={() => setWorkflowPlaying(true)}
              >
                {workflowPlaying ? (
                  <video
                    key={activeWorkflowTab}
                    src={`/demo-videos/${activeWorkflowTab}-demo.mp4`}
                    autoPlay
                    controls
                    className="w-full h-full object-cover animate-in fade-in duration-500"
                  />
                ) : (
                  <div className="text-center space-y-4">
                    <div className="size-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto border border-brand-primary/30 hover:scale-110 transition-transform">
                      <div className="size-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-brand-primary ml-2"></div>
                    </div>
                    <p className="text-slate-400 font-medium uppercase tracking-[0.2em] text-[10px]">
                      {t.workflow.tabs[activeWorkflowTab].title}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Vertical Tab Buttons */}
            <div className="flex lg:flex-col w-full lg:w-auto">
              {(['manager', 'owner', 'customer'] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => { setActiveWorkflowTab(role); setWorkflowPlaying(false) }}
                  className={`flex-1 lg:flex-none px-6 lg:px-10 py-6 lg:py-10 text-left border transition-all duration-300 ${
                    activeWorkflowTab === role
                      ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-brand-bg hover:border-brand-primary/30 hover:text-brand-primary'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.25em] block">
                    {t.workflow.tabs[role].label}
                  </span>
                </button>
              ))}
            </div>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight font-serif">{t.howItWorks.h2}</h2>
            <p className="text-lg text-slate-400">{t.howItWorks.p}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className={`relative p-10 ${i < t.howItWorks.steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-slate-700' : ''}`}>
                {/* Step number */}
                <div className="text-[80px] font-bold text-white/30 font-serif leading-none mb-6 select-none">{step.num}</div>
                {/* Orange accent line */}
                <div className="w-8 h-0.5 bg-brand-primary mb-6"></div>
                <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-serif">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                {/* Connector arrow for desktop */}
                {i < t.howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <div className="size-6 bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center">
                      <span className="text-brand-primary text-[10px]">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-8 uppercase tracking-tight font-serif">
                {t.solutions.h2[0]} <br />
                <span className="text-brand-primary italic">{t.solutions.h2[1]}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t.solutions.p}
              </p>

              <div className="space-y-8">
                {t.solutions.items.map((item, i) => (
                  <div key={i} className="group border-l-2 border-slate-200 pl-6 hover:border-brand-primary transition-colors">
                    <h4 className="font-bold text-brand-dark group-hover:text-brand-primary transition-colors uppercase text-sm tracking-widest font-serif">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-orange-200/50 blur-3xl"></div>
              <div className="relative bg-white p-12 shadow-2xl border border-orange-50">
                <div className="flex flex-col h-full justify-center">
                  <h3 className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-8">{t.solutions.challenge.title}</h3>
                  <p className="text-2xl text-brand-dark leading-tight italic font-serif">
                    {t.solutions.challenge.quote}
                  </p>
                  <div className="mt-10 pt-10 border-t border-slate-100">
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t.solutions.challenge.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before / After Comparison */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] text-center mb-10">{t.solutions.comparison.title}</h3>
            <div className="grid md:grid-cols-2 gap-0 border border-slate-200">
              {/* Before */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 bg-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="size-2 rounded-full bg-slate-300"></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">{t.solutions.comparison.before.label}</span>
                </div>
                <div className="space-y-5">
                  {t.solutions.comparison.before.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-slate-300 font-bold mt-0.5 shrink-0">✕</span>
                      <span className="text-sm text-slate-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* After */}
              <div className="p-10 bg-brand-bg">
                <div className="flex items-center gap-3 mb-8">
                  <div className="size-2 rounded-full bg-brand-primary"></div>
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.25em]">{t.solutions.comparison.after.label}</span>
                </div>
                <div className="space-y-5">
                  {t.solutions.comparison.after.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-brand-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span className="text-sm text-brand-dark font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-dark mb-4 uppercase tracking-tight font-serif">{t.pricing.h2}</h2>
            <p className="text-lg text-slate-500">{t.pricing.p}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.pricing.plans.map((plan, i) => (
              <div key={i} className={`relative p-10 border ${plan.popular ? 'border-brand-primary bg-brand-bg' : 'border-slate-100 bg-white'} flex flex-col`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-brand-primary text-white text-[8px] font-bold uppercase px-3 py-1 tracking-[0.2em]">Popular</div>
                )}
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{plan.name}</h3>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-6">{plan.shops}</span>

                {'basePrice' in plan ? (
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-brand-dark font-serif tracking-tighter">{plan.basePrice}</span>
                    </div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{lang === 'MY' ? 'အခြေခံ စနစ်တပ်ဆင်ခ' : 'Base Setup Price'}</p>
                  </div>
                ) : (
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center justify-between bg-slate-50 px-4 py-3 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pro</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-brand-dark font-serif tracking-tighter">{plan.pro}</span>
                        <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Ks/mo</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-gradient-to-r from-brand-primary to-orange-400 px-4 py-3">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">Ultra</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-white font-serif tracking-tighter">{plan.ultra}</span>
                        <span className="text-white/70 text-[9px] font-bold uppercase tracking-widest">Ks/mo</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <span className="text-brand-primary">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button fullWidth variant={plan.popular ? 'primary' : 'secondary'} className="rounded-none" onClick={() => setShowDemoModal(true)}>
                  {'basePrice' in plan ? (lang === 'MY' ? 'ဆက်သွယ်ရန်' : 'Contact Sales') : (lang === 'MY' ? 'စတင်မည်' : 'Get Started')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-serif">InfoScan</span>
            <span className="text-slate-400 text-[10px] tracking-widest ml-4">© 2026</span>
          </div>
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
