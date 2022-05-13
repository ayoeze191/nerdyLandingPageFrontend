import Browse from "./Components/Browse/Browse";
import Footer from "./Components/Footer/Footer";
import FooterBottom from "./Components/Footer/FooterBottom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import JobOffers from "./Components/JobOffers/JobOffers";
import Join from "./Components/Join/Join";
import SuccesStory from "./Components/SuccessStory/SuccesStory";
// import JobOffers from "./Components/JobOffers/JobOffers";
import WhoShouldJoin from "./Components/WhoShouldJoin/WhoShouldJoin";
import WhyShouldYouJoin from "./Components/WhyShouldYouJoin/WhyShouldYouJoin";

function App() {
  return (
    <div className="App pt-4 bg-black">
        <div className="min-h-screen md:min-h-full lg:h-screen flex flex-col gap-16 md:gap-0 lg:gap-0 px-0 ">
      <Header />
      <Hero />
      </div>
      <HowItWorks />
      <WhoShouldJoin />
      <JobOffers />
      <Browse />
      <WhyShouldYouJoin />
      <SuccesStory />
      <Join />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
