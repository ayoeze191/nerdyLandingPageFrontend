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
import { ReactLenis, useLenis } from "lenis/react";
import { useRef, useEffect } from "react";
function App() {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);
  return (
    <ReactLenis root ref={lenisRef}>
      <div className="App  bg-black">
        <div className="min-h-screen lg:h-screen flex flex-col gap-16 md:gap-0 lg:gap-0 px-0 ">
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
    </ReactLenis>
  );
}

export default App;
