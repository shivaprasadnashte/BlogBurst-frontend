import Navbar from './Navbar'
import Hero from './Hero'
import Catigori from './Catigori'
import BlogCard from './BlogCard'
import Footer from './Footer'
function Home() {
    return (
        <>
            <div className=' min-h-screen'>
                <Navbar />
                <Hero />
                <div className=' flex lg:flex-row flex-col justify-between  mt-2 sm:p-10'>
                    <Catigori />
                    <div className=' gap-10  3xl:grid-cols-4 mt-4 lg:mt-0 grid place-items-center sm:grid-cols-2 lg:gap- xl:gap-20'>
                        <BlogCard />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home