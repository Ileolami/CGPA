import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            toast.error("Name is required", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "5px",
                    color: "red",
                    fontSize: "5px",
                    
                },
            
            });
            return;
        }

        if (!email) {
            toast.error("Email is required",{
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "5px",
                    color: "red",
                    fontSize: "5px",
                },
            });
            return;
        }

        if (!password || password.length < 5) {
            toast.error("Password must be at least 5 characters long", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "5px",
                    color: "red",
                    fontSize: "5px",
                },
            });
            return;
        }

        axios.post('http://localhost:3001/Signup', {name, email, password})
        .then(result => {
            console.log(result);
            toast.success("Account created successfully", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "5px",
                    color: "green",
                    fontSize: "5px",
                    backgroundColor: "#713200",
                },
            });
            navigate('/login');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-black bg-opacity-50 w-96 p-3 rounded-2xl shadow-2xl px-6'>
                <h1 className='text-4xl font-bold mb-8 text-center text-slate-300'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-gray-300'>Name</label>
                        <input type="text" 
                        placeholder='Enter your name' 
                        autoComplete='off' id="name" 
                        value={name} 
                        className='w-80 p-2 border border-gray-300 rounded mt-1 text-sm' 
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-300'>Email</label>
                        <input type="email" 
                        placeholder='Enter your email' 
                        autoComplete='off' id="email" 
                        value={email} 
                        className='w-80 p-2 border border-gray-300 rounded mt-1  text-sm' 
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-gray-300'>Password</label> 
                        <input type="password" 
                        placeholder='Enter your password' 
                        autoComplete='off' id="password" 
                        value={password} 
                        className='w-80 p-2 border border-gray-300 rounded mt-1 text-sm' 
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" 
                        className='w-56 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded animate-bounce shadow-2xl shadow-slate-900 mt-8'>
                            Sign Up</button>
                    </div>
                </form>
                <div className='text-center mt-4'>
                    <Link to='/login' className='text-blue-500 text-xs leading-[1] hover:text-white'>Already have an account?</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;