import { Layout } from '@/components/Index'
import router from 'next/router'
import styled from 'styled-components'

export default function Login() {
  return (
    <Layout title="Ba Madar">
      <Container>
        <Holder>
          <input className="email" placeholder="ایمیل" />
          <input className="pass" placeholder="پسورد" />
          <button className="enter">ورود</button>
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
