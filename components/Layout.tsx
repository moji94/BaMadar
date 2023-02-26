import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'

interface Props {
  children?: any
  title: string
}

export const Layout = ({ children, title }: Props): JSX.Element => {
  const [change, setChange] = useState<'desktop' | 'phone'>('desktop')
  const handleclick = () => {
    if (change == 'desktop') {
      setChange('phone')
    } else {
      setChange('desktop')
    }
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <MainContent>{children}</MainContent>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
  position: absolute;
`
const MainContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// const Menuu = styled.div`
//   width: 50px;
//   height: 50px;
//   position: fixed;
//   top: 5px;
//   display: none;
//   right: 5px;
//   ${({ dir }) =>
//     dir === 'rtl'
//       ? css`
//           left: 5px;
//         `
//       : css`
//           right: 5px;
//         `}
//   :hover {
//     cursor: pointer;
//   }
//   @media (max-width: 850px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `
