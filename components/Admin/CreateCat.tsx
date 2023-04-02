import styled, { css } from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { config } from '@/utils/main'

export const CreateCat = ({ token }: any): JSX.Element => {
  const [cats, setCats] = useState<[]>([])
  const [name, setName] = useState<string>('')
  const [select, setSelect] = useState<string>('select')
  const [ac, setAc] = useAtom(adminPos)
  console.log(name)
  const getCats = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/GetCat`)
      if (res) {
        if (res.status === 200) {
          setCats(res.data)
        } else if (res.status === 400) {
          console.log(res.status)
        }
      } else {
        console.log('error')
      }
    } catch (e) {
      const err = e as AxiosError
      console.log(err)
    }
  }, [cats])
  const createSubCat = useCallback(async () => {
    const res = await axios.post(`${config}/CreateCat`, {
      type: select,
      name: name,
    })
    if (res) {
      if (res.status == 200) {
        alert('زیر دسته جدید ایجاد شد')
      } else if (res.status == 400) {
        alert('مشکل در ورودی')
      }
    } else {
      alert('problem')
    }
  }, [select])

  useEffect(() => {
    getCats()
  }, [token])
  return (
    <Container ac={ac}>
      {ac === 'Ccat' ? (
        <Card>
          <p>ایجاد دسته</p>
          <Select
            onChange={(event) => {
              setSelect(event.target.value)
              console.log(select)
            }}
          >
            <option value="" hidden>
              انتخاب دسته بندی
            </option>
            {cats.map((data: any, index: any) => (
              <option value={data.id} key={index}>
                {data.name}
              </option>
            ))}
          </Select>
          <input
            className="obj"
            placeholder="نام دسته"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
          <button
            className="create"
            onClick={() => {
              createSubCat()
            }}
          >
            ایجاد
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
    ac === 'Ccat'
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
  .obj {
    width: 75%;
    height: 50px;
    color: #003058;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    direction: rtl;
    padding-right: 10px;
    font-size: 15px;
    font-family: 'Vazir';
  }
  .create {
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-color: #003058;
    border: none;
    font-size: 15px;
    font-family: 'Vazir';
    cursor: pointer;
  }
`
const Select = styled.select`
  width: 75%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  direction: rtl;
  font-family: 'Vazir';

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
