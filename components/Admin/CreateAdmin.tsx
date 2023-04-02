import styled, { css } from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'
import { useCallback, useState } from 'react'
import axios, { Axios, AxiosError } from 'axios'
import { config } from '@/utils/main'

export const CreateAdmin = (): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  const [formData, setFormData] = useState<{
    email: string
    name: string
    pass: string
    phone: string
  }>({
    email: '',
    name: '',
    pass: '',
    phone: '',
  })
  const create = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/CreateAdmin`, {
        name: formData.name,
        password: formData.pass,
        email: formData.email,
        phone: formData.phone,
      })
      if (res) {
        if (res.status == 200) {
          alert('ادمین با موفقیت اضافه شد')
        } else if (res.status == 400) {
          alert('مشکلی وجود دارد')
        } else {
          alert('مشکلی در ورودی هاو جود دارد')
        }
      } else {
        console.warn('we got error here')
      }
    } catch (e) {
      const err = e as AxiosError
    }
  }, [formData])
  return (
    <Container ac={ac}>
      {ac === 'Cadmin' ? (
        <Card>
          <p>ایجاد مدیر</p>
          <input
            className="obj"
            placeholder="نام و نام خانوادگی"
            type="text"
            value={formData.name}
            onChange={(event) => {
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }}
          />
          <input
            className="obj"
            placeholder="پسورد"
            type="password"
            value={formData.pass}
            onChange={(event) => {
              setFormData({
                ...formData,
                pass: event.target.value,
              })
            }}
          />
          <input
            className="obj"
            placeholder="ایمیل"
            type="email"
            value={formData.email}
            onChange={(event) => {
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }}
          />
          <input
            className="obj"
            placeholder="شماره موبایل"
            type="text"
            pattern="[0-9]"
            maxLength={11}
            minLength={11}
            required
            value={formData.phone}
            onChange={(event) => {
              setFormData({
                ...formData,
                phone: event.target.value,
              })
            }}
          />
          <button
            className="create"
            onClick={() => {
              create()
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
    ac === 'Cadmin'
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
