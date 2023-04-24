import styled, { css } from 'styled-components'
import { adminPos, karbar } from '@/stores/store'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { config } from '@/utils/main'

export const GetUsers = ({ token }: any): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  const [user, setUser] = useState<[]>([])
  const [kar, setKar] = useAtom(karbar)

  const getuser = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/GetUsers`)
      if (res.status == 200) {
        setUser(res.data)
        console.log(user)
      } else if (res.status == 400) {
        console.log(res.config.data)
      } else {
        console.log('error 500')
      }
    } catch (e) {
      const err = e as AxiosError
      console.log(err)
    }
  }, [kar])
  useEffect(() => {
    getuser()
  }, [token])
  return (
    <Container ac={ac}>
      <div
        className="table"
        onClick={() => {
          setAc('G')
        }}
      >
        <p>موبایل</p>
        <p>موجودی</p>
        <p>نام</p>
      </div>
      {ac === 'Gusers' ? (
        <Card>
          {user.map((data: any, index: any) => (
            <div
              className="all"
              key={index}
              onClick={() => {
                setKar(data.id)
              }}
            >
              <p>0{data.phone}</p>
              <p>{data.balance}</p>
              <p>{data.name}</p>
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
    ac === 'Gusers'
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
    margin-top: 10px;
    background-color: #ddd;
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
