import React, { useRef } from 'react'

const Hero = () => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
  return (
    <section className='flex flex-col justify-end min-h-screen'>
        <div ref={contextRef}>
            <div
            style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%"}}
            >
                <div
                ref={headerRef}
                className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
                    <p>404 No Bugs Found</p>

                    <div className='px-10'>
                        <h1 className='flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive  
                        sm:gap-16 md:block
                        '>Deepak Chhantyal</h1>
                    </div>
                </div>
            </div>
            <div className='relative px-10 text-black'>

            </div>
        </div>
    </section>
  )
}

export default Hero
