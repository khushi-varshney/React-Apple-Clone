import Header from "../components/Header"
import Info from "../components/Info"
import Products from "../components/Products"
import Section from "../components/Section"

const Home = () => {

  const productsSection = {
    iphonePro: {
      heading: 'iPhone 15 Pro',
      headColor: '#fff',
      subHeading: 'Titanium. So Strong. So light. So Pro.',
      subHeadColor: '#fff',
      imageURL: 'https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_large.jpg'
    },
    iphone: {
      heading: 'iPhone 15',
      headColor: '#1d1d1f',
      subHeading: 'New camera. New design. Newphoria',
      subHeadColor: '#1d1d1f',
      imageURL: 'https://www.apple.com/v/home/be/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_large.jpg'
    },
    macbookpro: {
      heading: 'MacBook Pro',
      headColor: '#1d1d1f',
      subHeading: 'Supercharged for pros',
      subHeadColor: '#1d1d1f',
      imageURL: 'https://www.apple.com/v/home/ag/images/heroes/macbook-pro/hero_macbookpro__eatonjfwvuc2_large.jpg'
    }
  }

  return (
    <div>
      <Header />
      <Info />
      <Section data={productsSection.iphonePro}/>
      <Section data={productsSection.iphone}/>
      <Section data={productsSection.macbookpro}/>
      <Products />
    </div>
  )
}

export default Home
