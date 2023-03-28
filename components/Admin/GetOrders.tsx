import styled, { css } from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'

export const GetOrders = (): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  return (
    <Container ac={ac}>
      <div
        className="table"
        onClick={() => {
          setAc('GSorder')
        }}
      >
        <p>تاریخ</p>
        <p>وضعیت</p>
        <p>نام مشتری</p>
        <p>قیمت</p>
        <p>نام</p>
      </div>
      {ac === 'Gorders' ? (
        <Card>
          <div
            className="all"
            onClick={() => {
              setAc('GSorder')
            }}
          >
            <p>6\5\1402</p>
            <p>درحال انتظار</p>
            <p>مجتبی</p>
            <p>60000</p>
            <p>ضدعرق</p>
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
    ac === 'Gorders'
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
  justify-content: space-evenly;
  background-color: brown;
  .all {
    width: 75%;
    height: 30px;
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
