import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home.jsx"
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-gray-100 to-gray-300'>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
