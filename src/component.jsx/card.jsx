import { useEffect } from "react"
import "../css/card.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Card(){

    function animateCard(){

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".Card-container",

                start: "top 85%",
                end: "top ",

                scrub: true,
                toggleActions: "play none none reverse",
                markers: true,  

                invalidateOnRefresh: true,
                fastScrollEnd: true,
            }
        })

        tl.fromTo(
            ".c1",
            {
                y: 120,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        )

        .fromTo(
            ".c2",
            {
                y: 120,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            },
            1
        )

        .fromTo(
            ".c3",
            {
                y: 120,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            },
            1.5
        )

        .fromTo(
            ".c4",
            {
                y: 120,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            },
            2
        )
    }

    useEffect(() => {

        animateCard()

    }, [])

    return(
        <div className="card-main">
            <h1>Card Component</h1>

            <div className="Card-container">

                <div className="Card c1">Card 1</div>

                <div className="Card c2">Card 2</div>

                <div className="Card c3">Card 3</div>

                <div className="Card c4">Card 4</div>

            </div>
        </div>
    )
}