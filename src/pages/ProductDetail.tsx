import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product'
interface IProps {
    products: IProduct[]
}

const ProductDetailPage = (props: IProps) => {
    const { id } = useParams()
    const currentProduct = props.products.find(item => item.id == Number(id))
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flex: 1,


        }}>

            <div style={{
                flex: 1, display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '20px',
            }}>
                <div className="left-column" style={{
                    height: '100%',
                    padding: '20px'
                }}>
                    <h3>{currentProduct?.name}</h3>
                    <img src={currentProduct?.image} alt={currentProduct?.name} />
                    <p>{currentProduct?.price}</p>
                </div>

            </div>
            <div style={{ flex: 1 }}>
                <div className="right-column" style={{
                    height: '100%',
                    padding: '20px'
                }}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsum ratione alias dicta voluptates aperiam nobis quae accusantium non cupiditate architecto recusandae officia molestias, laboriosam ducimus veritatis, ipsam deserunt. Aliquid!</p>
                </div>
            </div>
        </main>
    )
}

export default ProductDetailPage