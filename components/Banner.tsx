import styled from 'styled-components'
import Image from 'next/image'

export const Banner = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <WLeft>
          <img
            src="/images/leftTB.jpg"
            alt="Picture of the author"
            className="leftTB"
          />
          <img
            src="/images/leftBB.gif"
            alt="Picture of the author"
            className="leftBB"
          />
        </WLeft>
        <WRight>
          <img
            src="/images/rightB.jpg"
            alt="Picture of the author"
            className="rightB"
          />
        </WRight>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
const Wrapper = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`
const WRight = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
  .rightB {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`
const WLeft = styled.div`
  width: 31%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 50%;
    flex-direction: row;
    margin-top: 10px;
  }
  .leftBB {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    @media (max-width: 800px) {
      margin-top: 0;
      width: 97.5%;
      margin-left: 2.5%;
    }
  }
  .leftTB {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
    @media (max-width: 800px) {
      margin-bottom: 0;
      width: 97.5%;

      margin-right: 2.5%;
    }
  }
`
