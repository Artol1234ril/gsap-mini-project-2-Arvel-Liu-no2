import gsap from "gsap"
import { useEffect, useRef } from "react"
import "../css/vertical.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Vertical() {
  const wrapperRef   = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const panel    = containerRef.current
    const wrapper  = wrapperRef.current
    const panels   = gsap.utils.toArray(".page", panel)
    const scrollAmount = panel.scrollWidth - window.innerWidth

    const masterTl = gsap.timeline()

    // ── horizontal slide — 1 duration unit per panel gap ──
    masterTl.to(panel, {
      x: -scrollAmount,
      ease: "none",
      duration: panels.length - 1,  // e.g. 4 for 5 panels
    })

    // ── per-panel text fade, inserted at the exact scroll position ──
    panels.forEach((p, i) => {
      const text = p.querySelector(".page-text")

      // fade IN when this panel arrives (at timeline position i)
      masterTl.fromTo(text,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        i           // ← panel 0 at t=0, panel 1 at t=1, etc.
      )

      // fade OUT just before leaving (all except last)
      if (i < panels.length - 1) {
        masterTl.to(text,
          { opacity: 0, y: -20, duration: 0.25, ease: "power2.in" },
          i + 0.65  // ← starts fading out near the end of this panel's window
        )
      }
    })

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: `+=${scrollAmount}`,
      pin: true,
      scrub: 1,
      animation: masterTl,
      anticipatePin: 1,
    })

    return () => {
      masterTl.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    <div className="hori-wrapper" ref={wrapperRef}>
      <div className="hori-container" ref={containerRef}>

        <div className="page page-1">
          <h1 className="page-text">Horizontal Scroll</h1>
          <p>This is the first page.</p>
          <img src="https://th.bing.com/th/id/OIP.9PrKZEHtg25BJUfCGOTIwwHaFa?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        </div>

        <div className="page page-2">
          <h1 className="page-text">Page 2</h1>
          <p>This is the second page.</p>
          <img src="https://th.bing.com/th/id/OIP.ICl8JcVGq9bq2sMQyc0WIwHaEx?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        </div>

        <div className="page page-3">
          <h1 className="page-text">Page 3</h1>
          <p>This is the third page.</p>
          <img src="https://th.bing.com/th/id/OIP.9PrKZEHtg25BJUfCGOTIwwHaFa?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        </div>

        <div className="page page-4">
          <h1 className="page-text">Page 4</h1>
          <p>This is the fourth page.</p>
          <img src="https://th.bing.com/th/id/OIP.ICl8JcVGq9bq2sMQyc0WIwHaEx?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        </div>

        <div className="page page-5">
          <h1 className="page-text">Page 5</h1>
          <p>This is the fifth page.</p>
          <img src="https://th.bing.com/th/id/OIP.9PrKZEHtg25BJUfCGOTIwwHaFa?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        </div>

      </div>
    </div>
  )
}