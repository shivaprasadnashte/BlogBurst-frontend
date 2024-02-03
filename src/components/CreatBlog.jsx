import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import axios from 'axios'
import { getToken } from '../session'
function CreatBlog() {

    const authorName = getToken()
    const author = authorName.username
    const userId = authorName.userId
    const [title, setTitle] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [body, setBody] = React.useState('')
    const URL = import.meta.env.VITE_PUBLIC_BACKEND_URL


    const handleSubmit = async (e) => {
        e.preventDefault()
        const blog = { title, category, body, author, userId }
        await axios.post(`${URL}/blog`, blog)
            .then(
                console.log('new blog added'),
                setTitle(''),
                setCategory(''),
                setBody('')
            )
    }

    return (
        <>
            <Navbar />
            <Hero />
            <div className=' flex justify-center mb-10 flex-col' >

                <div className=' flex flex-col p-2 sm:p-10 gap-5'>
                    <div className=' flex flex-col  sm:flex-row gap-10 items-center'>
                        <div className=' w-full border-b-2 border-gray-400'>
                            <input type="text"
                                placeholder='Title'
                                className=' w-full focus:outline-none p-1  font-bold  text-xl'
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                value={title} />
                        </div>
                        <div className=' w-full border-b-2 border-gray-400'>
                            <input type="text"
                                placeholder='Category'
                                className=' w-full focus:outline-none p-1  font-bold  text-xl'
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                value={category} />

                        </div>


                    </div>
                    <div className=' border-2 border-gray-400'>
                        {/* <JoditEditor
                            ref={editor}
                            value={body}
                            onChange={newContent => setBody(newContent)}
                        /> */}
                        <textarea name="" id="" cols="30" rows="10"
                            placeholder='Tell your story...'
                            className=' focus:outline-none p-2 w-full'
                            value={body}
                            onChange={(e) => {
                                setBody(e.target.value)
                            }} />
                    </div>
                </div>
                <div className=' w-full text-center'>
                    <button onClick={handleSubmit} className=' bg-blue-600 text-white  w-24 py-1 px-2'>PUBLISH</button>
                </div>
            </div>
            <Footer />


        </>
    )
}

export default CreatBlog