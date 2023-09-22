import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  
    useEffect(()=>{
      Aos.init();
    })
   
  return <>
  <Header />
<main></main>
  <Footer/>
  </>

  }
export default App;
