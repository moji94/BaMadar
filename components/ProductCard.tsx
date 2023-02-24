import styled from 'styled-components'
import { PlusIcon } from './Icons'

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
      <Plus>
        <PlusIcon />
      </Plus>
      <PicSec>
        <img src={img} alt={alt} className="pic" />
      </PicSec>
      <Details>
        <p>{title}</p>
      </Details>
      <Price>
        <div className="red">
          <p>{dis}%</p>
        </div>
        <div className="true">
          <p>ریال{price}</p>
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
  /* margin-left: 30px; */
  /* position: absolute; */
  z-index: 0;
`

const Plus = styled.div`
  width: 31.6px;
  height: 50px;
  background-color: rgb(23, 155, 191);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;
  border-radius: 0px 10px 0px 15px;
`
const PicSec = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  top: -50px;
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
  height: 50px;
  position: relative;
  top: -30px;
  display: block;
  text-align: right;
  padding-right: 10px;
  p {
    color: #333;
    font-size: 13px;
  }
`
const Price = styled.div`
  width: 100%;
  height: 25px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  top: -30px;
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
  position: relative;
  top: -30px;
  p {
    color: #666;
    font-size: 12px;
    text-align: right;
    padding-right: 25px;
    text-decoration-line: line-through;
  }
`
