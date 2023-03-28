import styled, { css } from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'

export const GetUsers = (): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  return (
    <Container ac={ac}>
      <div
        className="table"
        onClick={() => {
          setAc('G')
        }}
      >
        <p>موبایل</p>
        <p>موجودی</p>
        <p>نام</p>
      </div>
      {ac === 'Gusers' ? (
        <Card>
          <div className="all">
            <p>9166467731</p>
            <p>60000</p>
            <p>مجتبی</p>
          </div>
        </Card>
      ) : (
        <div></div>
      )}
    </Container>
  )
}

const Container = styled.div<{ ac: string }>`
  width: 100%;
  height: 500px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ ac }) =>
    ac === 'Gusers'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  .table {
    width: 60%;
    height: 30px;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    p {
      color: #333;
    }
  }
`

const Card = styled.div`
  width: 80%;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: brown;
  overflow-y: scroll;
  .all {
    width: 80%;
    height: 30px;
    margin-top: 10px;
    background-color: #ddd;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    p {
      color: #333;
    }
  }
`
