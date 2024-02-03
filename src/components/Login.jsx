import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../session'
// import { set } from 'mongoose'

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = React.useState('')
    const [password, setPassward] = React.useState('')
    const URL =import.meta.env.VITE_PUBLIC_BACKEND_URL
    const handleLogin = async () => {
        const data = { username, password }
        await axios.post(`${URL}/login`, data)
           .then( async(res) => {
            setToken(res.data)
            // console.log(res.data)
            setUsername(''),
            setPassward('')
            navigate('/home')
            // console.log(res.data)
           }) 
    }
  
    return (
        <>
           <div className=' w-full h-screen  flex justify-center items-center'>
                <div className='   flex flex-col gap-8 px-5 py-12 shadow-2xl'>

                    <div className=' w-full flex justify-center'>
                        <h1 className=' flex  text-4xl text-gray-600 '>
                            blo <span className=' text-orange-400'>g</span>
                        </h1>
                    </div>
                    <div className=' w-full flex flex-col items-center gap-4 justify-center p-5'>
                        <div className=' flex w-full flex-col gap-5'>
                            <div className=' w-full border-b-2 border-gray-400'>
                                <input type="text"
                                 placeholder='username' 
                                 className=' focus:outline-none px-2 w-full' 
                                 value={username}
                                 onChange={(e)=>{
                                        setUsername(e.target.value) 
                                 }}/>
                            </div>

                            <div className=' bg-white w-full border-b-2 border-gray-400'>
                                <input type="password"
                                 placeholder='passward' 
                                 className=' focus:outline-none px-2 w-full'
                                 value={password}
                                 onChange={(e)=>{
                                    setPassward(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className=' w-full flex flex-col gap-3 justify-center items-center'>
                            <div className=' bg-orange-600 text-white w-full text-center  py-1 shadow-lg'>
                                <button onClick={handleLogin}>LOGIN</button>
                            </div>
                            <div className=' text-gray-600'>
                                <p>OR</p>
                            </div>
                            <div className=' bg-white  hover:bg-orange-600 hover:text-white w-full text-center  py-1 border-2 border-gray-200 shadow-lg'>
                                <button onClick={() => {
                                    navigate('/signup')
                                }} >
                                    CREAT AN ACCOUNT
                                </button>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default Login