import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
const SignUp = () => {
    const handleSignUp = e =>{
        e.preventDefault();
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
                            <h2 className="text-4xl font-bold">Please Sign Up</h2>

                            <form onSubmit={handleSignUp} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
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
                                    <button className="btn btn-primary bg-red-500 border-none font-bold text-white text-base hover:bg-red-700">Sign Up</button>


                                </div>
                            </form>
                            <p className='text-xl font-bold mt-7'>Already Have An Account? Please <Link to="/login" className='text-orange-600'>Sign In</Link></p>
                            {/* <button onClick={hadleGoogleLogin} className="btn btn-primary bg-green-700 hover:bg-green-900 text-white">Google Login</button>
{
    errorMessage && <p className="text-sm font-bold text-red-700">{errorMessage}</p>
}
<p className="text-xl mt-10">New Here?Please <Link to="/register" className="font-bold text-green-600">Register</Link></p> */}
                        </div>
                    </div>








                </div>
            </div> 
        </div>
    );
};

export default SignUp;