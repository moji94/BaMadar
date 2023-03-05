import { useState } from 'react'
import styled from 'styled-components'
import { BlueMinus, BluePlus } from '../Icons'
import { myStore } from 'stores/store'
import { useAtom } from 'jotai'

export const CartPlus = (): JSX.Element => {
  const [add, setAdd] = useState<string>('')
  const [cart, setCart] = useAtom(myStore)
  let [count, setCount] = useState<number>(1)
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
    <Container>
      {count === 0 ? (
        <div
          onClick={() => {
            addOrder()
          }}
        >
          اضافه کردن
        </div>
      ) : (
        <>
          <div
            className="minus"
            onClick={() => {
              minusOrder()
            }}
          >
            <BlueMinus fill="#f00" />
          </div>
          <div className="amount">
            <p>{count}</p>
          </div>
          <div
            className="plus"
            onClick={() => {
              addOrder()
            }}
          >
            <BluePlus stroke="#f00" />
          </div>
        </>
      )}
    </Container>
  )
}
const Container = styled.div`
  width: 110px;
  height: 31px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 5px #ccc;
  .minus {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .amount {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    p {
      color: #f00;
    }
  }
  .plus {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
