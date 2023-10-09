import Banner from "../../component/Banner"
import ContactwithUs from "../../component/ContactwithUs"
import OurService from "../../component/OurService"
import Statics from "../../component/Statics"
import Testimonials from "../../component/Testimonials"

const Home = () => {
  return (
    <div>
        <Banner />
        <Statics />
        <OurService />
        <Testimonials />
        <ContactwithUs />
    </div>
  )
}

export default Home