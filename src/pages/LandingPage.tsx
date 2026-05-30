import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'

import { Modal } from '@/components/ui/Modal'

type Language = 'EN' | 'MY'

export function LandingPage() {
  const [lang, setLang] = useState<Language>('MY')
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'customer' | 'manager' | 'owner'>('customer')
  const [workflowPlaying, setWorkflowPlaying] = useState(false)
  const workflowVideoRef = useRef<HTMLDivElement>(null)

  const content = {
    MY: {
      nav: { features: 'လုပ်ဆောင်ချက်များ', solutions: 'အဖြေများ', pricing: 'ဈေးနှုန်း', demo: 'Demo ကြည့်ရန်' },
      hero: {
        h1: ['သင့်ပြခန်းကို', 'ဒစ်ဂျစ်တယ်', 'ပြောင်းလဲပါ'],
        p: 'AI နည်းပညာဖြင့် သုံးစွဲသူများကို ဝန်ဆောင်မှုပေးပြီး ပစ္စည်းစာရင်းများကို အချိန်နှင့်တပြေးညီ ထိန်းချုပ်ပါ။ မည်သည့် App မှ Install လုပ်ရန် မလိုပါ။',
        cta1: 'စတင်အသုံးပြုရန်',
        cta2: 'ဗီဒီယိုကြည့်ရန်'
      },
      video: { playing: 'Demo Video Playing', desc: 'သင့်လုပ်ငန်း၏ ထုတ်ကုန်မိတ်ဆက်ဗီဒီယိုကို ဤနေရာတွင် ပြသပါမည်။', replay: 'Replay intro', click: 'Click to Play Demo Video' },
      workflow: {
        h2: 'Workflow ဗီဒီယိုများ',
        p: 'အသုံးပြုသူအမျိုးအစားအလိုက် InfoScan ၏ လုပ်ဆောင်ပုံကို ကြည့်ရှုပါ။',
        tabs: {
          customer: { label: 'Customer', title: 'ဝယ်ယူသူ အတွေ့အကြုံ', desc: 'QR Code scan ဖတ်ပြီး ပစ္စည်းအချက်အလက်များ၊ AI နှိုင်းယှဉ်ချက်များနှင့် အကြံပြုချက်များကို ချက်ချင်းကြည့်ရှုပါ။' },
          manager: { label: 'Manager', title: 'မန်နေဂျာ ထိန်းချုပ်မှု', desc: 'ဈေးနှုန်းများပြောင်းလဲခြင်း၊ QR codes ထုတ်ယူခြင်းနှင့် ပစ္စည်းစာရင်း စီမံခန့်ခွဲခြင်းတို့ကို လွယ်ကူစွာ ဆောင်ရွက်ပါ။' },
          owner: { label: 'Owner', title: 'ပိုင်ရှင် ခြုံငုံသုံးသပ်မှု', desc: 'ဆိုင်ခွဲအားလုံး၏ Analytics၊ scan အရေအတွက်များနှင့် လုပ်ငန်းအခြေအနေကို တစ်နေရာတည်းမှ ကြည့်ရှုပါ။' }
        },
        play: 'ဗီဒီယိုကြည့်ရန်'
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
          { title: "Premium Electronics", desc: "ရှုပ်ထွေးသော အချက်အလက်များနှင့် ဈေးနှုန်းပြောင်းလဲမှုများကို AI ဖြင့် ထိန်းချုပ်ပါ။" },
          { title: "Automotive Showrooms", desc: "ကားအမျိုးအစား နှိုင်းယှဉ်ချက်များနှင့် စမ်းသပ်မောင်းနှင်မှုများကို စီစဉ်ပါ။" },
          { title: "Luxury Furnishing", desc: "ပစ္စည်းအမျိုးအစား၊ အရွယ်အစားနှင့် မှာယူမှုများကို အသေးစိတ် ဖော်ပြပါ။" }
        ],
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
        h1: ['Transform Your', 'Showroom Into', 'Digital'],
        p: 'Empower customers with AI-driven insights and give your staff real-time inventory precision. No app download required.',
        cta1: 'Get Early Access',
        cta2: 'Watch Demo Video'
      },
      video: { playing: 'Demo Video Playing', desc: 'This is where your professional product walk-through video will reside.', replay: 'Replay intro', click: 'Click to Play Demo Video' },
      workflow: {
        h2: 'Workflow Demos',
        p: 'See how InfoScan works for each user role in your showroom.',
        tabs: {
          customer: { label: 'Customer', title: 'Customer Experience', desc: 'Scan a QR code to instantly access product specs, AI-powered comparisons, and unbiased recommendations.' },
          manager: { label: 'Manager', title: 'Manager Controls', desc: 'Update pricing across branches in seconds, generate QR codes, and manage inventory with ease.' },
          owner: { label: 'Owner', title: 'Owner Overview', desc: 'View analytics across all branches, track scan volumes, and monitor business performance from one dashboard.' }
        },
        play: 'Play Video'
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
        h2: ['Tailored for', 'High-Impact Retail'],
        p: 'Whether you sell cutting-edge gadgets or bespoke luxury goods, InfoScan adapts to your showroom\'s unique flow.',
        items: [
          { title: "Premium Electronics", desc: "Complex specs, rapid price changes, and technical Q&A handled by AI." },
          { title: "Automotive Showrooms", desc: "Interactive trim comparisons, availability tracking, and test-drive scheduling." },
          { title: "Luxury Furnishing", desc: "Deep dives into materials, dimensions, and custom order options." }
        ],
        challenge: {
          title: 'The Challenge',
          quote: '"Traditional showrooms suffer from information asymmetry. Customers want deep data instantly, but sales staff are often overstretched."',
          desc: 'InfoScan solves this by digitizing the physical unit, providing a 24/7 AI-powered digital twin of your inventory.'
        }
      },
      pricing: {
        h2: 'Simple, Transparent Plans',
        p: 'Choose the perfect plan for your showroom scale.',
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

  const scrollToVideo = () => {
    document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' })
    setIsPlaying(true)
  }

  return (
    <div className={`min-h-screen flex flex-col selection:bg-brand-primary selection:text-white ${lang === 'MY' ? 'font-sans' : 'font-sans'}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="InfoScan Logo" className="h-10 w-auto" />
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
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
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-brand-dark mb-8 leading-[1.05] uppercase">
            {t.hero.h1[0]} <br />
            <span className="text-brand-primary font-serif">{t.hero.h1[1]}</span> {t.hero.h1[2]}
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
            {t.hero.p}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <Button size="lg" className="px-12 rounded-none" onClick={() => setShowDemoModal(true)}>{t.hero.cta1}</Button>
            <Button variant="secondary" size="lg" className="px-12 rounded-none" onClick={scrollToVideo}>{t.hero.cta2}</Button>
          </div>

          <div id="video-demo" className="relative max-w-5xl mx-auto group" onClick={() => setIsPlaying(true)}>
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-orange-400 opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video bg-brand-dark border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center cursor-pointer">
              {isPlaying ? (
                <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest font-serif">{t.video.playing}</h3>
                  <p className="text-slate-400 max-w-sm">{t.video.desc}</p>
                  <Button variant="ghost" className="mt-6 text-slate-400" onClick={(e) => { e.stopPropagation(); setIsPlaying(false) }}>{t.video.replay}</Button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="size-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto border border-brand-primary/30 group-hover:scale-110 transition-transform">
                    <div className="size-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-brand-primary ml-2"></div>
                  </div>
                  <p className="text-slate-400 font-medium uppercase tracking-[0.2em] text-[10px]">{t.video.click}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Demo Workflow Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 uppercase tracking-tight font-serif">{t.workflow.h2}</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">{t.workflow.p}</p>
          </div>

          <div className="relative flex flex-col lg:flex-row gap-0" ref={workflowVideoRef}>
            {/* Video Player Area */}
            <div className="flex-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-orange-400/20 blur-sm"></div>
              <div
                className="relative aspect-video bg-brand-dark border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center cursor-pointer"
                onClick={() => setWorkflowPlaying(true)}
              >
                {workflowPlaying ? (
                  <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest">
                        {t.workflow.tabs[activeWorkflowTab].label}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-widest font-serif">
                      {t.workflow.tabs[activeWorkflowTab].title}
                    </h3>
                    <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                      {t.workflow.tabs[activeWorkflowTab].desc}
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-6 text-slate-400"
                      onClick={(e) => { e.stopPropagation(); setWorkflowPlaying(false) }}
                    >
                      {t.video.replay}
                    </Button>
                  </div>
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
              {(['customer', 'manager', 'owner'] as const).map((role) => (
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
              <input required type="email" className="w-full px-4 py-2 rounded-none border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-sans" placeholder={lang === 'MY' ? 'kyaw@showroom.com' : 'kyaw@showroom.com'} />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1 uppercase tracking-widest">{t.modal.showroom}</label>
              <input required type="text" className="w-full px-4 py-2 rounded-none border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-sans" placeholder={lang === 'MY' ? 'TechZone Showroom' : 'TechZone Showroom'} />
            </div>
            <Button fullWidth size="lg" className="mt-4 rounded-none">{t.modal.submit}</Button>
          </form>
        )}
      </Modal>



      {/* Solutions Section */}
      <section id="solutions" className="py-32 bg-brand-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-8 uppercase tracking-tight font-serif">{t.solutions.h2[0]} <br /><span className="text-brand-primary italic">{t.solutions.h2[1]}</span></h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t.solutions.p}
              </p>
              
              <div className="space-y-8">
                {t.solutions.items.map((item, i) => (
                  <div key={i} className="group border-l-2 border-slate-200 pl-6 hover:border-brand-primary transition-colors">
                    <h4 className="font-bold text-brand-dark group-hover:text-brand-primary transition-colors uppercase text-sm tracking-widest font-serif">{item.title}</h4>
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
            <img src="/logo.jpg" alt="InfoScan Logo" className="h-8 w-auto" />
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
