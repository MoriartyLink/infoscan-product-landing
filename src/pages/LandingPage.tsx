import React, { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

type Language = 'EN' | 'MY'

export function LandingPage() {
  const [lang, setLang] = useState<Language>('EN')
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'manager' | 'owner' | 'customer'>('manager')
  const [videoFading, setVideoFading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTabChange = useCallback((role: 'manager' | 'owner' | 'customer') => {
    if (role === activeWorkflowTab) return
    setVideoFading(true)
    setTimeout(() => {
      setActiveWorkflowTab(role)
      setVideoFading(false)
    }, 180)
  }, [activeWorkflowTab])

  const content = {
    MY: {
      nav: { features: 'လုပ်ဆောင်ချက်များ', solutions: 'အဖြေများ', pricing: 'ဈေးနှုန်း', demo: 'Demo ကြည့်ရန်' },
      hero: {
        eyebrow: 'ပြခန်းများအတွက် ဒစ်ဂျစ်တယ် AI',
        h1: ['ဝယ်ယူသူများ', 'တစ်ချက် Scan', 'နဲ့ အဖြေရသည်။'],
        p: 'ဖုန်းနဲ့ QR Code တစ်ချက် scan — ထုတ်ကုန်အချက်အလက်တွေ၊ ဈေးနှုန်း၊ AI နှိုင်းယှဉ်ချက်တွေ ချက်ချင်းပေါ်လာသည်။ App ဒေါင်းဖို့မလို၊ ဝန်ထမ်းကိုလည်း မပင်ပန်းစေပါ။ သင့်ဝန်ထမ်းများ ရောင်းချမှုကိုသာ အာရုံစိုက်နိုင်ပါသည်။',
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
            desc: "ရှုပ်ထွေးသော Spec များနှင့် မော်ဒယ်နှိုင်းယှဉ်ချက်များကို AI ဖြင့် ချက်ချင်းဖြေဆိုသည်။ ဝန်ထမ်းများ တူညီသောမေးခွန်းများအတွက် အချိန်ကုန်ရမည့်အစား ရောင်းချမှုကိုသာ အာရုံစိုက်နိုင်သည်။"
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
          quote: '"ရိုးရာပြခန်းများတွင် ဝယ်ယူသူများသည် လိုချင်သောအချက်အလက်ကို ချက်ချင်းမရရှိနိုင်ဘဲ ဆုံးဖြတ်ချက်ချရာ နှောင့်နှေးတတ်ကြသည်။ ဤအချိန်ကွာဟချက်ကြောင့် ရောင်းချအခွင့်အလမ်းများ လွတ်သွားနိုင်သည်။"',
          desc: 'InfoScan သည် ဤပြဿနာကို ဖြေရှင်းပေးရန် ဒစ်ဂျစ်တယ်နည်းပညာဖြင့် သင့်ပြခန်းကို ၂၄ နာရီပတ်လုံး အဆင့်မြင့် ဝန်ဆောင်မှုပေးနိုင်ရန် ဖန်တီးထားပါသည်။'
        }
      },
      apiIntegration: {
        eyebrow: 'Developer Ready',
        h2: ['POS နှင့်', 'API ချိတ်ဆက်ခြင်း'],
        p: 'API Key တစ်ခုဖြင့် သင့် POS စနစ်နှင့် InfoScan ကို မိနစ်ပိုင်းအတွင်း ချိတ်ဆက်နိုင်သည်။ ဈေးနှုန်းနှင့် စာရင်းများ အလိုအလျောက် Sync ဖြစ်သည်။',
        features: [
          { title: 'API Key တစ်ချက်ဖြင့်', desc: 'Dashboard မှ API Key ထုတ်ယူပြီး မိနစ်ပိုင်းအတွင်း ချိတ်ဆက်ပါ။' },
          { title: 'Real-Time Sync', desc: 'POS တွင် ဈေးနှုန်းပြောင်းသည်နှင့် QR Code များ ချက်ချင်း အပ်ဒိတ်ဖြစ်သည်။' },
          { title: 'POS မည်သည့်အမျိုးအစားမဆို', desc: 'ကျော်ကြားသော POS Platform များနှင့် REST API မှတဆင့် Custom System များနှင့်လည်း ချိတ်ဆက်နိုင်သည်။' },
          { title: 'Webhook Events', desc: 'Scan ဖြစ်ချိန်၊ ဈေးနှုန်းပြောင်းချိန်နှင့် အခြား Event များကို အချိန်နှင့်တပြေးညီ သိရှိနိုင်သည်။' },
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
      apiIntegration: {
        eyebrow: 'Developer Ready',
        h2: ['POS &', 'API Integration'],
        p: 'Connect InfoScan to your existing POS system with a single API key. Pricing and inventory changes sync in real time — no manual work, no delays.',
        features: [
          { title: 'API Key in Seconds', desc: 'Generate your key from the dashboard and start integrating immediately. No approval process.' },
          { title: 'Real-Time Sync', desc: 'Update a price in your POS and every QR code in every branch reflects it instantly.' },
          { title: 'Any POS System', desc: 'Works with popular platforms or any custom system via our REST API.' },
          { title: 'Webhook Events', desc: 'Get notified on scan events, price updates, and inventory changes as they happen.' },
        ]
      },
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
              <img src="/logo.jpg" alt="InfoScan" className="h-8 w-auto object-contain" />
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#how-it-works" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{lang === 'EN' ? 'How It Works' : 'အသုံးပြုပုံ'}</a>
              <a href="#solutions" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{t.nav.solutions}</a>
              <Link to="/pricing" className="text-[10px] font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-[0.2em]">{t.nav.pricing}</Link>
            </div>

            <div className="flex items-center gap-4">
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
            {t.metrics.map((m, i) => {
              // Mobile (2-col): col 0 gets border-r, row 0 (items 0,1) gets border-b
              // Desktop (4-col): items 0,1,2 get border-r
              const borderR = i === 0 ? 'border-r border-orange-100'
                : i === 1 ? 'md:border-r border-orange-100'
                : i === 2 ? 'border-r border-orange-100'
                : ''
              const borderB = i < 2 ? 'border-b md:border-b-0 border-orange-100' : ''
              return (
              <div key={i} className={`py-8 px-6 text-center ${borderR} ${borderB}`}>
                <div className="text-3xl md:text-4xl font-bold text-brand-dark font-serif tracking-tighter">{m.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-2 leading-tight">{m.label}</div>
              </div>
              )
            })}
          </div>

        </div>

        {/* Workflow Demo Section */}
        <div className="mt-16 md:mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 uppercase tracking-tight font-serif">{t.workflow.h2}</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">{t.workflow.p}</p>
          </div>

          {/* Tab Bar */}
          <div className="mb-6">
            <div className="flex w-full bg-slate-100 p-1 gap-0.5 border border-slate-200">
              {(['manager', 'owner', 'customer'] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => handleTabChange(role)}
                  className={`relative flex-1 py-2.5 px-2 sm:px-8 text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.22em] transition-all duration-250 ${
                    activeWorkflowTab === role
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'text-slate-400 hover:text-brand-primary hover:bg-white/70'
                  }`}
                >
                  {t.workflow.tabs[role].label}
                  {activeWorkflowTab === role && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white/50" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-orange-400/20 blur-md pointer-events-none" />
            <div
              className="relative aspect-video bg-brand-dark border border-slate-700 shadow-2xl overflow-hidden"
              style={{ transition: 'opacity 180ms ease', opacity: videoFading ? 0 : 1 }}
            >
              <video
                ref={videoRef}
                key={activeWorkflowTab}
                src={`/demo-videos/${activeWorkflowTab}-demo.mov`}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tab description */}
          <div
            className="mt-6 text-center"
            style={{ transition: 'opacity 180ms ease', opacity: videoFading ? 0 : 1 }}
          >
            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-widest font-serif mb-1">
              {t.workflow.tabs[activeWorkflowTab].title}
            </h3>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              {t.workflow.tabs[activeWorkflowTab].desc}
            </p>
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

      {/* POS & API Integration Section */}
      <section id="api-integration" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 mb-6">
              <span className="size-1.5 bg-brand-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.25em]">{t.apiIntegration.eyebrow}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 uppercase tracking-tight font-serif">
              {t.apiIntegration.h2[0]} <span className="text-brand-primary italic">{t.apiIntegration.h2[1]}</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">{t.apiIntegration.p}</p>
          </div>

          {/* Video */}
          <div className="relative mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-orange-400/20 blur-md pointer-events-none" />
            <div className="relative aspect-video bg-brand-dark border border-orange-100 shadow-2xl overflow-hidden">
              <video
                src="/demo-videos/pos-integration-demo.mov"
                autoPlay
                controls
                playsInline
                loop
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-orange-100">
            {t.apiIntegration.features.map((f, i) => (
              <div key={i} className="p-6 md:p-8 bg-white">
                <div className="w-6 h-0.5 bg-brand-primary mb-4" />
                <h3 className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 font-serif">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4 uppercase tracking-tight font-serif">{t.howItWorks.h2}</h2>
            <p className="text-lg text-slate-500">{t.howItWorks.p}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-orange-100 bg-white/60">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className={`relative p-10 ${i < t.howItWorks.steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-orange-100' : ''}`}>
                {/* Step number */}
                <div className="text-[80px] font-bold text-brand-dark font-serif leading-none mb-6 select-none">{step.num}</div>
                {/* Orange accent line */}
                <div className="w-8 h-0.5 bg-brand-primary mb-6"></div>
                <h3 className="text-xl font-bold text-brand-dark uppercase tracking-widest mb-4 font-serif">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
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

      {/* Pricing CTA */}
      <section className="py-20 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 uppercase tracking-tight font-serif">
            {lang === 'EN' ? 'Ready to Get Started?' : 'စတင်ရန် အဆင်သင့်ဖြစ်ပြီလား?'}
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            {lang === 'EN' ? 'View our simple, transparent plans — from a single showroom to a multi-branch operation.' : 'ပြခန်းတစ်ခုမှသည် လုပ်ငန်းကြီးများအထိ ကျွန်ုပ်တို့၏ အစီအစဉ်များကို ကြည့်ပါ။'}
          </p>
          <Link to="/pricing">
            <Button size="lg" className="px-12 rounded-none">
              {lang === 'EN' ? 'View Pricing' : 'ဈေးနှုန်းများ ကြည့်ရန်'}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="InfoScan" className="h-6 w-auto object-contain opacity-70" />
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
