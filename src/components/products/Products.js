import { useEffect, useState } from 'react'
import { getProduct } from '../../services/productApi/ProductApi'

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
        <>
            <h2>
                Mais vendidos
                <hr />
            </h2>

            <div>
                {productList.map(product => (
                    <div>
                        <img src={product.imageUrl} />
                    </div>
                ))}
            </div>

        </>
    )

}
