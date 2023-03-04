import styled from 'styled-components'
import { Instagram } from './Icons'

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <Contact>
        <Instagram />
        <p>:ما را در شبکه های اجتماعی دنبال کنید</p>
      </Contact>
      <Support>
        <Left>
          <div>
            <h3>آدرس</h3>
            <p>دزفول، بلوار پیام آوران، تقاطع آفرینش، شهر تفریحی مادر</p>
          </div>
          <img src="/images/map.svg" alt={'support'} width={50} height={50} />
        </Left>
        <Right>
          <div>
            <h3>پشتیبانی در ساعات کاری</h3>
            <p>بامادر همه روزه از ساعت 8 الی 23 در کنار شماست</p>
            <p>شماره تماس : 3833-061</p>
          </div>
          <img
            src="/images/support.svg"
            alt={'support'}
            width={50}
            height={50}
          />
        </Right>
      </Support>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: rgb(0, 48, 88);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
const Contact = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 200px;
  p {
    margin-right: 30px;
    margin-left: 10px;
  }
`
const Support = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-right: 40px;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  @media (max-width: 800px) {
    width: 100%;
  }
  div {
    margin-right: 20px;
  }
  h3 {
    color: #333;
    text-align: right;
    @media (max-width: 800px) {
      font-size: 18px;
    }
  }
  img {
    margin-right: 10px;
  }
  p {
    text-align: right;
    color: #333;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 15px;
    padding-bottom: 20px;
  }
  div {
    margin-right: 20px;
  }
  h3 {
    color: #333;
    text-align: right;
    @media (max-width: 800px) {
      font-size: 18px;
    }
  }
  img {
    margin-right: 10px;
  }
  p {
    text-align: right;
    color: #333;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`
