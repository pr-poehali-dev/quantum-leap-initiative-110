import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PandaVapeLandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const marqueeRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const desireRef = useRef<HTMLElement>(null)
  const instigateRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps
    let currentProgress = 0

    const timer = setInterval(() => {
      currentProgress += increment
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
        }, 200)
      }
      setProgress(currentProgress)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current.querySelector(".marquee-content")
        if (marqueeContent) {
          const marqueeWidth = marqueeContent.scrollWidth / 2

          gsap.to(marqueeContent, {
            x: -marqueeWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
          })
        }
      }

      gsap.from(heroRef.current?.querySelector(".hero-content"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(heroRef.current?.querySelector(".hero-image"), {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelector(".benefits-title"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelectorAll(".benefit-card"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-image"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-content"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelector("h2"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelectorAll(".desire-image"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-content"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-image"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-content"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-image"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(pricingRef.current?.querySelectorAll(".pricing-card"), {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(ctaRef.current?.querySelector(".cta-box"), {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#060A14]">
          <div className="flex flex-col items-center gap-8 px-6">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://cdn.poehali.dev/files/6ce55570-f7eb-4189-8a33-0fff0f475036.jpg"
                alt="Panda Vape"
                className="h-24 w-24 object-contain"
              />
              <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
                PANDA
                <span className="block text-[#3B9EFF]">VAPE</span>
              </h1>
            </div>

            <div className="w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#0D1A2E]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1A4A8A] to-[#3B9EFF] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#CCCCCC]">{Math.round(progress)}%</p>
            </div>
          </div>
        </div>
      )}

      <main className="w-full overflow-x-hidden bg-[#060A14]">
        {/* Marquee */}
        <div ref={marqueeRef} className="w-full overflow-hidden bg-[#1A3A6B] py-4">
          <div className="marquee-content flex items-center gap-4 whitespace-nowrap">
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: PANDA10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: PANDA10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                БЕСПЛАТНАЯ ДОСТАВКА ОТ 3000 Р
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: PANDA10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>

            {/* Duplicated set for seamless loop */}
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: PANDA10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: PANDA10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                БЕСПЛАТНАЯ ДОСТАВКА ОТ 3000 Р
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: PANDA10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-[600px] w-full items-center justify-center px-6 py-16 md:min-h-[800px] md:px-20 md:py-24 lg:min-h-[1030px] lg:px-80"
          style={{
            backgroundImage: `radial-gradient(74.86% 63.04% at 50% 71.13%, rgba(6, 10, 20, 0) 0%, #060A14 100%), linear-gradient(190.21deg, rgba(6, 10, 20, 0) 48.79%, #060A14 91.19%), radial-gradient(ellipse at center, #0A1830 0%, #060A14 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Neon glow effect */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-[#3B9EFF] opacity-5 blur-[120px]" />
          </div>

          <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:gap-12 lg:gap-14">
            <div className="hero-content flex flex-col items-center gap-5 text-center">
              <div className="mb-2 flex items-center gap-3">
                <img
                  src="https://cdn.poehali.dev/files/6ce55570-f7eb-4189-8a33-0fff0f475036.jpg"
                  alt="Panda Vape Logo"
                  className="h-16 w-16 object-contain md:h-20 md:w-20"
                />
              </div>
              <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
                Твой стиль.
                <span className="block text-[#3B9EFF]">Твой вкус.</span>
              </h1>
              <p className="max-w-4xl text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Премиальные вейп-устройства и жидкости Panda Vape — яркие вкусы, безупречное качество, стиль который говорит за себя.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Button className="h-12 rounded-xl bg-[#3B9EFF] px-6 font-serif text-base text-white hover:bg-[#3B9EFF]/90 md:text-lg">
                  Выбрать устройство
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#3B9EFF]/50 bg-transparent font-serif text-base text-white hover:bg-[#3B9EFF]/10 md:text-lg"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="hero-image relative h-[300px] w-full max-w-2xl md:h-[400px] lg:h-[583px] lg:max-w-[884px]">
              <img
                src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/5d445b8a-39f5-4390-871e-a08e68f9cc9a.jpg"
                alt="Panda Vape - премиальные устройства"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <div className="benefits-title flex flex-col gap-6 lg:flex-1">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Качество, которое чувствуется с первой затяжки
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Panda Vape — это не просто устройство. Это опыт, который превращает каждый момент в удовольствие. Мы выбираем только лучшее для тебя.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-1">
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#1A3A6B] to-[#060A14] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">Сертифицированное качество</h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Все устройства и жидкости проходят строгий контроль качества и соответствуют международным стандартам.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#1A3A6B] to-[#060A14] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Богатая палитра вкусов
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Более 50 вкусов — от фруктовых до освежающих ментоловых. Найди свой идеальный вкус в линейке Panda Vape.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#1A3A6B] to-[#060A14] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Длительное время работы
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Мощные аккумуляторы и эффективные испарители обеспечивают долгое время работы без подзарядки.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="about-image w-full lg:flex-1">
              <img
                src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/d20ad638-2230-4da4-98df-b62ded762667.jpg"
                alt="Panda Vape коллекция"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="about-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                О бренде Panda Vape
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Panda Vape — бренд, созданный для тех, кто ценит стиль и качество. Мы тщательно отбираем каждое устройство и каждую жидкость, чтобы ты получил только лучшее. Наша миссия — сделать каждую затяжку незабываемой. От минималистичных под-систем до мощных боксмодов — у нас есть всё для твоего идеального вейпинга.
              </p>
              <Button className="h-12 w-full rounded-[20px] bg-gradient-to-r from-[#1A3A6B] to-[#3B9EFF] font-serif text-lg text-white hover:opacity-90 md:text-xl">
                Перейти в каталог
              </Button>
            </div>
          </div>
        </section>

        {/* Desire */}
        <section ref={desireRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[40px] border-2 border-[#1A3A6B] bg-[#060A14] px-6 py-12 md:px-12 md:py-16 lg:px-24">
              <h2 className="mb-8 text-balance text-center font-serif text-3xl leading-tight tracking-tight text-white md:mb-12 md:text-4xl lg:text-[56px]">
                Найди свой идеальный вейп в любой момент
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                <div className="desire-image overflow-hidden rounded-2xl rounded-b-none">
                  <img
                    src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/5d445b8a-39f5-4390-871e-a08e68f9cc9a.jpg"
                    alt="Panda Vape устройство"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="desire-image overflow-hidden rounded-2xl rounded-b-none">
                  <img
                    src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/d20ad638-2230-4da4-98df-b62ded762667.jpg"
                    alt="Panda Vape коллекция"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="desire-image overflow-hidden rounded-2xl">
                  <img
                    src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/a4ac82d6-47c1-4acb-8371-5ed82fe3c0a5.jpg"
                    alt="Panda Vape ассортимент"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instigate */}
        <section ref={instigateRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-12">
            <div className="instigate-content flex flex-col gap-6 text-center">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-[56px]">
                Чего ты ждёшь?
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Жизнь слишком коротка для скучных устройств. Panda Vape — это твой стиль, твой вкус, твоя история. Не соглашайся на меньшее.
              </p>
            </div>
            <div
              className="instigate-image relative flex min-h-[400px] w-full items-end justify-center rounded-[40px] p-6 md:min-h-[600px] md:p-10 lg:min-h-[850px]"
              style={{
                backgroundImage: `url(https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/a4ac82d6-47c1-4acb-8371-5ed82fe3c0a5.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-[#060A14] via-transparent to-transparent" />
              <Button className="relative z-10 h-16 w-full max-w-md rounded-[20px] bg-gradient-to-r from-[#1A3A6B] to-[#3B9EFF] font-serif text-xl text-white hover:opacity-90 md:h-24 md:text-3xl lg:text-[32px]">
                Выбрать сейчас
              </Button>
            </div>
          </div>
        </section>

        {/* Why */}
        <section ref={whyRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-12">
            <div className="why-content flex flex-col gap-6 text-center">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-[56px]">
                Почему выбирают Panda Vape?
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Потому что мы не просто продаём устройства — мы создаём культуру. Каждый продукт в нашей линейке — это сочетание стиля, надёжности и удовольствия.
              </p>
            </div>
            <div className="why-image w-full">
              <img
                src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/d20ad638-2230-4da4-98df-b62ded762667.jpg"
                alt="Почему выбирают Panda Vape"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section ref={pricingRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Card 1 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0D1A2E] to-[#060A14] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#0D1A2E]">
                <img
                  src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/5d445b8a-39f5-4390-871e-a08e68f9cc9a.jpg"
                  alt="Panda Vape Pod"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Panda Vape Pod
                </h3>
                <p className="text-sm text-white/55 md:text-base">Стартовый набор</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">1 990 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 3 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#3B9EFF] text-base font-medium text-white hover:bg-[#3B9EFF]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>

            {/* Card 2 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-[#3B9EFF]/30 bg-gradient-to-br from-[#0D1A2E] to-[#060A14] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#0D1A2E]">
                <img
                  src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/d20ad638-2230-4da4-98df-b62ded762667.jpg"
                  alt="Panda Vape Kit"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Panda Vape Kit
                </h3>
                <p className="text-sm text-white/55 md:text-base">Устройство + 3 картриджа</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">3 490 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 4 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#3B9EFF] text-base font-medium text-white hover:bg-[#3B9EFF]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>

            {/* Card 3 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0D1A2E] to-[#060A14] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#0D1A2E]">
                <img
                  src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/a4ac82d6-47c1-4acb-8371-5ed82fe3c0a5.jpg"
                  alt="Panda Vape жидкости набор"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Набор жидкостей Panda
                </h3>
                <p className="text-sm text-white/55 md:text-base">5 вкусов × 30 мл</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">2 750 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 3 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#3B9EFF] text-base font-medium text-white hover:bg-[#3B9EFF]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>

            {/* Card 4 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0D1A2E] to-[#060A14] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#0D1A2E]">
                <img
                  src="https://cdn.poehali.dev/projects/53683154-d19b-4d34-b3e3-cafe66d54a93/files/5d445b8a-39f5-4390-871e-a08e68f9cc9a.jpg"
                  alt="Panda Vape Pro"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Panda Vape Pro
                </h3>
                <p className="text-sm text-white/55 md:text-base">Мощный боксмод + танк</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">7 900 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 6 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#3B9EFF] text-base font-medium text-white hover:bg-[#3B9EFF]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="cta-box flex flex-col items-center gap-6 rounded-[20px] bg-gradient-to-r from-[#1A3A6B] to-[#3B9EFF] p-6 md:flex-row md:gap-8 md:p-12 lg:p-16">
              <p className="flex-1 text-balance text-center font-semibold leading-tight tracking-tight text-white md:text-left md:text-2xl lg:text-[26px]">
                Свяжитесь с нами и получите персональную консультацию по выбору устройства Panda Vape!
              </p>
              <Button className="h-12 w-full rounded-xl bg-[#060A14] text-base text-white hover:bg-[#060A14]/90 md:w-auto md:px-8 md:text-lg">
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#1A3A6B] px-6 py-12 md:px-20 lg:px-[420px]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/6ce55570-f7eb-4189-8a33-0fff0f475036.jpg"
                alt="Panda Vape"
                className="h-10 w-10 object-contain"
              />
              <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">
                PANDA <span className="text-[#3B9EFF]">VAPE</span>
              </h2>
            </div>
            <p className="text-center text-sm leading-relaxed tracking-tight text-white/55 md:text-base">
              2025 - Panda Vape. Все права защищены.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
