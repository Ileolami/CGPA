import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import { toast } from 'react-hot-toast';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('CGPASecret'); 
    navigate('/');
    toast.success("You have successfully logged out.", {
      icon: "🔔",
        style: {
          border: "none",
          padding: "",
          fontSize: "15px",
          color: "red",
          letterSpacing: "1px",
          },
    });
  };

  return (
    <Button
      props="Logout"
      onClick={handleLogout}
      className='bg-black bg-opacity-50 text-white py-2 px-4 w-30 rounded-sm border-gray-100 text-sm hover:bg-white hover:text-black transition-colors '
    />
  );
}

export default Logout;