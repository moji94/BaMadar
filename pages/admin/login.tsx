import { Layout } from '@/components/Index'
import axios, { AxiosError } from 'axios'
import router from 'next/router'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { config } from '../../utils/main'
export default function Login() {
  const [formData, setFormData] = useState<{
    email: string
    pass: string
  }>({
    email: '',
    pass: '',
  })
  console.log(formData)
  const log: any = useCallback(async () => {
    try {
      const res = await axios.post(`${config}/login`, {
        email: formData.email,
        password: formData.pass,
      })
      if (res) {
        if (res.status === 200) {
          console.log(res.data)
          router.push('/admin/main')
        } else if (res.status === 400) {
          console.log(formData)
        } else {
          console.log('error')
        }
      } else {
        console.warn('we got error here')
      }
    } catch (e) {
      const err = e as AxiosError
      console.log(err)
    }
  }, [formData])

  return (
    <Layout title="Ba Madar">
      <Container>
        <Holder>
          <input
            className="email"
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
            className="pass"
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
          <button
            className="enter"
            onClick={() => {
              log()
            }}
          >
            ورود
          </button>
          <p className="back" onClick={() => router.push('/')}>
            بازگشت
          </p>
        </Holder>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;
`
const Holder = styled.div`
  width: 500px;
  height: 300px;
  background-color: #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .email {
    width: 350px;
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
  .pass {
    width: 350px;
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
  .enter {
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-color: #003058;
    border: none;
    font-size: 15px;
    font-family: 'Vazir';
    cursor: pointer;
  }
  .back {
    color: #003058;
    font-size: 15px;
    font-family: 'Vazir';
    cursor: pointer;
  }
`
