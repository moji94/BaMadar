import { useState } from 'react'
import styled, { css } from 'styled-components'
import { CategoryCard } from './CategoryCard'

export const Container = (): JSX.Element => {
  const [inner, setInner] = useState<string>('')
  const [sit, setSit] = useState<string>('')
  const [stand, setStand] = useState<string>('')

  return (
    <InnerContainer inner={inner}>
      <Card inner={inner} className={sit}>
        <div className="out"></div>
        <div className={`in ${stand}`}>
          <button
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
          ></button>
        </div>
      </Card>
      <Card inner={inner} className={sit}>
        <div className="out"></div>
        <div className={`in ${stand}`}>
          <button
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
          ></button>
        </div>
      </Card>
      <Card inner={inner} className={sit}>
        <div className="out"></div>
        <div className={`in ${stand}`}>
          <div className="blue select"></div>
          <button
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
          ></button>
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
          /* background-color: red; */
          /* height: 500px; */
          *:not(.momo, .out, .in, .select) {
            filter: blur(5px);
          }
          .in {
            height: 500px;
            width: 700px;
            position: absolute;
            z-index: 20;
          }
        `
      : css``}
`
const Card = styled.div<{ inner: string }>`
  width: 350px;
  height: 200px;
  border: 1px solid #333;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: all 500ms;
  position: relative;
  .red {
    width: 50px;
    height: 50px;
    background-color: purple;
  }
  .out {
    background-color: aqua;
    position: relative;
  }
  .in {
    width: 150px;
    height: 150px;
    position: absolute;
    background-color: orange;
  }
  .select {
    background-color: #333;
  }
  .blue {
    background-color: blue;
  }
  div {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 50px;
    height: 50px;
    z-index: 1;
  }
  ${({ inner }) =>
    inner === 'now'
      ? css`
          .red {
            height: 500px;
            z-index: 21;
            transition: all 500ms;
          }
        `
      : css``}
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
