import Header from "./components/header/Header";
import HappyClients from "./components/sections/HappyClients";
import OrganicElements from "./components/sections/OrganicElements";
import PopularCategories from "./components/sections/PopularCategories";
import ProductsShortInfo from "./components/sections/ProductsShortInfo";
import ReklamaSection from "./components/sections/ReklamaSection";
import SectionSlider from "./components/sections/SectionSlider";
import TopProduct from "./components/sections/TopProduct";
import Footer from "./components/sections/Footer";
import AddProduct from "./components/sections/AddProduct";

function App() {
  return (
    <>
      <Header />
      <AddProduct />
      <PopularCategories />
      <TopProduct />
      <SectionSlider />
      <OrganicElements />
      <ReklamaSection />
      <HappyClients />
      <ProductsShortInfo />
      <Footer />
    </>
  );
}

export default App;
