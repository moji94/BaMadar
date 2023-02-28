import styled from 'styled-components'
import { PlusIcon } from '../Icons'
import { useAtom } from 'jotai'
import { productActivation } from 'stores/store'

interface Props {
  img?: any
  alt: string
  title: string
  price: number
  dis: number
  orgPrice: number
}

export const PProductCard = ({
  img,
  alt,
  title,
  price,
  dis,
  orgPrice,
}: Props): JSX.Element => {
  const [ac, setAc] = useAtom(productActivation)
  return (
    <Card>
      <Plus>
        <PlusIcon />
      </Plus>
      <InnerCard
        onClick={() => {
          if (ac === '') {
            setAc('now')
            // setSit('momo')
            // setStand('red')
          } else {
            setAc('')
            // setSit('')
            // setStand('')
          }
        }}
      >
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
            <h4>ریال{price}</h4>
          </div>
        </Price>
        <Discount>
          <p>{orgPrice}</p>
        </Discount>
      </InnerCard>
    </Card>
  )
}
const Card = styled.div`
  width: 160px;
  height: 250px;
  box-shadow: 5px 5px 5px #ddd;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  position: relative;
  background-color: #fff;
  border: 0.5px solid #ddd;
`
const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 500ms;
`
const Plus = styled.div`
  width: 31.6px;
  height: 50px;
  background-color: rgb(23, 155, 191);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0px 10px 0px 10px;
  z-index: 1;
`
const PicSec = styled.div`
  width: 75%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .pic {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`
const Details = styled.div`
  width: 100%;
  height: 50px;
  padding-right: 5px;
  p {
    color: #333;
    font-size: 13px;
    text-align: right;
  }
`
const Price = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;
  .true {
    text-align: right;
    h4 {
      font-size: 13px;
      color: #333;
      text-align: right;
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
  height: 15px;
  p {
    color: #666;
    font-size: 12px;
    text-align: right;
    padding-right: 25px;
    text-decoration-line: line-through;
  }
`
