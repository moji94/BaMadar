import { useState } from 'react'
import styled, { css } from 'styled-components'
import { BlueMinus, BluePlus, PlusIcon, Trash } from './Icons'
import { myStore } from 'stores/store'
import { useAtom } from 'jotai'

interface Props {
  title: string
}

export const Plus = (title: Props): JSX.Element => {
  const [add, setAdd] = useState<string>('')
  const [cart, setCart] = useAtom(myStore)
  let [count, setCount] = useState<number>(0)
  const product = title
  //   const addToCart = (product) => {
  //     const myCart = cart
  //     const existingProduct = myCart.map((singleProduct) => {
  //       return singleProduct.title === product
  //     })
  //     if (existingProduct) {
  //       const newCart = myCart.map((singleProduct) => {
  //         singleProduct.title === product && product.count++
  //       })
  //     } else {
  //       const newCart = myCart.push(product)
  //       setCart(newCart)
  //     }
  //   }
  const addOrder = () => {
    count++
    setCount(count)
    setCart([])
    console.log(cart)
  }
  const minusOrder = () => {
    count--
    setCount(count)
    setCart([])
    console.log(cart)
  }
  return (
    <Container
      add={add}
      onClick={() => {
        if (add === '') {
          setAdd('add')
          addOrder()
        }
      }}
    >
      <div className="box">
        {add === 'add' ? (
          <div>
            {count == 1 ? (
              <div
                className="addminus"
                onClick={() => {
                  minusOrder()
                  if (count == 0) {
                    setAdd('')
                  }
                }}
              >
                <Trash />
              </div>
            ) : (
              <div
                className="addminus"
                onClick={() => {
                  minusOrder()
                }}
              >
                <BlueMinus />
              </div>
            )}
            <p>{count}</p>
            <div
              className="addminus"
              onClick={() => {
                addOrder()
              }}
            >
              <BluePlus />
            </div>
          </div>
        ) : (
          <PlusIcon />
        )}
      </div>
    </Container>
  )
}
const Container = styled.div<{ add: string }>`
  width: 31.6px;
  height: 50px;
  background-color: rgb(23, 155, 191);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 300ms;
  cursor: pointer;
  top: 0;
  right: 0;
  border-radius: 0px 10px 0px 12px;
  .box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      color: rgb(23, 155, 191);
    }
    div {
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .addminus {
        width: 33%;
        cursor: pointer;
      }
    }
  }
  ${({ add }) =>
    add === 'add'
      ? css`
          cursor: default;
          width: 55%;
          background-color: #fff;
          border: 1px solid #ddd;
        `
      : css``}
`
