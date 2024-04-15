import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('CGPASecret'); 
    navigate('/');
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