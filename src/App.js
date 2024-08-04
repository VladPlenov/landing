import './App.css';
import Navmenu from './components/navmenu'
import Mainsection from './components/mainsection';
import About from './components/about';
import Doing from './components/doing';
import Services from './components/services';
import Advantages from './components/advantages';
import Portfolio from './components/portfolio';
import ContactUs from './components/contactus';




function App() {
  return (
    <>
        <Navmenu/>
        <Mainsection/>
        <About/>
        <Doing/>
        <Services/>
        <Advantages/>
        <Portfolio/>
        <ContactUs/>
    
    </>
  );
}

export default App;
