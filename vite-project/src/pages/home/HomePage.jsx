
import Layout from "../../components/layout/Layout"
import HeroSection from "../../components/heroSection/HeroSection"
import Category from "../../components/category/Category"
import HomePageprojectCard from "../../components/homePageProjectCard/HomePageProjectCard"
import Track from "../../components/track/Track"
import Testimonial from "../../components/testimonial/Testimonial"
export default function HomePage() {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageprojectCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}
