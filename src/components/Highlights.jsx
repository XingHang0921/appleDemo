import VideoCarousel from "./VideoCarousel"
import { watchImg, rightImg } from "../utils"
const Highlights = () => {
  const highlightTag = ['Watch the Film', 'Watch the Event']
  return (
    <div className="bg-zinc w-screen h-full overfollow-hidden flex-col">
      <h1 className="pl-10 pt-20 text-4xl font-extralight">Get the HighLights</h1>
      <div className="flex mt-5 ml-16 mb-8">
        {highlightTag.map((tag, index) =>{
          return(
            <a key={index} href={tag} className={index === 1? 'flex items-center pl-5':
                                                              'flex items-center'}>
              {tag}
              <img src={index === 0? watchImg : rightImg} 
                    alt={index === 0? watchImg : rightImg} 
                    className="ml-2"/>
            </a>
          )
        })}
      </div>
      <VideoCarousel/>
    </div>
  )
    
  
}

export default Highlights