import Input from '../Features/Input';
import { CgpaProvider } from '../contexts/CgpaContext';
import Display from'./Display';
const Home = ()=> {
    return (
    <CgpaProvider>
     <div >
     <Input />
      <Display />
     </div>
    </CgpaProvider>
    )
};

    export default Home;