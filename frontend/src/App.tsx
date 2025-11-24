// src/App.tsx
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
// import GeneratorSection from "./sections/GeneratorSection/GeneratorSection";
import { TokenomicsSection } from "./sections/TokenomicsSection/TokenomicsSection";
import { TokenomicsSection2 } from "./sections/TokenomicsSection2/TokenomicsSection2";
// import { ChartSection } from "./sections/ChartSection/ChartSection";
// import IntroSection from "./sections/IntroSection/IntroSection";
// import GeneratorHeroSection from "./sections/GeneratorHeroSection/GeneratorHeroSection";
import ContractToast from "./components/ContractToast/ContractToast";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <TokenomicsSection2/>
        {/* <IntroSection /> */}
        {/* <GeneratorHeroSection /> */}
        {/* <GeneratorSection /> */}
        <TokenomicsSection />
        {/* <ChartSection /> */}
      </main>

      {/* всплывающий тост с контрактом в правом нижнем углу */}
      <ContractToast address="0x6358288eef7a497c6791c777ab9180ca551e1a55" />
    </div>
  );
}

export default App;
