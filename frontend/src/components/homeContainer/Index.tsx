
import { useEffect } from 'react'
import { useProduct } from '../../hooks/useProduct'
import { SHomeContainer } from './index.styled'
import HomeMain from './main/Index'
import HomeNewProducts from './newProducts/Index'
import HomeTopProducts from './topProducts/Index'
import HomeTopSelling from './topSelling/Index'


const HomeContainer = () => {

  const { getAll, products, loading, error } = useProduct();

  useEffect(() => {
    getAll(1)
  }, [getAll])

  return (
    <SHomeContainer>
      <HomeMain products={products} loading={loading} error={error} />
      <HomeNewProducts />
      <HomeTopSelling products={products} loading={loading} error={error} />
      <HomeTopProducts />
    </SHomeContainer >
  )
}

export default HomeContainer