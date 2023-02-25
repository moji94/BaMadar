import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import Carousel from 'react-elastic-carousel'
import { Arrow } from './Icons'

export const BamadarOffer = (): JSX.Element => {
  const breakPoints = [
    { width: 200, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 1000, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ]
  return (
    <Container>
      <Title>
        <p>پیشنهاد بامادر</p>
        <img width="20" src="/images/Pomegranate.svg" />
      </Title>
      <Wrapper>
        <Carousel
          isRTL={true}
          itemsToShow={6}
          itemsToScroll={1}
          pagination={false}
          breakPoints={breakPoints}
        >
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ProductCard
            img={
              'https://my.bamadar.com/uploads/images/2020/3/GAXY2MBwtmیفلا-300.jpg'
            }
            alt={'خمیردندان کامل و سفیدکننده مریدنت 100میل'}
            title={'خمیردندان کامل و سفیدکننده مریدنت 100میلی'}
            price={23800}
            dis={19}
            orgPrice={294400}
          />
          <ShowAll>
            <div>
              <Arrow />
            </div>
            <p>مشاهده همه</p>
          </ShowAll>
        </Carousel>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 310px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  width: 87%;
  height: 35px;
  background-color: rgb(139, 0, 0);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;
  img {
    margin-right: 10px;
    margin-left: 10px;
  }
`
const Wrapper = styled.div`
  width: 87%;
  height: 275px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 0 0 10px 10px;
  background-color: rgb(139, 0, 0);
  .rec.rec-arrow {
    color: '#fff';
  }
  .rec.rec-arrow:enabled {
    visibility: visible;
    color: #fff;
  }
  .rec.rec-arrow:disabled {
    color: #666;
  }
`
const ShowAll = styled.div`
  width: 170px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  div {
    width: 35px;
    height: 35px;
    border: 1px solid rgb(23, 155, 191);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  p {
    color: #333;
  }
`
