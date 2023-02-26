import { useState } from 'react'
import styled, { css } from 'styled-components'
import { useAtom } from 'jotai'
import { componentActivation } from 'stores/store'

export const CategoryCard = (): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const [inner, setInner] = useState<string>('')
  return (
    <Container inner={inner} className="loading">
      <div></div>
      <div className="po"></div>
      <button
        onClick={() => {
          if (ac === 'deactive') {
            setAc('active')
            setInner('now')
          } else {
            setAc('deactive')
            setInner('')
          }
        }}
      ></button>
    </Container>
  )
}

const Container = styled.div<{ inner: string }>`
  width: 350px;
  height: auto;
  border: 1px solid #333;
  margin: 8px;
  transition: all 500ms;
  background-color: aqua;
  position: relative;

  div {
    width: 200px;
    height: 200px;
    background-color: orange;
    position: absolute;
    bottom: 0;
    z-index: 0;
  }

  button {
    width: 50px;
    height: 50px;
    background-color: #333;
    z-index: 1;
    position: absolute;
  }
  ${({ inner }) =>
    inner === 'now'
      ? css`
          z-index: 10;
          height: 500px;
          *:not(.po) {
            filter: blur(10px);
          }
        `
      : css`
          height: 300px;
        `}
`
