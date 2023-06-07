import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import  loadConfiguration from '../utils/loadConfiguration';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './styles/login.css';

const Login = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState();
    const [userPic, setUserPic] = useState('')
    const navigate = useNavigate()
    // React-hook-form
    const {handleSubmit, register, reset} = useForm();

    // Capture form's data & send it
    const submitForm = (formData) => {
        // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        const URL = 'https://ecommerceapp-verv.onrender.com/users/login'
        axios.post(URL, formData)
            .then(response => {
                // setUserData(response);
                console.log('login', response);
                localStorage.setItem('token', response.data.token);
                setIsLogged(true)
                navigate('/');
                window.location.reload();
            })
            .catch(err => console.log('errorLogin', err))
            reset({
                email:"",
                password:""
            })
    }
    // Users information
    useEffect(() => {
        // const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/me';
        const URL = 'https://ecommerceapp-verv.onrender.com/users/me';
          axios.get(URL, loadConfiguration())
            .then(response => {
            //   console.log(response?.data)
              setUserData(response?.data);
            })
            .catch(error => console.log('error', error))
      },[])

      useEffect(() => {
        const URL = `https://randomuser.me/api/`;
        axios.get(URL)
        .then(response => {
            // console.log(response.data.results[0].picture.medium)
            setUserPic(response.data.results[0]);
        })
        .catch(error => console.log('error', error))
      }, [])

    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false;
        setIsLogged(condition);
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLogged(false);
        window.location.reload();
    }

    return (
            isLogged ? 
            (
                <div className='logout__container'>
                    <div className='logout__card'>
                        <div className='img__container'>
                            <img src={userPic?.picture?.large} alt="" />
                        </div>
                        <h4>{userData?.firstName} {userData?.lastName}</h4>
                        <button onClick={handleLogout}>Logout</button>

                    </div>
                </div>
            )
            :
            (

                <div className='login__container'>
                    <div className='login__card'>
                        {/* On registered handleSubmit should be executed */}
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div>Welcome! Enter your email and password!</div>
                            <div className='login__test__data'>
                                <h5>Test data</h5>
                                <div className='test__data'>
                                    <EmailIcon className='icon'/>
                                    <p>nelisa@gmail.com</p>
                                </div>
                                <div className='test__data'>
                                    <LockOpenIcon className='icon'/>
                                    <p>lobo123</p>
                                </div>
                            </div>
                            <div className='login__inputs'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" {...register("email")} /> 
                            </div>
                            <div className='login__inputs'>
                                <label htmlFor="password">Password</label>
                                {/* React-hook-form  register*/}
                                <input type="password" id="password" {...register("password")} />
                            </div>
                            <button className='login__btn'>Login</button>
                            <p className='sign_up_msg'>
                                Don't have a account? Sign Up
                                {/* Don&apos;t have an account? <Link to="/signup">Sign up</Link> */}
                            </p>
                        </form>
                    </div>
                </div>
            )
        
  )
}

export default Login

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3LCJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJkb2UiLCJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwicGhvbmUiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wMS0yN1QxMDoyODoxNC40MTFaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0yN1QxMDoyODoxNC40MTFaIn0sImlhdCI6MTY3NDg0NTI1NH0.T6377a3Cr0pxgc26AXaHmtdSIZtOkBaO8vCQZgn6rzY"