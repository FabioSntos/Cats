import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
