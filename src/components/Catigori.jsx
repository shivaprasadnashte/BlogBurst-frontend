import { useNavigate } from 'react-router-dom'

function Catigori() {
    const navigate = useNavigate()
    return (
        <>
            <div className=' lg:w-1/4 w-full flex flex-col gap-5'>
                <div className=' w-full flex justify-center'>
                    <button className=' bg-blue-500  w-32 text-sm text-white py-2 px-3 md:w-full'
                        onClick={() => {
                            navigate('/creatblog')
                        }} >
                        CREATE BLOG
                    </button>
                </div>
                <div>
                    <p className=' border-2 border-gray-200 p-3'>All catigories</p>
                    <p className=' border-2 border-gray-200 p-3'>Technical</p>
                    <p className=' border-2 border-gray-200 p-3'>Music</p>
                    <p className=' border-2 border-gray-200 p-3'>History</p>
                    <p className=' border-2 border-gray-200 p-3'>Coding</p>
                    <p className=' border-2 border-gray-200 p-3'>Web Devlopment</p>
                    <p className=' border-2 border-gray-200 p-3'>Electrical Engineering</p>
                    <p className=' border-2 border-gray-200 p-3'>Space Scienc</p>
                    <p className=' border-2 border-gray-200 p-3'>Treding</p>
                </div>
            </div>

        </>
    )
}

export default Catigori