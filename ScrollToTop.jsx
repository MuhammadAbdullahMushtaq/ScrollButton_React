import React, { useEffect, useState } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const ScrollToTop = () => {

   const [show, setShow] = useState(false);

   const handleScroll = () => {
      window.scrollTo({top:0, left: 0, behavior: 'smooth'});
   }

   const listenScroll = () => {
      const top = 250;
      const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
      if (windowScroll > top) {
         setShow(true)
      }
      else{
         setShow(false)
      }
   }

   useEffect(() => {
      window.addEventListener( 'scroll', listenScroll );
      return () => window.removeEventListener( 'scroll', listenScroll )
   },[])

  return (
   <div onClick={handleScroll} className='hidden sm:flex justify-center fixed bottom-5 right-10 z-30'>
      {
         show && (
            <div className='bg-[#5651e5] rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-1000' >
               <HiOutlineChevronDoubleUp className='text-[#ECF0F3]' size={30} />
            </div>
         )
      }
   </div>
  )
}

export default ScrollToTop