import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";
import { MainWrapper } from "./styles/GlobalStyles";

export default function App() {
  return (
    <MainWrapper>
      <NavBar />
      <Hero />
    </MainWrapper>
  );
}
