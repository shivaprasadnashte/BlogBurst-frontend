import React, { useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { getToken } from '../session';
function Comments() {
  const token = getToken()
  const location = useLocation()
  const data = location.state
  const blogid = data._id
  const [comment, setComment] = React.useState([])
  const URL = import.meta.env.VITE_PUBLIC_BACKEND_URL
  const deleteComment = async (commentId) => {
    await axios.delete(`${URL}/comment/comment/${commentId}`)
    window.location.reload()

  }
  const getComment = async () => {
    axios.get(`${URL}/comment/comment/${blogid}`)
      .then((res) => {
        setComment(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getComment()
  }
    // eslint-disable-next-line 
    , [])



  return (
    <>
      {comment.map((item) => (
        <div className=' flex flex-col bg-gray-200 w-full py-1 gap-1 px-3' key={item._id}>
          <div className=' flex justify-between '>
            <div className=' flex gap-2'>
              <span className=' font-bold'>{item.username}</span>
              <p className=' text-gray-400'>Tue May 27 2023</p>
            </div>
            {item.userId === token.userId && <MdDelete className=' text-xl mt-2' onClick={() => {
              deleteComment(item._id)
            }} />}
          </div>
          <div>
            <p>{item.comment}</p>
          </div>
        </div>))}

    </>
  )
}

export default Comments