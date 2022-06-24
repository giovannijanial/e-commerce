
import { SHomeContainer } from './index.styled'
import HomeMain from './main/Index'
import HomeNewProducts from './newProducts/Index'
import HomeTopSelling from './topSelling/Index'


const HomeContainer = () => {
  return (
    <SHomeContainer>
      <HomeMain />
      <HomeNewProducts />
      <HomeTopSelling />
    </SHomeContainer >
  )
}

export default HomeContainer