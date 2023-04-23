import styled, { css } from 'styled-components'
import { adminPos, order } from '@/stores/store'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { config } from '@/utils/main'

export const GetSingleOrder = ({ token }: any): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  const [ord, setOrd] = useAtom(order)
  const [detail, setDitail] = useState<any>()
  const getOrd = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/GetOrderById`, { id: ord })
      if (res.status == 200) {
        setDitail(res.data)
        console.log(detail)
      } else if (res.status == 400) {
        console.log(res.config.data)
      } else {
        console.log('error 500')
      }
    } catch (e) {
      const err = e as AxiosError
      console.log(err)
    }
  }, [detail])
  useEffect(() => {
    getOrd()
  }, [token])
  return (
    <Container ac={ac}>
      {ac === 'GSorder' ? (
        <Card>
          {detail.map((data: any, index: any) => (
            <div className="gg" key={index}>
              <div className="all name">
                <p>{data.id}</p>
                <p>:نام محصول</p>
              </div>
              <div className="all count">
                <p>{data.payLoad}</p>
                <p>تعداد:</p>
              </div>
              <div className="all costumer">
                <p>{data.uId}</p>
                <p>:نام مشتری</p>
              </div>
              <div className="all price">
                <p>{data.price}</p>
                <p>:قیمت</p>
              </div>
              <div className="all status">
                <p>{data.status}</p>
                <p>:وضعیت</p>
              </div>
              <div className="all time">
                <p>{data.updated}</p>
                <p>:تاریخ سفارش</p>
              </div>
            </div>
          ))}
          <button
            className="back"
            onClick={() => {
              setAc('Gorders')
            }}
          >
            بازگشت
          </button>
        </Card>
      ) : (
        <div></div>
      )}
    </Container>
  )
}

const Container = styled.div<{ ac: string }>`
  width: 100%;
  height: 500px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ ac }) =>
    ac === 'GSorder'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`
const Card = styled.div`
  width: 80%;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: brown;
  .all {
    width: 75%;
    height: 50px;
    background-color: #ddd;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p {
      color: #333;
    }
  }
  .back {
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-color: #003058;
    border: none;
    font-size: 15px;
    font-family: 'Vazir';
    cursor: pointer;
  }
  .gg {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 30px;
  }
  .name {
    border-radius: 5px 5px 0px 0px;
  }
  .time {
    border-radius: 0px 0px 5px 5px;
  }
`
