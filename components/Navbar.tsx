import router from 'next/router'
import styled from 'styled-components'
import { BlackHome, Categories, Shop, Profile } from './Icons'

export const Navbar = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Profil onClick={() => router.push('/profile')}>
          <Profile />
          <p>پروفایل</p>
        </Profil>
        <Basket onClick={() => router.push('/')}>
          <Shop />
          <p>سبد خرید</p>
        </Basket>
        <Costumer onClick={() => router.push('/costumersclub')}>
          <div className="circle"></div>
          <img src="/images/diamond.png" />
          <p>باشگاه مشتریان</p>
        </Costumer>
        <Category onClick={() => router.push('/categories')}>
          <Categories />
          <p>دسته بندی</p>
        </Category>
        <Home onClick={() => router.push('/')}>
          <BlackHome />
          <p>خانه</p>
        </Home>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  @media (min-width: 800px) {
    display: none;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px #ccc;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const Home = styled.div`
  width: 75px;
  height: 75px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #333;
  }
`
const Category = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #333;
    font-size: 15px;
  }
`
const Costumer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
  .circle {
    width: 80%;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    z-index: 0;
  }
  img {
    z-index: 2;
    width: 50px;
    height: 50px;
  }
  p {
    color: #333;
    font-size: 15px;
  }
`
const Basket = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #333;
    font-size: 15px;
  }
`
const Profil = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #333;
    font-size: 15px;
  }
`
