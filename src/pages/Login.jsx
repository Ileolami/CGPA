

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
           <div className='bg-black bg-opacity-50 w-96 p-3 rounded-2xl shadow-2xl px-6'>
            <h1 className='text-4xl font-bold mb-8 text-center text-slate-300'>Login</h1>
            <form>
                <div className='mb-4'>
                    <label htmlFor="email" 
                    className='block text-gray-300'>
                        Email
                    </label>
                    <input type="email" 
                    placeholder='Enter your email'
                    autoComplete='off'
                    id="email" 
                    className='w-80 p-2 border border-gray-300 rounded mt-1 text-sm' 
                    />
                </div>
                <div>
                    <label htmlFor="password" 
                    className='block text-gray-300'>
                        Password
                    </label> 
                    <input type="password" 
                    placeholder='Enter your password'
                    autoComplete='off'
                    id="password" 
                    className='w-80 p-2 border border-gray-300 rounded mt-1 text-sm' 
                    />
                </div>
                <div className='flex justify-center'>
                    <button type="submit" 
                    className='bg-blue-500 text-white px-4 py-2 rounded mt-6 animate-bounce'>
                        Login
                    </button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default Login;