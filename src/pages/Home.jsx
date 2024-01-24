import Input from '../component/Input';
import { CgpaProvider } from '../contexts/CgpaContext';
import Display from'./Display';
const Home = ()=> {
  
    return (
    <CgpaProvider>
      <Input />
      <Display />
    </CgpaProvider>
    )
};

    export default Home;