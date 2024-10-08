import { Box } from "@mui/material"
import Product from './Product'

const Products = () => {

  const products = {
    watch: {
      heading: 'WATCH',
      subHeading: 'Introducing our largest display yet',
      imageURL: 'https://www.apple.com/v/home/ag/images/promos/watch-series-7/tile_watch__e9n11b6m6yq2_large.jpg'
    },
    ipad: {
      heading: 'iPad mini',
      subHeading: 'Mega power. Mini sized',
      imageURL: 'https://www.apple.com/v/home/ag/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_large.jpg'
    },
    macbook: {
      heading: 'MacBook Air 15',
      subHeading: 'Impressively big. Impossibly thin.',
      imageURL: 'https://www.apple.com/v/home/be/images/promos/macbook-air-15/promo_macbook_air_15_midnight__3zojl1nanrme_large.jpg'
    },
    homepod: {
      heading: 'HomePod mini',
      subHeading: 'Yellow orange and blue available in late November',
      imageURL: 'https://www.apple.com/v/home/ag/images/promos/homepod-mini/tile_homepod_mini__b73w4z3ljymu_large.jpg'
    },
    arcade: {
      heading: 'Arcade',
      subHeading: 'Get 3 months free when you buy a new iPhone, iPad, iPod touch, Apple TV or Mac.',
      imageURL: 'https://www.apple.com/v/home/ag/images/promos/arcade-bundle/tile_arcade__ewkth5cd0wia_large.jpg'
    },
    applewatch: {
      heading: 'Carbon Neutral',
      subHeading: 'A first for Apple Watch. And Apple.',
      imageURL: 'https://www.apple.com/v/home/be/images/promos/apple-watch-carbon-neutral/promo_carbon_neutral__fmzt9ypcw9e2_large.jpg'
    }
  }

  return (
    <div>
      <Box style={{ display: 'flex', justifyContent : 'center', alignItems : 'center'}}>
        <Product data={products.watch}/>
        <Product data={products.ipad}/>
      </Box>
      <Box style={{ display: 'flex'}}>
        <Product data={products.macbook}/>
        <Product data={products.homepod}/>
      </Box>
      <Box style={{ display: 'flex'}}>
        <Product data={products.arcade}/>
        <Product data={products.applewatch}/>
      </Box>
    </div>
  )
}

export default Products
