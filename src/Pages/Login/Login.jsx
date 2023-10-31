import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'


import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext, useState } from 'react';
import { Swal, SweetAlert, swal } from 'sweetalert2/dist/sweetalert2.all';
import axios from 'axios';
const Login = () => {
    const {SignIn,user} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const Navigate = useNavigate();
    console.log(location);
    const handleLogin = e => {
        
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = e.target.email.value;
          const password = form.get('password')
        SignIn(email,password)
        .then(result =>{
            const loggedInUser = result.user;
          console.log(loggedInUser);
          const user = {email};
          alert("successful");

        //   Navigate(location?.state ? location?.state : "/")
        // token 
        axios.post('http://localhost:5000/jwt',user)
         .then(res => {
            console.log(res.data);
         })
        })
        .catch(error =>{
          console.error(error);
          setErrorMessage(error.message)
  
        })
    }
    return (
        <div>
            <div>
                <div className="bg-gray-100 py-[150px]">
                    <div className=" text-center  py-5 flex">
                        <div className=' ml-10'>
                         <img src={logo} alt="" />
                        </div>
                        <div className=" flex-1 w-1/2 px-20">
                            <h2 className="text-4xl font-bold">Please login</h2>

                            <form onSubmit={handleLogin} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        name="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-red-500 border-none font-bold text-white text-base hover:bg-red-700">Login</button>


                                </div>
                            </form>
                            <p className='text-xl font-bold mt-7'>New Here? Please <Link to="/signUp" className='text-orange-600'>Sign Up</Link></p>
                            {
                    errorMessage && <p className="text-sm font-bold text-red-700">{errorMessage}</p>
                }
                        </div>
                    </div>








                </div>
            </div>
        </div>
    );
};

export default Login;