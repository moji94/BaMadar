import { Layout, Header, PProductCard } from '@/components/Index'
import styled, { css } from 'styled-components'
import { useAtom } from 'jotai'
import { productActivation } from 'stores/store'
import { useState } from 'react'

interface pDataType {
  img: string
  alt: string
  title: string
  price: number
  dis: number
  orgPrice: number
}

export default function WonderfulOffers() {
  const [ac, setAc] = useAtom(productActivation)
  const [pdata, setPdata] = useState<undefined | pDataType>(undefined)
  console.log(ac)
  const array = [
    {
      img: '/images/drink.png',
      title: 'نوشیدنی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 12000,
      orgPrice: 32000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/drink.png',
      title: 'نوشیدنی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 12000,
      orgPrice: 32000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/drink.png',
      title: 'نوشیدنی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 12000,
      orgPrice: 32000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/drink.png',
      title: 'نوشیدنی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 12000,
      orgPrice: 32000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/drink.png',
      title: 'نوشیدنی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 12000,
      orgPrice: 32000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },

    {
      img: '/images/protein.png',
      title: 'مواد پروتئینی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 77000,
      orgPrice: 80000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/protein.png',
      title: 'مواد پروتئینی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 77000,
      orgPrice: 80000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/protein.png',
      title: 'مواد پروتئینی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 77000,
      orgPrice: 80000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/protein.png',
      title: 'مواد پروتئینی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
      price: 77000,
      orgPrice: 80000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },

    {
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
      price: 56000,
      orgPrice: 87000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
      price: 69000,
      orgPrice: 70000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
  ]
  return (
    <Layout title="Ba Madar">
      <Header></Header>
      <Container ac={ac}>
        {array.map((data, index) => (
          <div
            className="cardHolder"
            onClick={() => {
              setPdata({
                img: data.img.toString(),
                alt: data.alt.toString(),
                title: data.title.toString(),
                price: Number(data.price),
                dis: Number(data.dis),
                orgPrice: Number(data.orgPrice),
              })
            }}
          >
            <PProductCard
              key={`${index}`}
              img={data.img}
              title={data.title}
              alt={data.alt}
              price={data.price}
              orgPrice={data.orgPrice}
              dis={data.dis}
            ></PProductCard>
          </div>
        ))}
        <Single className="cardHolder" ac={ac}>
          <div className="select close">
            <img
              className="select"
              src="./images/close.svg"
              width={24}
              height={24}
              onClick={() => {
                setPdata({
                  img: '',
                  alt: '',
                  title: '',
                  price: 0,
                  dis: 0,
                  orgPrice: 0,
                })
                setAc('')
              }}
            />
          </div>
          <Picsec className="select">
            <img src={pdata?.img} alt={pdata?.alt} className="momo" />
          </Picsec>
          <Details className="select">
            <div className=" in select">
              <h2 className="select">{pdata?.title}</h2>
            </div>
            <div className="select in price">
              <button className="card">افزودن به سبد</button>
              <div className="select out">
                <div className="left">
                  <p className="select">{pdata?.dis}%</p>
                </div>
                <div className="select right">
                  <h3 className="select">ریال{pdata?.price}</h3>
                </div>
              </div>
            </div>
            <div className="select in">
              <p className="select org">{pdata?.orgPrice}</p>
            </div>
            <div className="select in">
              <p className="select numb">0عدد</p>
              <p className="select order">:مقدار سفارش</p>
            </div>
            <div className="in last select">
              <div className="share select">
                <img
                  src="./images/share.svg"
                  width={24}
                  height={24}
                  className="select"
                />
                <img
                  src="./images/copy.svg"
                  width={24}
                  height={24}
                  className="select"
                />
              </div>
            </div>
          </Details>
        </Single>
      </Container>
    </Layout>
  )
}
const Container = styled.div<{ ac: any }>`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 170px;
  flex-wrap: wrap;
  position: relative;
  transition: all 1000ms;
  @media (max-width: 1100px) {
    padding-top: 220px;
  }
  @media (max-width: 800px) {
    padding-top: 20px;
  }
  ${({ ac }) =>
    ac === 'now'
      ? css`
          *:not(
              .select,
              .in,
              .out,
              .momo,
              .left,
              .right,
              .card,
              .org,
              .share,
              .cardHolder,
              .price,
              .last
            ) {
            filter: blur(5px);
          }
        `
      : css``}
`
const Single = styled.div<{ ac: any }>`
  width: 45%;
  height: 525px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 3px 3px 3px #ccc;
  transition: all 1000ms;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  .close {
    width: 100%;
    height: 30px;
    display: flex;
    position: absolute;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15px;
    padding-top: 5px;
    img {
      cursor: pointer;
    }
  }
  ${({ ac }) =>
    ac === ''
      ? css`
          display: none;
          transition: all 1000ms;
        `
      : css``}
`
const Picsec = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .momo {
    width: 40%;
    height: 100%;
  }
`
const Details = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .in {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 20px;
  }
  .price {
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
  }
  h2 {
    color: #333;
  }
  .out {
    width: 300px;
    height: 30px;
    position: relative;
    border-radius: 15px;
  }
  .left {
    width: 40%;
    height: 100%;
    background-color: rgb(236, 59, 79);
    position: absolute;
    left: 0;
    border-radius: 15px;
    border: 2px solid #666;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10%;
    p {
      color: #fff;
      text-align: center;
    }
  }
  .right {
    width: 70%;
    height: 100%;
    background-color: rgba(255, 255, 255);
    position: absolute;
    right: 0;
    border-radius: 15px;
    border: 2px solid #666;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      color: #333;
    }
  }
  .card {
    width: 150px;
    height: 30px;
    background-color: rgb(0, 200, 255);
    cursor: pointer;
    border-radius: 15px;
    border: 2px solid #666;
    color: #333;
    font-family: 'Vazir';
    font-size: 14px;
  }
  .org {
    text-decoration-line: line-through;
    /* color: rgb(127, 127, 152); */
    color: #777;
    font-size: 20px;
    padding-right: 90px;
  }
  .order {
    /* color: rgb(127, 127, 152); */
    color: rgb(0, 152, 194);
    font-size: 20px;
    padding-right: 10px;
  }
  .numb {
    color: #333;
    font-size: 20px;
    padding-right: 10px;
  }
  .last {
    justify-content: space-between;
    padding-left: 20px;
    p {
      color: #fff;
      cursor: pointer;
    }
  }
  .share {
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`
