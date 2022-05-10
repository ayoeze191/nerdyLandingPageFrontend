import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import JobOffers from "./Components/JobOffers/JobOffers";
// import JobOffers from "./Components/JobOffers/JobOffers";
import WhoShouldJoin from "./Components/WhoShouldJoin/WhoShouldJoin";

function App() {
  return (
    <div className="App py-4 bg-black">
      <div className="sm:h-screen flex flex-col">
      <Header />
      <Hero />
      </div>
      <HowItWorks />
      <WhoShouldJoin />
      <JobOffers />
    </div>
  );
}

export default App;
