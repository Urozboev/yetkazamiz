import React from 'react'
import Header from '../header/Header'
import PopularCategories from '../sections/PopularCategories'
import TopProduct from '../sections/TopProduct'
import SectionSlider from '../sections/SectionSlider'
import OrganicElements from '../sections/OrganicElements'
import ReklamaSection from '../sections/ReklamaSection'
import HappyClients from '../sections/HappyClients'
import ProductsShortInfo from '../sections/ProductsShortInfo'
import Footer from '../sections/Footer'
import HeaderSlider from '../header/HeaderSlider'

const Home = () => {
  return (
    <>
        <Header />
        <HeaderSlider />
        <PopularCategories />
        <TopProduct />
        <SectionSlider />
        <OrganicElements />
        <ReklamaSection />
        <HappyClients />
        <ProductsShortInfo />
        <Footer />
    </>
  )
}

export default Home