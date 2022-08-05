import { useEffect, useState } from 'react'
import { getProduct } from '../../services/productApi/ProductApi'

import starEmpty from '../../assets/products/star-empty.svg'
import starFull from '../../assets/products/star-full.svg'

import { ProductContainer, RateContent, ProdCardComponent, PriceContent, Button, Title, ShowcaseComponent } from './Style'

export function Products() {
  const [productList, setProductList] = useState([])
  // useEffect(() => { getProduct() }, [])
  useEffect(() => {
    const getData = async () => {
      const { data } = await getProduct()
      setProductList(data)
    }
    getData()
  }, [])

  return (
    <ShowcaseComponent>
      <ProductContainer>
        <div className='centralizer'>
          <Title>
            <h2>
              Mais vendidos
              <hr />
            </h2>
          </Title>
          <div>
            {productList.map(product => {
              // console.log("aqui!", product.installments[0]?.quantity)
              return (
                <ProdCardComponent>
                  <div className='display' >
                    <img src={product.imageUrl} />
                  </div>
                  <div className='description'>
                    <h4> {product.productName}</h4>
                    <RateContent>
                      {Array(5)
                        .fill("")
                        .map((currentStar, index) => (
                          <img
                            key={index}
                            src={index <= product.stars ? starFull : starEmpty}
                            alt='avalições'
                          />
                        ))}
                    </RateContent>
                    <PriceContent>
                      {product.listPrice ? (
                        <h4>
                          <span> de R$ {product.listPrice}</span>
                        </h4>
                      ) : (
                        <h4>{""}</h4>
                      )}
                      <h3>Por R$ {product.price}</h3>

                      {product.installments[0] ? (
                        <p key='index'>
                          ou em {product.installments[0].quantity}x de {product.installments[0].value}
                        </p>
                      ) : (
                        <p>{""}</p>
                      )}
                    </PriceContent>
                    <Button>Comprar</Button>
                  </div>
                </ProdCardComponent>
              )
            })}
          </div>
        </div>
      </ProductContainer >
    </ShowcaseComponent>
  )

}
