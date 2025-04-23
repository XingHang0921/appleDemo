import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {smallHeroVideo, heroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"


const Hero = () => {
  const [video, setVideo] = useState(
    window.innerWidth > 780? heroVideo : smallHeroVideo)
  const handleSetVideo = ()=>{
    if (window.innerWidth < 780)
      setVideo(smallHeroVideo)
    else
      setVideo(heroVideo)
  }
  useEffect(() =>{
    window.addEventListener('resize', handleSetVideo)
    return () =>{
      window.removeEventListener('resize', handleSetVideo)
    }
  })

  useGSAP( ()=>{
    gsap.fromTo('#heroTxt', {opacity: 0},{opacity:1, delay:1.5})
    gsap.from('#heroBuy', {y:200, delay:1.5})
  }, [])

  return (
    <div className="relative items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold " id='heroTxt'>
                iPhone 15 Pro
            </h1>
          <video src={video}
            autoPlay muted playsInline></video>
          <button id='heroBuy'className="py-2 px-4 rounded-full bg-blue"> Buy </button>
          <p id='heroBuy'className="pt-4 font-medium">From $199/month or $999</p>

        </div>
        <VideoCarousel/>
    </div>
  )
}

export default Hero