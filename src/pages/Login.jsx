import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    // React-hook-form
    const {handleSubmit, register, reset} = useForm();

    // Capture forms data & send it
    const submitForm = formData => {
        const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post(URL, formData)
            .then(response => {
                console.log('login', response);
                localStorage.setItem('token', response.data.token);
                navigate('/');
            })
            .catch(err => console.log('errorLogin', err))
            reset({
                email:"",
                password:""
            })
    }

    return (
        <div>
            {/* On registered handleSubmit should be executed */}
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")} /> 
            </div>
            <div>
                <label htmlFor="password">Password</label>
                {/* React-hook-form  register*/}
                <input type="password" id="password" {...register("password")} />
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3LCJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJkb2UiLCJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwicGhvbmUiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wMS0yN1QxMDoyODoxNC40MTFaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0yN1QxMDoyODoxNC40MTFaIn0sImlhdCI6MTY3NDg0NTI1NH0.T6377a3Cr0pxgc26AXaHmtdSIZtOkBaO8vCQZgn6rzY"