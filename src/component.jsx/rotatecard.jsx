import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/rotatecard.css';

gsap.registerPlugin(ScrollTrigger);
export default function Rotatecard() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Select all cards inside the container
      const cards = gsap.utils.toArray('.story-card');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`, 
          pin: true,
          scrub: 1,
        }
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(cards[i - 1], {
          scale: 0.8,
          opacity: 0,
          duration: 1,
        }, i - 1)
        .fromTo(card, 
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1 },
          i - 0.6 
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="story-section" ref={containerRef}>
      <div className="cards-wrapper">
        
        {/* Card 1 */}
        <div className="story-card bg-red">
          <div className="card-content">
            <h2>The Vision</h2>
            <p>We start with a blank canvas and a bold idea to change the world.</p>
            <button className="card-btn">Explore Concept</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="story-card bg-blue">
          <div className="card-content">
            <h2>The Execution</h2>
            <p>Turning dreams into reality requires precision, grit, and 2am coffee.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="story-card bg-purple">
          <div className="card-content">
            <h2>The Impact</h2>
            <p>Our solutions scale with the speed of thought, reaching millions globally.</p>
            <button className="card-btn">See Results</button>
          </div>
        </div>

      </div>
    </section>
  );
};

