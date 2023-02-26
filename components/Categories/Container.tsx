import { useState } from 'react'
import styled, { css } from 'styled-components'
import { CategoryCard } from './CategoryCard'

export const Container = (): JSX.Element => {
  const [inner, setInner] = useState<string>('')
  const [sit, setSit] = useState<string>('')
  const [stand, setStand] = useState<string>('')
  const array = [
    {
      img: '/image/drink.png',
      title: 'نوشیدنی',
      subjects:
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
    },
    {
      img: '/image/protein.png',
      title: 'مواد پروتئینی',
      subjects:
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
    },
    {
      img: '/image/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects:
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
    },
    {
      img: '/image/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects:
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
    },
    {
      img: '/image/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects:
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
    },
    {
      img: '/image/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects:
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
    },
  ]
  return (
    <InnerContainer inner={inner}>
      <Card inner={inner} className={sit}>
        <div className="out"></div>
        <div className={`in ${stand}`}>
          <InnerCard className="card">
            <div className={`left ${stand}`}>
              <img
                className="select"
                src="/images/digital.png"
                width={100}
                height={100}
              />
              <p className="select">لوازم جانبی موبایل و کامپیوتر</p>
              <h4
                className="select"
                onClick={() => {
                  if (inner === '') {
                    setInner('now')
                    setSit('momo')
                    setStand('red')
                  } else {
                    setInner('')
                    setSit('')
                    setStand('')
                  }
                }}
              >
                مشاهده همه
              </h4>
            </div>
            <div className={`right ${stand}`}>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
              <p className="select">ماوس و کیبورد,گیم پد .</p>
            </div>
          </InnerCard>
        </div>
      </Card>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
    </InnerContainer>
  )
}
const InnerContainer = styled.div<{ inner: any }>`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 170px;
  flex-wrap: wrap;
  position: relative;
  transition: all 500ms;
  ${({ inner }) =>
    inner === 'now'
      ? css`
          *:not(.select, .in, .out, .momo, .left, .right, .card) {
            filter: blur(5px);
          }
          .in {
            /* height: 500px; */
            position: absolute;
            z-index: 20;
          }
          .right {
            height: auto;
          }
        `
      : css``}
`
const Card = styled.div<{ inner: string }>`
  width: 361px;
  height: 164px;
  box-shadow: 5px 5px 5px #ddd;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: all 500ms;
  position: relative;
  .out {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .in {
    width: 100%;
    height: auto;
    position: absolute;
  }
  .select {
  }

  ${({ inner }) =>
    inner === 'now'
      ? css`
          .red {
            height: 500px;
            z-index: 21;
            transition: all 500ms;
          }
          .right {
            height: auto;
          }
        `
      : css``}
`
const InnerCard = styled.div`
  width: 100%;
  height: 164px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  div {
    width: 50%;
    height: 164px;
  }
  .left {
    background-color: #fff;
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 20px 0 0 20px;

    p {
      color: #333;
      text-align: center;
      font-size: 14px;
    }
    h4 {
      color: rgb(38, 161, 195);
      cursor: pointer;
      margin-top: 5px;
    }
  }
  .right {
    background-color: orange;
    border-radius: 0 20px 20px 0;
    padding-top: 5px;
    overflow: hidden;
    p {
      color: #333;
      text-align: right;
      margin-right: 10px;
      margin-top: 5px;
    }
  }
`

// import styled, { css } from 'styled-components'
// import { CategoryCard } from './CategoryCard'
// import { useAtom } from 'jotai'
// import { componentActivation } from 'stores/store'
// import { useState } from 'react'

// export const Container = (): JSX.Element => {
//   const [ac, setAc] = useAtom(componentActivation)
//   const [inner, setInner] = useState<string>('')
//   return (
//     <Wrapper ac={ac} inner={inner}>
//       <div className="loading">
//         <button
//           onClick={() => {
//             if (ac === 'deactive') {
//               setAc('active')
//               setInner('now')
//             } else {
//               setAc('deactive')
//               setInner('')
//             }
//           }}
//         ></button>
//       </div>
//       <div></div>

//       <div className="waiting"></div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div<{ ac: any; inner: any }>`
//   padding-top: 170px;
//   width: 100%;
//   height: 800px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-start;
//   transition: all 500ms;
//   flex-wrap: wrap;
//   position: relative;
//   .waiting {
//     width: 200px;
//     height: 200px;
//     background-color: orange;
//     position: absolute;
//     top: 200px;
//     z-index: 0;
//   }
//   .loading {
//     width: 200px;
//     height: 200px;
//     background-color: purple;
//     position: absolute;
//     top: 400px;
//     left: 200px;
//     z-index: 0;
//   }
//   button {
//     width: 50px;
//     height: 50px;
//     background-color: #333;
//     z-index: 1;
//     position: absolute;
//   }
// ${({ inner }) =>
//   inner === 'now'
//     ? css`
//         z-index: 10;
//         *:not(.loading) {
//           filter: blur(10px);
//         }
//         .loading {
//           height: 500px;
//         }
//       `
//     : css``}
//   @media (max-width: 1100px) {
//     padding-top: 220px;
//   }
// `
