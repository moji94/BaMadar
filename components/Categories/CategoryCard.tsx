import { useState } from 'react'
import styled, { css } from 'styled-components'
import { useAtom } from 'jotai'
import { componentActivation } from 'stores/store'

interface Props {
  img: string
  title: string
  subjects: any
}

export const CategoryCard = ({ img, title, subjects }: Props): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const [sit, setSit] = useState<string>('')
  const [stand, setStand] = useState<string>('')
  return (
    <Card ac={ac} className={sit}>
      <div className="out"></div>
      <div className={`in ${stand}`}>
        <InnerCard className="card">
          <div className={`left ${stand}`}>
            <img className="select" src={img} width={100} height={100} />
            <p className="select">{title}</p>
            <h4
              className="select"
              onClick={() => {
                if (ac === '') {
                  setAc('now')
                  setSit('momo')
                  setStand('red')
                } else {
                  setAc('')
                  setSit('')
                  setStand('')
                }
              }}
            >
              مشاهده همه
            </h4>
          </div>
          <div className={`right ${stand}`}>
            {subjects[0].split(',').map((data: any, index: number) => (
              <p className="select" key={`${index}`}>
                {`${data} -`}
              </p>
            ))}
          </div>
        </InnerCard>
      </div>
    </Card>
  )
}

const Card = styled.div<{ ac: string }>`
  width: 355px;
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

  ${({ ac }) =>
    ac === 'now'
      ? css`
          .red {
            height: 500px;
            z-index: 21;
            transition: all 500ms;
            box-shadow: 5px 5px 5px #ddd;
            border-radius: 25px;
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
  transition: all 500ms;
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
    background-color: #fff;
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
