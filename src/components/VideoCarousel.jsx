import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, replayImg, playImg } from "../utils";

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
  
  useGSAP(() => {
    gsap.to('#video',{
      scrollTrigger:{
        trigger: '#video',
        toggleActions:'restart none none none'
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }))
      }

    })
  },[isEnd, videoId])

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

  const handleLoadedMetaData = (i,e) => setLoadedData(
    (pre) => [...pre, e]  )

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

  const handleProcess = (type, i) => {
    switch(type){
      case 'video-end':
        setVideo((pre) => ({...pre, isEnd:true,
          videoId: i + 1}))
          break;
      case 'video-reset':
        setVideo((pre) => ({...pre, isLastVideo:false,
          videoId: i - i}))
          break;
      case 'video-last':
        setVideo((pre) =>({
          ...pre, isLastVideo:true}))
          break;

      case 'play':
        setVideo((pre) =>({
          ...pre, isPlaying: !pre.isPlaying}))
          break;

      default: return video
    }
  } 

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

                  ref={(el) => (videoRef.current[index] = el)}
                  onPlay={()=>{setVideo((prevVideo) =>({...prevVideo, isPlaying:true}))}}
                  onLoadedMetaData= {(e) =>
                    handleLoadedMetaData(index, e)}
                  className="w-full h-full">
                </video>
                <div className="absolute top-12 left-[5%] opacity-50 z-10">
                  {list.textLists.map((text,index) =>{
                    return(
                      <p id={index} className="md:text-2xl font-medium text-xl ">
                        {text}</p>)
                  })}
                </div>
              </div>
            </div>
          </div>
        )
        })}
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
            {videoRef.current.map((_,i) => (
              <span
                key={i}
                ref={(el) => (videoDivRef.current[i] = el)}
                className="mx-2 w-3 h-3 bg-gray-200 rounded-full cursor-pointer">
                  <span ref={(el) => (videoSpanRef.current[i] = el)}
                className="absolute h-full w-full rounded-full"/>
              </span>
            ))}
        </div>
        <button className="control-btn">
            <img src={isLastVideo ? replayImg:
              !isPlaying ? playImg : pauseImg} 
              alt={isLastVideo? 'replay' :
                !isPlaying ? 'play' : 'pause'}
              onClick={isLastVideo 
                ? () => handleProcess('video-reset')
                :!isPlaying
                  ? () => handleProcess('play')
                  : () => handleProcess('pause')
              }
            />
        </button>
      </div>
    </div>
  )
};

export default VideoCarousel;
