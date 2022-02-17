import * as React from 'react'
import { useRouter } from 'next/router'
import { useCart } from 'react-use-cart'

import { formatCurrencyValue } from '@/utils/format-currency-value'
import { useSettingsContext } from '@/context/settings'
import {
  AmountPicker,
  Button,
  CopyText,
  Heading,
  Picture,
  Typo,
  Grid,
  Row,
  Cell
} from '@matthill8286/atomic-ui'

function ProductPageUI({ product }) {
  const { addItem } = useCart()
  const router = useRouter()
  const { activeCurrency } = useSettingsContext()
  const [variantQuantity, setVariantQuantity] = React.useState({ quantity: 1 })

  console.log('>> logging', { product })

  React.useEffect(() => {
    const url = `/products/${product.slug}`

    router.replace(url, url, { shallow: true })
  }, [])

  const updateQuantity = (event, newQuantity) =>
    setVariantQuantity({ quantity: Number(newQuantity) })

  const [primaryImage] = product.images

  const addToCart = () => {
    const itemMetadata = router.locales.reduce(
      (acc, locale) => ({
        ...acc,
        [locale]: {
          ...product.localizations.find(
            (localization) => localization.locale === locale
          )
        }
      }),
      {}
    )

    addItem(
      {
        id: product.id,
        productId: product.id,
        image: product.images[0],
        price: product.price,
        ...itemMetadata
      },
      variantQuantity
    )
  }

  return (
    <>
      {/* <Row>
        <Cell columns={12} justify="flex-start"></Cell>
      </Row> */}
      <Row>
        <Cell columns={8} colsLg={8} colsMd={8}>
          <Picture
            src={primaryImage.url}
            alt={product.name}
            title={product.name}
          />
        </Cell>
        <Cell columns={4} colsLg={4} colsMd={8} colsSm={8} colsXs={4}>
          <Heading scale="level-2">{product.name}</Heading>
          <Typo>
            {formatCurrencyValue({
              currency: activeCurrency,
              value: product.price
            })}
          </Typo>

          <Typo>{product.description}</Typo>

          <CopyText
            className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
            htmlFor="quantity"
          >
            Quantity
          </CopyText>

          <AmountPicker
            label={`Quantity for ${product.name}`}
            min={0}
            max={10}
            quantity={variantQuantity.quantity}
            onQuantityChange={updateQuantity}
          />
          <Button onClick={addToCart}>Add to cart</Button>
        </Cell>
      </Row>
    </>
  )
}

export default ProductPageUI
