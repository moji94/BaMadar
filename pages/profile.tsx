import {
  Application,
  Complate,
  Order,
  Phone,
  Question,
  Quit,
  Roles,
} from '@/components/Icons'
import { Layout, Header, Navbar } from '@/components/Index'
import { useState } from 'react'
import styled from 'styled-components'

export default function Categories() {
  const [enter, setEnter] = useState<string>('not')
  return (
    <Layout title="Ba Madar">
      <Header></Header>
      <Container>
        <Wrapper>
          <div className="left">
            <div className="order">
              <Order />
              <p>آخرین سفارشات</p>
            </div>
            <div className="order">
              <Question />
              <p>آموزش کار با بامادر</p>
            </div>
            <div className="order">
              <Phone />
              <p>تماس با پشتیبانی</p>
            </div>
          </div>
          <div className="right">
            <img src="/images/man.svg" />
            <div className="profilebox">
              {enter === 'not' ? (
                <div
                  className="not"
                  onClick={() => {
                    setEnter('enter')
                  }}
                >
                  <p>ورود به سامانه و تکمیل اطلاعات</p>
                  <Complate />
                </div>
              ) : (
                <div className="enter">
                  <div className="name">
                    <h4>09367028267</h4>
                    <p>:شماره موبایل</p>
                  </div>
                  <div className="name">
                    <h4>مجتبی بهادری زاده</h4>
                    <p>:نام و نام خانوادگی</p>
                  </div>
                  <div className="name">
                    <h4>دزفول،خیابان ایمان بین عارف و دهقان پلاک 389</h4>
                    <p>:نام و نام خانوادگی</p>
                  </div>
                  <button
                    className="info"
                    onClick={() => {
                      setEnter('not')
                    }}
                  >
                    ویرایش اطلاعات
                  </button>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
        <Under>
          <div className="under">
            <p>نصب اپلیکیشن</p>
            <Application />
          </div>
          <div className="under">
            <p>قوانین و مقررات</p>
            <Roles />
          </div>
          <div className="under q">
            <p>خروج</p>
            <Quit />
          </div>
        </Under>
      </Container>
      <Navbar></Navbar>
    </Layout>
  )
}
const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  .left {
    width: 20%;
    height: 450px;
    min-height: 400px;
    background-color: #fff;
    box-shadow: 3px 0px 3px #ddd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5px;
    margin-bottom: 5px;
    .order {
      width: 120px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      p {
        margin-top: 10px;
        color: #333;
        text-align: center;
      }
    }
  }
  .right {
    width: 70%;
    height: 450px;
    background-color: #fff;
    box-shadow: 5px 0px 5px #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    .profilebox {
      width: 90%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    .not {
      width: 100%;
      height: 50px;
      background-color: #fff;
      box-shadow: 3px 1px 3px #ddd;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
      cursor: pointer;
      p {
        text-align: right;
        color: #333;
        padding-right: 10px;
      }
    }
    .enter {
      width: 90%;
      height: auto;
      /* background-color: pink; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .name {
        width: 100%;
        height: 50px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #ccc;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 20px;
        p {
          color: #333;
        }
        h4 {
          color: #333;
        }
      }
      .info {
        width: 130px;
        height: 40px;
        background-color: #f50057;
        font-family: 'Vazir';
        font-size: 17px;
        border: none;
        border-radius: 5px;
        margin-top: 35px;
        /* margin-left: 20px; */
        margin-right: auto;
        margin-bottom: 10px;
      }
    }
  }
`
const Under = styled.div`
  width: 70%;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  .under {
    width: 95%;
    height: 50px;
    border-top: 2px solid #ccc;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    p {
      color: #333;
      margin-right: 10px;
    }
  }
  .q {
    border-bottom: 2px solid #ccc;
  }
`
