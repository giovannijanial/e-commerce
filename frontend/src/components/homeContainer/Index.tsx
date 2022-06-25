
import { SHomeContainer } from './index.styled'
import HomeMain from './main/Index'
import HomeNewProducts from './newProducts/Index'
import HomeOthers from './othersProducts/Index'
import HomeTopSelling from './topSelling/Index'


const HomeContainer = () => {
  return (
    <SHomeContainer>
      <HomeMain />
      <HomeNewProducts />
      <HomeTopSelling />
      <HomeOthers />
    </SHomeContainer >
  )
}

export default HomeContainer