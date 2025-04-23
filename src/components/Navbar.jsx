import { appleImg, bagImg, searchImg } from '../utils';
import {navLists} from '../constants'


const navImg = [bagImg, searchImg]
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px:5 flex
                       items-center'>
        <nav className='flex w-full max-w-[1120px] mx-auto relative justify-between'>
            <img src={appleImg} className='ml-5'
                alt="Apple" width={14} height={18}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <div key = {nav} className='px-5 text-sm cursor-pointer 
                                    text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>
            <div className='flex justify-end max-sm:flex-1'>
                {navImg.map((img, index) =>(
                    <img src={img} alt={img} width={14} height={18}
                    className={index === navImg.length - 1? 'ml-7 mr-5':''}/>
                ))}
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar