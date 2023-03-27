import styled, { css } from 'styled-components'
import { adminPos } from '@/stores/store'
import { useAtom } from 'jotai'

export const CreateProd = (): JSX.Element => {
  const [ac, setAc] = useAtom(adminPos)
  return (
    <Container ac={ac}>
      {ac === 'Cprod' ? (
        <Card>
          <p>ایجاد محصول</p>
          <input className="obj" placeholder="نام محصول" />
          <input className="obj" placeholder="توضیح" />
          <input className="obj" placeholder="مقدار تخفیف" />
          <Select>
            <option value="" hidden>
              انتخاب دسته بندی
            </option>
            <option value="1">ارایشی و بهداشتی</option>
            <option value="2">موادغذایی</option>
          </Select>
          <Select>
            <option value="" hidden>
              انتخاب زیر دسته
            </option>
            <option value="1">ضدعرق</option>
            <option value="2">خوش بو کننده</option>
          </Select>
          <Box>
            <p>اسلایدر اصلی</p>
            <input
              type="checkbox"
              // checked={hasPromo}
            />
          </Box>
          <Box>
            <p>پرفروش ها</p>
            <input
              type="checkbox"
              // checked={hasPromo}
            />
          </Box>
          <Box>
            <p>تخفیفات شگفت انگیز</p>
            <input
              type="checkbox"
              // checked={hasPromo}
            />
          </Box>
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

const Container = styled.div<{ ac: string }>`
  width: 100%;
  height: 500px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ ac }) =>
    ac === 'Cprod'
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

const Select = styled.select`
  width: 75%;
  height: 35px;
  background: white;
  color: gray;
  border-radius: 5px;
  margin-right: 5px;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  direction: rtl;
  font-family: 'Vazir';

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
const Box = styled.div`
  width: 75%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  p {
    padding-right: 10px;
  }
`
