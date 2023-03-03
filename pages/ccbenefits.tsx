import { Layout, Header } from '@/components/Index'
import styled from 'styled-components'

export default function Categories() {
  return (
    <Layout title="Ba Madar">
      <Header></Header>
      <Container>
        <Box>
          <h3>مزایای خانواده مادر</h3>
          <p>
            با عضویت در خانواده مادر از مزایای متعددی بهره مند خواهید شد. مزایای
            :نظیر
            <br /> خرید اعتباری <br />
            کش بک
            <br /> انواع تخفیفات
            <br /> کالاهای ویژه
            <br /> شرکت در جشنواره ها و قرعه کشی ها
            <br /> هدایا
            <br /> تسهیلات
            <br /> و بهره مندی از اولویت‌ها
          </p>
        </Box>
        <Box>
          <h3>کش بک</h3>
          <p>
            کش بک فرآیندی است که طی آن بابت بخشی از خریدتان، حساب اختصاصی کارت
            باشگاهتان شارژ میشود، که امکان استفاده در مجموعه و فروشگاه‌های منتخب
            معرفی شده را دارد.
            <br /> البته برخی از شارژ صورت گرفته قابلیت استفاده عمومی در تمام
            بخش‌ها را دارد و برخی محدود به بخش های خاصی از مجموعه خانواده مادر
            است که به روشنی در صفحه مدیریت مالی در اختیارتان قرار میگیرد
            <br />
          </p>
        </Box>
        <Box>
          <h3>سوپر تخفیفات و سایر تخفیفات</h3>
          <p>
            شما با عضویت در خانواده مادر همیشه از تخفیف بهره مند خواهید شد. مبلغ
            تخفیف در کارت باشگاهی شما برای خدمات بعدی شارژ خواهد شد.
            <br />
            این تخفیفات عبارتند از:
            <br />
            _ تخفیف های کلی مجموعه شامل کلیه مراجعین.
            <br /> _ تخفیف های ویژه اعضای باشگاه.
            <br /> _ تخفیف های مضاعف اعضای باشگاه که اختصاصاً از کارت باشگاه
            برای خرید استفاده می کنند.
            <br /> _ تخفیف‌های جشنواره و مناسبت های تقویمی.
            <br /> _ تخفیفهای واحدهای منتخب خارج از مجموعه.
          </p>
        </Box>
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 180px;
`
const Box = styled.div`
  width: 500px;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
  box-shadow: 3px 2px 3px #ccc;
  /* padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px; */
  padding: 20px 20px 10px 20px;
  margin-top: 30px;
  h3 {
    color: #333;
    margin-bottom: 10px;
  }
  p {
    color: #333;
    text-align: right;
  }
`
