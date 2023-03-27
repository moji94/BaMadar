import styled, { css } from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'

export const GetSingleOrder = (): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  return (
    <Container ac={ac}>
      {ac === 'GSorder' ? (
        <Card>
          <div className="all name">
            <p>ضدعرق</p>
            <p>:نام محصول</p>
          </div>
          <div className="all count">
            <p>2</p>
            <p>تعداد:</p>
          </div>
          <div className="all costumer">
            <p>مجتبی</p>
            <p>:نام مشتری</p>
          </div>
          <div className="all price">
            <p>60000</p>
            <p>:قیمت</p>
          </div>
          <div className="all status">
            <p>درحال انتظار</p>
            <p>:وضعیت</p>
          </div>
          <div className="all time">
            <p>6\5\1402</p>
            <p>:تاریخ سفارش</p>
          </div>
          <button
            className="back"
            onClick={() => {
              setAc('Gorders')
            }}
          >
            بازگشت
          </button>
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
  align-items: center;
  justify-content: center;
  ${({ ac }) =>
    ac === 'GSorder'
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
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
    p {
      color: #333;
    }
  }
  .back {
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
