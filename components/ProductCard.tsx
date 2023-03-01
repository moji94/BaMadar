import styled from 'styled-components'
import { PlusIcon } from './Icons'
import { Plus } from './Plus'

interface Props {
  img?: any
  alt: string
  title: string
  price: number
  dis: number
  orgPrice: number
}

export const ProductCard = ({
  img,
  alt,
  title,
  price,
  dis,
  orgPrice,
}: Props): JSX.Element => {
  return (
    <Container>
      <Plus title={title}></Plus>
      <PicSec>
        <img src={img} alt={alt} className="pic" />
      </PicSec>
      <Details>
        <p>{title}</p>
      </Details>
      <Price>
        <div className="true">
          <p>ریال{price}</p>
        </div>
        <div className="red">
          <p>{dis}%</p>
        </div>
      </Price>
      <Discount>
        <p>{orgPrice}</p>
      </Discount>
    </Container>
  )
}
const Container = styled.div`
  width: 170px;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  z-index: 0;
  border: 2px solid #eee;
  position: relative;
`
const PicSec = styled.div`
  width: 100%;
  height: 50%;

  .pic {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }
`
const Details = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  padding-right: 10px;

  p {
    color: #333;
    font-size: 13px;
  }
`
const Price = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;
  .true {
    text-align: right;
    p {
      font-size: 13px;
      color: #333;
    }
  }
  .red {
    width: 50px;
    height: 25px;
    border-radius: 7px;
    text-align: center;
    color: #fff;
    background-color: rgb(236, 59, 79);
  }
`
const Discount = styled.div`
  width: 100%;
  height: 25px;
  p {
    color: #666;
    font-size: 12px;
    text-align: right;
    padding-right: 25px;
    text-decoration-line: line-through;
  }
`
