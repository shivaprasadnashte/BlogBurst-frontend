import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Comments from './Comments';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useLocation, Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getToken } from '../session';


function BlogPage() {

  const { id } = useParams();


  const [comment, setComment] = React.useState('')
  const token = getToken()
  const location = useLocation()
  const data = location.state
  const blogId = id
  const userId = token.userId
  const username = token.name

  const [blog, setBlog] = React.useState(null)



  const URL = import.meta.env.VITE_PUBLIC_BACKEND_URL
  const getBlog = async () => {
    const data = await axios.get(`${URL}/blogs/getblogbyId/${blogId}`)
    setBlog(data.data)
  }


  useEffect(() => {
    getBlog()
  }, [])
  const deleteBlog = async () => {
    await axios.delete(`${URL}/blog/${blogId}`)
    alert('are you sure you want to delete this blog')
    alert('Blog Deleted')
    window.location = '/home'
  }

  const postComment = async () => {
    await axios.post(`${URL}/comment/comment`, {
      blogId,
      userId,
      username,
      comment
    })
    window.location.reload()

  }

  return (
    <>
      <Navbar />

      <div className=' flex flex-col gap-5 px-2 sm:px-10 py-5 min-h-screen'>
        <img src="/images/hero.jpg" alt="" className=' w-full h-96' />
        <div>

          <div className=' w-full flex  justify-end gap-3 sm:text-3xl'>
            {(token.userId === blog?.userId) && <div className=' border-2 border-black sm:rounded-xl p-1'>
              <MdEdit className=' text-blue-500' />
            </div>}

            {(token.userId === blog?.userId) && <div className=' border-2 border-black sm:rounded-xl p-1 ' onClick={() => {
              deleteBlog()
            }}>
              <MdDelete className=' text-red-500' />
            </div>}
          </div>

        </div>
        {blog && <div className=' px-5'>

          <div className=' w-full flex justify-center mb-3'>
            <h1 className=' sm:text-4xl text-2xl font-bold'>{blog.title}</h1>
          </div>
          <div className=' w-full flex flex-col sm:flex-row mb-3 justify-between sm:py-2 '>
            <p><span className=' font-bold mr-1'>Author : </span>{blog.author}</p>
            {/* <p><span className=' font-bold mr-1'>Catigory :</span>computer science</p> */}
            <p>{blog.createdAt} </p>
          </div>
          <div>
            <p>
              {blog.body}
            </p>
          </div>
        </div>
        }
        <div>
          <div className=' flex w-full'>
            <FaUserAlt className=' mr-2 text-4xl' />
            <div className=' border-2 w-full border-gray-200'>
              <textarea
                className=' p-2  w-full focus:outline-none h-20'
                placeholder='What do you think ?....'
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value)
                }}></textarea>
            </div>
            <button className=' ml-2 bg-blue-700 px-4 h-10 text-white' onClick={postComment}>Post</button>
          </div>
        </div>
        {/* <Link to='/comments' state={data}></Link> */}
        <Comments blogId={blogId} />
      </div>
      <Footer />
    </>
  )
}

export default BlogPage