import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import "../css/count.css"

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { icon: "📁", target: 120, suffix: "+", label: "Projects Delivered", sub: "across 12 industries" },
  { icon: "🤝", target: 80,  suffix: "+", label: "Happy Clients",      sub: "worldwide partnerships" },
  { icon: "⭐", target: 98,  suffix: "%", label: "Satisfaction Rate",  sub: "based on client reviews" },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardsRef   = useRef([])
  const ctaRef     = useRef(null)
  const countRefs  = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. header fade in ──────────────────────────────────────────
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      })

      // ── 2. cards fade in with stagger ─────────────────────────────
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          once: true,
        },
      })

      countRefs.current.forEach((el, i) => {
        const obj = { val: 0 }

        gsap.to(obj, {
          val: STATS[i].target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val)
          },
          scrollTrigger: {
            trigger: cardsRef.current[i],
            start: "top 80%",
            once: true,
          },
        })
      })

      // ── 4. cta fade in ────────────────────────────────────────────
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          once: true,
        },
      })

      // ── 5. background gradient drift ─────────────────────────────
      gsap.to(".stats-bg-orb-a", {
        x: 80, y: 60, scale: 1.15,
        duration: 12,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".stats-bg-orb-b", {
        x: -60, y: -40, scale: 1.1,
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>

      {/* animated background orbs */}
      <div className="stats-bg">
        <div className="stats-bg-orb-a" />
        <div className="stats-bg-orb-b" />
      </div>

      {/* header */}
      <div className="stats-header" ref={headerRef}>
        <p className="stats-eyebrow">By the numbers</p>
        <h2 className="stats-title">
          Results that <br />
          <span>speak for themselves</span>
        </h2>
      </div>

      {/* cards */}
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-card"
            ref={el => cardsRef.current[i] = el}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">
              <span ref={el => countRefs.current[i] = el} className="stat-count">0</span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-sublabel">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* cta */}
      <div className="stats-cta" ref={ctaRef}>
        <button className="cta-btn">
          Start a project <span className="cta-arrow">→</span>
        </button>
      </div>

    </section>
  )
}