function Hero() {
    return (
        <>
            <div className=' w-full  h-80 relative flex justify-center items-center bg-yellow-200'>

                <img src="/images/jjr.jpeg" alt=".." className=' w-full h-80' />
                <div className=' absolute gap-3 text-white flex flex-col justify-center items-center'>
                    <p className=' text-5xl font-bold'>BLOG</p>
                    <p className=' animate-bounce'>Express Your Thoughts !</p>
                </div>
            </div>

        </>
    )
}
  
export default Hero