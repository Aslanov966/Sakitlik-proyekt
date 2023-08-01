import Header from './Components/Header';
import Navbar from './Components/Navbar';
import MenuStarting from './Components/MenuStarting'
import HoldingAbout from './Components/HoldingAbout';
import WhyUs from './Components/WhyUs';
import HowToWork from './Components/HowToWork';
import Swiper from './Components/Swiper';
import Customers from './Components/Customers';
import Calculator from './Components/Calculator';
import SpecialOccasion from './Components/SpecialOccasion';
import ExampleProjects from './Components/ExampleProjects';
import Partnyors from './Components/partnyors';
import Videos from './Components/videos';
import Prices from './Components/Prices';
import Accordion from './Components/accordionmenu';
import HaveQuestions from './Components/haveguertions';
import ContactUs from './Components/contactus';
import MapSection from './Components/mapsection';
import Footer from './Components/footer';
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <MenuStarting/>
      <HoldingAbout/>
      <WhyUs/>
      <HowToWork/>
      <Swiper/>
      <div className="customers">
        <Customers className="active" text="Hazır Layihə" number={"50+"}/>
        <Customers text="Məmnun müştəri" number={"100%"}/>
        <Customers text="Səs izolasiyası" number={"250 m"}/>
      </div>
      <Calculator/>
      <SpecialOccasion/>
      <ExampleProjects/>
      <Partnyors/>
      <Videos/>
      <Prices/>
      <Accordion/>
      <HaveQuestions/>
      <ContactUs/>
      <MapSection/>
      <Footer/>
    </div>
  );
}

export default App;
