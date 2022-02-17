import ProductCard from '@/components/product-card'
import { Cell, Row } from '@matthill8286/atomic-ui'

function ProductGrid({ products }) {
  return <Row>{products.map(ProductCard)}</Row>
}

export default ProductGrid
