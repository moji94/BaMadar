import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'
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
      <Ps>
        <p>ایجاد مدیر</p>
      </Ps>
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
  p {
    color: #333;
  }
`
