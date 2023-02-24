import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import Carousel from 'react-elastic-carousel'
import { Arrow } from './Icons'

export const WonderfulOffer = (): JSX.Element => {
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
      <Wrapper>
        <Carousel
          isRTL={true}
          itemsToShow={6}
          itemsToScroll={1}
          pagination={false}
          breakPoints={breakPoints}
        >
          <Offer>
            <img
              src="/images/promo1.png"
              alt="پیشنهاد ویژه"
              width={160}
              height={250}
            />
          </Offer>
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
  height: 275px;
  background-color: rgb(0, 48, 88);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
const Offer = styled.div`
  width: 170px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img {
    width: 160px;
    height: 250px;
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
