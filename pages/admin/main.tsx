import { Layout, SideBar } from '@/components/Index'
import styled from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'

export default function Main() {
  return (
    // <Layout title="Ba Madar">
    <Container>
      <SideBar></SideBar>
      <Holder></Holder>
    </Container>
    // {/* </Layout> */}
  )
}

const Container = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Holder = styled.div`
  width: 75%;
  height: 500px;
  background-color: #ddd;
  border-radius: 10px;
`
