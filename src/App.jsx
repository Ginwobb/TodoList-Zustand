import Todolist from './components/Todolist'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Header from './components/Header';
import AppRouter from './router/AppRouter';


function App() {

  return (
    <div>
      <AppRouter/>
      <ToastContainer />
      <Todolist/>
    </div>
  )
}

export default App
