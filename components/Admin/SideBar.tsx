import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'
import router from 'next/router'
import styled from 'styled-components'

export const SideBar = (): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  return (
    <Container>
      <Ps
        onClick={() => {
          setAc('Cadmin')
        }}
      >
        <p>ایجاد مدیر</p>
      </Ps>
      <Ps
        onClick={() => {
          setAc('Ccat')
        }}
      >
        <p>ایجاد دسته</p>
      </Ps>
      <Ps
        onClick={() => {
          setAc('Cprod')
        }}
      >
        <p>ایجاد محصول</p>
      </Ps>
      <Ps
        onClick={() => {
          setAc('Gorders')
        }}
      >
        <p>لیست سفارشات</p>
      </Ps>
      <Ps
        onClick={() => {
          setAc('Gusers')
        }}
      >
        <p>لیست کاربران</p>
      </Ps>
      <button className="back" onClick={() => router.push('/')}>
        رفتن به صفحه اصلی
      </button>
    </Container>
  )
}
const Container = styled.div`
  width: 100px;
  height: 700px;
  background-color: aqua;
  margin-left: auto;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .back {
    width: 75px;
    height: 50px;
    border-radius: 5px;
    background-color: #003058;
    border: none;
    font-size: 15px;
    font-family: 'Vazir';
    cursor: pointer;
  }
`
const Ps = styled.div`
  width: 75px;
  height: 50px;
  background-color: orange;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  p {
    color: #333;
    text-align: center;
  }
`
