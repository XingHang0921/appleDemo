import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
// import { useEffect, useRef, useState } from "react";

import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
// import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId:0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [isEnd, startPlay, videoId, isLastVideo, isPlaying] = video;
  
  const [loadedData,setLoadedData] = useState([])
  useEffect(() =>{
    if(loadedData.length > 3){
      if(!isPlaying){
        videoRef.current[videoId].pasue();
      }
      else
      {
        startPlay && videoRef.current[videoId].play();
      }
    }
  },[startPlay, videoId, isPlaying, loadedData])

  useEffect(() =>{
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[videoId]){
      //
      let anim = gsap.to(span[videoId],{
        onUpdate:() =>{

        },
        onComplete:() =>{

        }
      })
    }
  },[videoId, startPlay])
  return (
    <div className="flex items-center">
      {hightlightsSlides.map((list, index) => {
        return(
          <div key={list.id} id='slider' 
            className="sm:pr-20 pr-10">
            <div className="relative w-[88vw] h-[35vh] 
                            md:h-[70vh] sm:h-[50vh]  sm:w-[70vw]">
              <div className="w-full h-full flex-center overflow-hidden rounded-3xl  bg-black">
                <video src={list.video} key={index}  
                  playsInline muted preload="auto" video={list.video} type="video/mp4"
                  className="w-full h-full">
                </video>
                <div className="absolute top-12 left-[5%] opacity-50 z-10">
                  {list.textLists.map((text,index) =>{
                    return(
                      <p id={index} className="md:text-2xl font-medium text-xl ">
                        {text}</p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
        })}
    </div>
  )
};

export default VideoCarousel;
