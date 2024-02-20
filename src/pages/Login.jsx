import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import AuthContext from "../contexts/authContext";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {student} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setIsLoading(true)

        e.preventDefault();
        if (!email && !password) {
            toast.error("All fields are required", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "",
                    fontSize: "15px",
                    color: "red",
                    letterSpacing: "1px",
                },
            });
            setIsLoading(false)
            return;
        }
        if (!email) {
            toast.error("Email is required", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "",
                    fontSize: "15px",
                    color: "red",
                    letterSpacing: "1px",
                },
            });
            setIsLoading(false)
            return;
        }
        if(!password){
            toast.error("Password is required", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "",
                    fontSize: "5px",
                    color: "red",
                    letterSpacing: "1px",
                },
            });
            setIsLoading(false)
            return;
        }
        if (!password || password.length < 5) {
            toast.error("Password must be at least 5 characters long", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "",
                    fontSize: "15px",
                    color: "red",
                    letterSpacing: "1px",
                },
            
            });
            setIsLoading(false)
            return;
        }

        // console.log("---here")  
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result);
            if (result.data.token){
                toast.success(`Welcome ${student.name}`, {
                    icon: "✔",
                    style: {
                      border: "none",
                      padding: "",
                      fontSize: "15px",
                      color: "green",
                      letterSpacing: "1px",
                    },
                  });
                  localStorage.setItem('CGPASecret', result.data.token);
                window.location.href = '/calculate';
            } 
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err);
            toast.error("Invalid Email or Password", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "15px",
                    color: "green",
                    fontSize: "15px",
                },
                transition: {
                    duration: 0.5,
                    timingFunction: 'ease',
                    delay: 0,
                },

            });
        });
    }

    return (
        <div className='flex justify-center items-center h-screen  bckg'>
           <div className='bg-black bg-opacity-50 w-96 p-3 rounded-2xl shadow-2xl px-6'>
            <h1 className='text-4xl font-bold mb-8 text-center text-slate-300'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="email" 
                    className='block text-gray-300'>
                        Email
                    </label>
                    <input type="email" 
                    placeholder='Enter your email'
                    autoComplete='off'
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-80 p-2 border border-gray-300 rounded mt-1 text-sm' 
                    />
                </div>
                <div>
                    <label htmlFor="password" 
                    className='block text-gray-300'>
                        Password
                    </label> 
                  
                    <div 
                      onClick={() => setShowPassword(!showPassword)}
                      className=' flex gap-20 items-center bg-white rounded border-gray-300 w-80 mt-1'
                       >
                     <input 
                      type={showPassword ?'password'  :'text' }
                      placeholder='Enter your password'
                      autoComplete='off'
                      id="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='p-2 text-sm bg-none rounded' 
                     />
                        {showPassword ? <FiEyeOff/> :<FiEye /> }
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" 
                    className='bg-blue-500 text-white min-w-32 px-4 py-2 rounded mt-6 animate-bounce'>
                        {isLoading ? <span className='text-xl font-bold'>...</span>: "Login"}
                    </button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default Login;