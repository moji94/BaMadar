import styled from 'styled-components'

import { Layout, Header, Navbar, CartPlus } from '@/components/Index'
import { What } from '@/components/Icons'
import { useState } from 'react'

export default function Cart() {
  const [change, setChange] = useState<string>('some')
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
      <Container>
        <Time>
          <div className="recive">
            <h3>زمان دریافت سفارش</h3>
            <What />
          </div>
          <p>مدت زمان ثبت سفارش تا دریافت سفارش 2ساعت خواهد بود</p>
        </Time>
        {change === '' ? (
          <Wrapper>
            <div className="none">
              <img src="/images/EmptyCart.svg" className="empty" />
              <p className="emptyP">سبد خرید شما خالی است</p>
            </div>
          </Wrapper>
        ) : (
          <Wrapper>
            <Amount>
              {array.map((data, index) => (
                <div className="some">
                  <div className="top">
                    <p className="number">{data.title}</p>
                    <img src={data.img} className="pimg" />
                  </div>
                  <div className="bot">
                    <p className="number">ریال{data.price}</p>
                    <CartPlus></CartPlus>
                  </div>
                </div>
              ))}
            </Amount>
          </Wrapper>
        )}
      </Container>
      <Navbar></Navbar>
    </Layout>
  )
}

const Container = styled.div`
  width: 100%;
  height: auto;
`
const Time = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(232, 244, 253);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  .recive {
    width: 200px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  h3 {
    color: #333;
    margin-right: 20px;
  }
  p {
    color: #333;
    margin-right: 50px;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .none {
    width: auto;
    height: auto;
    .empty {
      width: 300px;
      height: 300px;
    }
    .emptyP {
      color: #333;
      text-align: center;
      font-size: 20px;
    }
  }
`
const Amount = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .some {
    width: 400px;
    height: 147px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 10px;
    padding-right: 20px;
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      .pimg {
        width: 75px;
        height: 75px;
      }
      p {
        color: #333;
        margin-right: 20px;
      }
    }
    .bot {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .number {
        margin-right: 20px;
        color: #333;
      }
    }
  }
`
