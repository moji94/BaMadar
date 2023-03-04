import { useState } from 'react'
import styled, { css } from 'styled-components'
import { CategoryCard } from './CategoryCard'
import { useAtom } from 'jotai'
import { componentActivation } from 'stores/store'

export const Container = (): JSX.Element => {
  const [ac, setAc] = useAtom(componentActivation)
  const array = [
    {
      img: '/images/drink.png',
      title: 'نوشیدنی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
    },
    {
      img: '/images/protein.png',
      title: 'مواد پروتئینی',
      subjects: [
        'نوشابه , نوشیدنی انرژی زا , ماء الشعیر و دلستر , آبمیوه , شربت ها , عرقیجات ,آب معدنی',
      ],
    },
    {
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
    },
    {
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
    },
    {
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
    },
    {
      img: '/images/digital.png',
      title: 'لوازم جانبی موبایل و کامپیوتر',
      subjects: [
        'کیف و کاور گوشی, انواع پاوربانک ,مونوپاد،سه پایه و پایه نگهدارنده گوشی,هارد و فلش و رم, هدفون و هدست, اسپیکر و میکروفن, مچ بند و ساعت هوشمند, انواع کابل و محافظ کابل و بلوتوث, انواع تبدیل و رم ریدر و خشاب سیم,ماوس و کیبورد,گیم پد و دسته بازی',
      ],
    },
  ]
  return (
    <InnerContainer ac={ac}>
      {array.map((data, index) => (
        <CategoryCard
          key={`${index}`}
          img={data.img}
          title={data.title}
          subjects={data.subjects}
        ></CategoryCard>
      ))}
    </InnerContainer>
  )
}
const InnerContainer = styled.div<{ ac: any }>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  transition: all 500ms;
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
