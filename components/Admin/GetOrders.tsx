import styled, { css } from 'styled-components'
import { adminPos, order } from '@/stores/store'
import { useAtom } from 'jotai'
import axios, { AxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { config } from '@/utils/main'

export const GetOrders = ({ token }: any): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  const [orders, setOrders] = useState<[]>([])
  const [ord, setOrd] = useAtom(order)
  const getOrd = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/GetOrders`)
      if (res.status == 200) {
        setOrders(res.data)
        console.log(ord)
      } else if (res.status == 400) {
        console.log(res.config.data)
      } else {
        console.log('problem 500')
      }
    } catch (e) {
      const err = e as AxiosError
      console.log(err)
    }
  }, [ord])
  useEffect(() => {
    getOrd()
  }, [token])
  return (
    <Container ac={ac}>
      <div
        className="table"
        onClick={() => {
          setAc('GSorder')
        }}
      >
        <p>تاریخ</p>
        <p>وضعیت</p>
        <p>نام مشتری</p>
        <p>قیمت</p>
        <p>نام</p>
      </div>
      {ac === 'Gorders' ? (
        <Card>
          {orders.map((data: any, index: any) => (
            <div
              className="all"
              key={index}
              onClick={() => {
                setAc('GSorder')
                setOrd(data.id)
              }}
            >
              <p>{data.created}</p>
              <p>{data.status}</p>
              <p>{data.uId}</p>
              <p>{data.price}</p>
              <p>{data.payLoad}</p>
            </div>
          ))}
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ ac }) =>
    ac === 'Gorders'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  .table {
    width: 60%;
    height: 30px;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    p {
      color: #333;
    }
  }
`

const Card = styled.div`
  width: 80%;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: brown;
  overflow-y: scroll;
  .all {
    width: 80%;
    height: 30px;
    background-color: #ddd;
    margin-top: 10px;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    p {
      color: #333;
    }
  }
`
