import {
  Layout,
  SideBar,
  CreateAdmin,
  CreateCat,
  CreateProd,
  GetOrders,
  GetSingleOrder,
  GetUsers,
} from '@/components/Index'
import styled from 'styled-components'

export default function Main(token: any) {
  return (
    // <Layout title="Ba Madar">
    <Container>
      <SideBar></SideBar>
      <Holder>
        <CreateAdmin></CreateAdmin>
        <CreateCat token={token}></CreateCat>
        <CreateProd token={token}></CreateProd>
        <GetOrders token={token}></GetOrders>
        <GetSingleOrder token={token}></GetSingleOrder>
        <GetUsers></GetUsers>
      </Holder>
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
