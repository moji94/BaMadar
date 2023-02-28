import styled, { css } from 'styled-components'
import { PProductCard } from './PProductCard'
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
export const PContainer = (): JSX.Element => {
  const [ac, setAc] = useAtom(productActivation)
  const [pdata, setPdata] = useState<undefined | pDataType>(undefined)
  console.log(pdata?.price)
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
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
      price: 53000,
      orgPrice: 60000,
      alt: 'awdkpawkpdk',
      dis: 10,
    },
    {
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
      price: 34000,
      orgPrice: 55000,
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
    <InnerContainer ac={ac}>
      {array.map((data, index) => (
        <div
          className="select"
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
      <Single className="select">
        <p className="select">{pdata !== undefined && pdata.price}</p>
        <button
          className="select"
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
        >
          here
        </button>
      </Single>
    </InnerContainer>
  )
}
const InnerContainer = styled.div<{ ac: any }>`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 170px;
  flex-wrap: wrap;
  position: relative;
  transition: all 500ms;
  /* .select {
    width: auto;
    height: auto;
  } */
  ${({ ac }) =>
    ac === 'now'
      ? css`
          *:not(.select, .in, .out, .momo, .left, .right, .card) {
            filter: blur(5px);
            background-color: rgba(70, 70, 70, 0);
          }
          .in {
            position: absolute;
            z-index: 20;
          }
        `
      : css``}
`
const Single = styled.div`
  width: 50%;
  height: 70%;
  background-color: aqua;
  position: absolute;
  z-index: 1000;
`
