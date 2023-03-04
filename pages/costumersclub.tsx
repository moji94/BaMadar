import { Auth, Telegram } from '@/components/Icons'
import { Layout, Header, Navbar } from '@/components/Index'
import { useState } from 'react'
import styled, { css } from 'styled-components'

export default function Costumersclub() {
  const [color, setColor] = useState<string>('#ccc')
  return (
    <Layout title="Ba Madar">
      <Header></Header>
      <Container>
        <Process color={color}>
          <div className="tel">
            <Telegram />
            <h4>ورود اطلاعات</h4>
          </div>
          <div className="line" />
          <div className="auth">
            <Auth fill={color} />
            <h4 className="h4">اعتبار سنجی</h4>
          </div>
        </Process>
        <GetNum color={color}>
          {color === '#ccc' ? (
            <div className="wrapper">
              <img src="/images/rocket.svg" className="img" />
              <input className="input" placeholder=":شماره موبایل" />
              <p className="p">
                لطفا شماره موبایل خود را وارد کرده و دکمه دریافت کد تایید را
                بزنید تا کد تایید از طریق پیامک برای شما ارسال شود
              </p>
              <button
                className="button"
                onClick={() => {
                  setColor('#333')
                }}
              >
                دریافت کد تایید
              </button>
            </div>
          ) : (
            <div className="wrapper">
              <img src="/images/shield.svg" className="img" />
              <input className="input" placeholder=":کد دریافت شده" />
              <p className="p">
                پس از دریافت پیامک حاوی کد تایید، کد را وارد کرده و سپس دکمه
                تاییدرا بزنید
              </p>
              <button
                className="button"
                onClick={() => {
                  setColor('#333')
                }}
              >
                تایید
              </button>
              <p
                className="change"
                onClick={() => {
                  setColor('#ccc')
                }}
              >
                تغییر شماره
              </p>
            </div>
          )}
        </GetNum>
      </Container>
      <Navbar></Navbar>
    </Layout>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 170px;

  @media (max-width: 1100px) {
    padding-top: 210px;
  }
  @media (max-width: 800px) {
    padding-top: 20px;
  }
`
const Process = styled.div<{ color: string }>`
  width: 60%;
  min-width: 450px;
  height: 100px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .tel {
    width: 100px;
    height: 70px;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .line {
    width: 70%;
    height: 2px;
    background-color: #ccc;
    margin-bottom: 25px;
  }
  .auth {
    width: 100px;
    height: 70px;
    color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  ${({ color }) =>
    color === '#333'
      ? css`
          .line {
            background-color: #ff0000;
          }
          .h4 {
            color: #333;
          }
          .img {
            transform: none;
          }
        `
      : css``}
`
const GetNum = styled.div<{ color: string }>`
  width: 60%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  .wrapper {
    background-color: #fff;
    width: 70%;
    min-width: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    position: relative;
    margin-bottom: 20px;
  }
  .img {
    transform: rotate(-45deg);
    width: 100px;
    height: 200px;
  }
  .input {
    width: 90%;
    height: 50px;
    text-align: right;
    padding-right: 10px;
    font-family: 'Vazir';
    font-size: 20px;
    color: #333;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px #ccc;
  }
  .p {
    font-size: 13px;
    color: #333;
    margin-top: 10px;
    text-align: right;
  }
  .button {
    width: 150px;
    height: 44px;
    border: none;
    border-radius: 10px;
    background-color: rgb(23, 155, 191);
    font-family: 'Vazir';
    font-size: 16px;
    margin-top: 30px;
    cursor: pointer;
  }
  .change {
    color: red;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 10px;
    margin-left: 20px;
    cursor: pointer;
  }
  ${({ color }) =>
    color === '#333'
      ? css`
          .img {
            transform: none;
          }
        `
      : css``}
`
