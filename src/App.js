import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";
import CardSection from "./components/CardSection/CardSection";
import BannerSection from "./components/BannerSection/BannerSection";
import Footer from "./components/Footer/Footer";
import { MainWrapper } from "./styles/GlobalStyles";

export default function App() {
  return (
    <MainWrapper>
      <NavBar />
      <Hero />
      <CardSection />
      <BannerSection />
      <Footer />
    </MainWrapper>
  );
}
