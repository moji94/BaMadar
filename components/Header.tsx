import styled from 'styled-components'
import Image from 'next/image'
import {
  Categories,
  Chart,
  Discounts,
  Home,
  Profile,
  Search,
  Shop,
  Ticket,
} from './Icons'
import Link from 'next/link'
import router from 'next/router'

export const Header = (): JSX.Element => {
  return (
    <Container>
      <HeadT>
        <HeadTIcons>
          <div>
            <Chart />
            <Shop />
            <div onClick={() => router.push('/profile')}>
              <Profile />
            </div>
          </div>
        </HeadTIcons>
        <HeadTSearch>
          <input placeholder="جستجوی محصول یا برند ..." />
          <div>
            <Search />
          </div>
        </HeadTSearch>
        <HeadTLogo>
          <Image
            src="/images/Logo.png"
            alt="Picture of the author"
            width={45}
            height={45}
            onClick={() => router.push('/')}
          />
        </HeadTLogo>
      </HeadT>
      <HeadM>
        <Discount onClick={() => router.push('/wonderfuloffers')}>
          <p>تخفیفات شگفت انگیز</p>
          <Discounts />
        </Discount>
        <Club onClick={() => router.push('/costumersclub')}>
          <p>باشگاه مشتریان</p>
          <Ticket />
        </Club>
        <Category onClick={() => router.push('/categories')}>
          <p>دسته بندی ها</p>
          <Categories />
        </Category>
        <Madar onClick={() => router.push('/')}>
          <p>فروشگاه بامادر</p>
          <Home />
        </Madar>
      </HeadM>
      <Line />
      <HeadB>
        <Status>
          <Award>
            <img
              src="/images/present.svg"
              alt="diamond"
              width="20"
              height="20"
            />
            <p>جوایز</p>
          </Award>
          <Inventory>
            {' '}
            <p>0</p>
            <p>:موجودی شما</p>
          </Inventory>
          <ClubScore>
            <p>0</p>
            <p>:امتیاز باشگاه</p>
            <img
              src="/images/diamond-yellow.svg"
              alt="diamond"
              width="20"
              height="20"
            />
          </ClubScore>
          <AllScore>
            <p>0</p>
            <p>:امتیاز کل</p>
            <img
              src="/images/diamond.svg"
              alt="diamond"
              width="20"
              height="20"
            />
          </AllScore>
        </Status>
        <Details>
          <div className="right">
            <p>تخفیفات شهر تفریحی مادر</p>
          </div>
          <div className="left" onClick={() => router.push('/ccbenefits')}>
            <p>مزایای باشگاه مشتریان</p>
          </div>
        </Details>
      </HeadB>
    </Container>
  )
}

const Container = styled.div`
  width: 98%;
  height: auto;
  box-shadow: 0px 2px 3px #ddd;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 1;
  @media (max-width: 800px) {
    transition: all 500px;
    display: none;
  }
  @media (max-width: 1100px) {
    padding-bottom: 10px;
  }
`
const HeadT = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`
const HeadTIcons = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 150ms ease 0s;
  fill: rgb(255, 255, 255);
  padding-left: 40px;
  div {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const HeadTSearch = styled.div`
  width: 55%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 90%;
    height: 90%;
    background-color: #eee;
    border-radius: 5px;
    font-family: 'Vazir';
    color: #333;
    direction: rtl;
    padding-right: 40px;
    font-size: 16px;
    border: 0.0625rem solid transparent;
    transition: border 0.3s ease-in-out 0s;
  }
  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const HeadTLogo = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
`
const HeadM = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-left: 50px;
  padding-right: 150px;
`
const Madar = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  cursor: pointer;
  p {
    margin-right: 5px;
    font-size: 14px;
    color: #333;
  }
`
const Category = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  cursor: pointer;
  p {
    margin-right: 5px;
    font-size: 14px;
    color: #333;
  }
`
const Club = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  cursor: pointer;
  p {
    margin-right: 5px;
    font-size: 14px;
    color: #333;
  }
`
const Discount = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  cursor: pointer;
  p {
    margin-right: 5px;
    font-size: 14px;
    color: #333;
  }
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #bbb;
`
const HeadB = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 150px;
  padding-left: 100px;
  @media (max-width: 1100px) {
    height: 80px;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-end;
  }
`
const Details = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  .right {
    padding-right: 10px;
    p {
      color: #333;
      font-size: 14px;
    }
  }
  .left {
    padding-right: 20px;
    cursor: pointer;
    p {
      color: #333;
      font-size: 14px;
    }
  }
`
const Status = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`
const AllScore = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;

  p {
    color: #333;
    font-size: 16px;
    margin-right: 3px;
  }
`
const ClubScore = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  p {
    color: #333;
    font-size: 16px;
    margin-right: 3px;
  }
`

const Inventory = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  p {
    color: #333;
    font-size: 16px;
    margin-right: 3px;
  }
`
const Award = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  p {
    color: #333;
    font-size: 16px;
    margin-right: 3px;
  }
  img {
    margin-right: 10px;
  }
`
