import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import "../css/center.css";
gsap.registerPlugin(ScrollTrigger);
export default function Center(){
useEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container-main",
        start: "top top",
        end: "+=1000",
        toggleActions: "play none reverse reverse",
        pin: true,
        markers: true,
        scrub: 1,
      },
    });

    tl.to(".center-text", { opacity: 1, y: 0, duration: 1, color: "white" })
    .fromTo(
      ".center-btn",{color: "black", backgroundColor: "white"},
      { backgroundColor: "black", color: "white", duration: 0.5 },
      "-=0.5" 
    )   .fromTo(
      ".main-container-main",
      { backgroundColor: "black" },
      { backgroundColor: "white", duration: 1.5} )    
      .fromTo(
      ".Container-center",
      { y: 50,backgroundColor: "white"},
      { y: 0, opacity: 1, duration: 1,backgroundColor: "black" },
      "-=0.5" 
    ) .to(".center-subtext",
      { opacity: 1, y: 0, duration: 0.5, color: "white" },
      "-=0.5" 
    )  
.to(".Center-text",
      { color: "black",opacity: 1, y: -150, duration: 0.5, fontSize: "2.5rem" },
      "+=0.5" )

  });

  return () => ctx.revert(); // Cleanup prevents memory leaks and double-triggers
}, []);

    return(
        <div className="main-container-main">
            <div className="Container-center">
                <h1 className="Center-text">Center Component</h1>
                <p className="center-subtext">This content will animate into view as you scroll.</p>
                <button className="center-btn">Click Me</button>
            </div>
        </div>
    )
}