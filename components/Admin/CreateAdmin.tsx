import styled from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'

export const CreateAdmin = (): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  return (
    <Container>
      {ac === 'Cadmin' ? (
        <Card>
          <p>ایجاد مدیر</p>
          <input className="obj" placeholder="نام و نام خانوادگی" />
          <input className="obj" placeholder="پسورد" />
          <input className="obj" placeholder="ایمیل" />
          <input className="obj" placeholder="شماره موبایل" />
          <button
            className="create"
            onClick={() => {
              setAc('none')
            }}
          >
            ایجاد
          </button>
        </Card>
      ) : (
        <div></div>
      )}
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Card = styled.div`
  width: 80%;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: brown;
  .obj {
    width: 75%;
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
  .create {
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-color: #003058;
    border: none;
    font-size: 15px;
    font-family: 'Vazir';
    cursor: pointer;
  }
`
