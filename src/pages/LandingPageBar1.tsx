import BlurText from "../components/BlurText"

const LandingPageBar1 = () => {
  return (
    <div data-scroll data-scroll-speed="0.1" className='flex flex-col md:grid bg-[#FAF4F0] rounded-3xl p-8 m-8 -mt-10 md:mt-8 grid-cols-3 '>
        <div className="flex justify-center items-center max-md:border-b-2 md:border-r-2 border-black pb-4">
            <img src="/small_img1.webp" className="rounded-full border-2 border-black"  alt="" />
        </div>
        <div className="text-4xl text-center font-semibold text-black flex flex-col justify-center items-center max-md:border-b-2 p-2 pb-4 md:border-r-2 border-black">
            <div className="font-light">
                MEET SONY BOOM
            </div>
            <div className="">
                <BlurText
                    text="Hear how sound should sound "
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl flex justify-center"
                />
            </div>
        </div>
        <div className="flex justify-center items-center p-2 pt-4">
            <img src="/small_img2.jpeg" className="rounded-full border-2 border-black" alt="" />
        </div>
    </div>
  )
}

export default LandingPageBar1