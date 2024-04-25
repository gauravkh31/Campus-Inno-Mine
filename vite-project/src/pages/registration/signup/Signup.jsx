/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";

const Signup = () => {
    return (
        <Layout>
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-teal-50 px-1 lg:px-8 py-6 border border-teal-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-teal-500 '>
                        Signup as student
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='bg-teal-50 border border-teal-200 px-2 py-2 w-96 rounded-md outline-none placeholder-teal-200'
                    />
                </div>

                {/* Input two  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='College Name'
                        className='bg-teal-50 border border-teal-200 px-2 py-2 w-96 rounded-md outline-none placeholder-teal-200'
                    />
                </div>


                {/* Input three  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='College ID'
                        className='bg-teal-50 border border-teal-200 px-2 py-2 w-96 rounded-md outline-none placeholder-teal-200'
                    />
                </div>

                {/* Input four  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-teal-50 border border-teal-200 px-2 py-2 w-96 rounded-md outline-none placeholder-teal-200'
                    />
                </div>

                {/* Input five  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-teal-50 border border-teal-200 px-2 py-2 w-96 rounded-md outline-none placeholder-teal-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-teal-500 hover:bg-teal-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-teal-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
        </Layout>
    );
}

export default Signup;