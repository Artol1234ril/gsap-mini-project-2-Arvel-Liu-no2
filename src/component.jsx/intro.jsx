import gsap from "gsap"
import { useEffect } from "react"
import "../css/intro.css"
export default function Intro(){
    function animateIntro(){
        const tl = gsap.timeline()
        tl.fromTo(".heading", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1},0)
        .fromTo(".subtitle", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1,ease: "power3.out",stagger: 0.2}, ">")
        .fromTo(".one-intro", {x: -200, opacity: 0,rotate:5}, {x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2, rotate: 0},">")
        .fromTo(".two-intro", {y: -100, opacity: 0,rotate: 5}, {y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2, rotate: 0}, ">")
        .fromTo(".three-intro", {x: 200, opacity: 0, rotate: 5}, {x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2, rotate: 0}, ">")
        .fromTo(".four-intro", {y: -200, opacity: 0, rotate: 5}, {y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2, rotate: 0}, ">")
        .fromTo(".box-intro",{y:10, stagger: 0.2},{y:0,yoyo: true, duration: 1, ease: "power2.inOut", stagger: 0.2,repeat: -1}, ">")
    }
    useEffect(()=>{
        animateIntro()
    },[])
    return(
        <div className="intro-main">
            <div className="intro-content">
                <h1 className="heading">Welcome to my Website</h1>
                <p className="subtitle">Discover my work and skills</p>
            </div>
            <div className="box-intro">
                <div className="box-intros one-intro"></div>
                <div className="box-intros two-intro"></div>
                <div className="box-intros three-intro"></div>
                <div className="box-intros four-intro"></div>
            </div>

        </div>
    )
}