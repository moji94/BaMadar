import styled, { css } from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { config } from '@/utils/main'

export const CreateProd = ({ token }: any): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  const [cats, setCats] = useState<[]>([])
  const [subCats, setSubCats] = useState<[]>([])
  const [select, setSelect] = useState<string>('select')
  const [formData, setFormData] = useState<{
    name: string
    comment: string
    perc: string
    subcatId: string
    mainSl: number
    mostSell: number
    wonder: number
  }>({
    name: '',
    comment: '',
    perc: '',
    subcatId: '',
    mainSl: 0,
    mostSell: 0,
    wonder: 0,
  })
  //
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
  //
  const getSubCats = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/GetSubCat`, { id: select })
      if (res) {
        if (res.status === 200) {
          setSubCats(res.data)
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
  }, [select])
  //
  useEffect(() => {
    getSubCats()
  }, [select])
  useEffect(() => {
    getCats()
  }, [token])
  const create = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/CreateProd`, { formData })
      if (res.status == 200) {
        alert('200')
      } else if (res.status == 400) {
        alert('400')
      }
    } catch (e) {
      const err = e as AxiosError
      alert(err)
    }
  }, [formData])
  return (
    <Container ac={ac}>
      {ac === 'Cprod' ? (
        <Card>
          <p>ایجاد محصول</p>
          <input
            className="obj"
            placeholder="نام محصول"
            value={formData.name}
            onChange={(event) => {
              setFormData({
                ...formData,
                name: event.target.value,
              })
              console.log(formData)
            }}
          />
          <input
            className="obj"
            placeholder="توضیح"
            value={formData.comment}
            onChange={(event) => {
              setFormData({
                ...formData,
                comment: event.target.value,
              })
            }}
          />
          <input
            className="obj"
            placeholder="مقدار تخفیف"
            value={formData.perc}
            onChange={(event) => {
              setFormData({
                ...formData,
                perc: event.target.value,
              })
            }}
          />
          <Select
            onChange={(event) => {
              setSelect(event.target.value)
              getSubCats()
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
          <Select
            onChange={(event) => {
              setFormData({ ...formData, subcatId: event.target.value })
            }}
          >
            <option value="" hidden>
              انتخاب زیر دسته
            </option>
            {subCats.map((data: any, index: any) => (
              <option value={data.id} key={index}>
                {data.name}
              </option>
            ))}
          </Select>
          <Box>
            <p>اسلایدر اصلی</p>
            <input
              type="checkbox"
              value={formData.mainSl}
              onChange={() => {
                if (formData.mainSl == 0) {
                  setFormData({
                    ...formData,
                    mainSl: 1,
                  })
                } else {
                  setFormData({
                    ...formData,
                    mainSl: 0,
                  })
                }
              }}
            />
          </Box>
          <Box>
            <p>پرفروش ها</p>
            <input
              type="checkbox"
              value={formData.mostSell}
              onChange={() => {
                if (formData.mostSell == 0) {
                  setFormData({
                    ...formData,
                    mostSell: 1,
                  })
                } else {
                  setFormData({
                    ...formData,
                    mostSell: 0,
                  })
                }
              }}
            />
          </Box>
          <Box>
            <p>تخفیفات شگفت انگیز</p>
            <input
              type="checkbox"
              value={formData.wonder}
              onChange={() => {
                if (formData.wonder == 0) {
                  setFormData({
                    ...formData,
                    wonder: 1,
                  })
                } else {
                  setFormData({
                    ...formData,
                    wonder: 0,
                  })
                }
              }}
            />
          </Box>
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
    ac === 'Cprod'
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
  border-radius: 5px;
  margin-right: 5px;
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
const Box = styled.div`
  width: 75%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  p {
    padding-right: 10px;
  }
`
