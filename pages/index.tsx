import {
  Layout,
  Header,
  Banner,
  WonderfulOffer,
  BamadarOffer,
  MostSells,
  MostPopular,
  Footer,
} from '@/components/Index'

export default function Home() {
  return (
    <Layout title="Ba Madar">
      <Header></Header>
      <Banner></Banner>
      <WonderfulOffer></WonderfulOffer>
      <BamadarOffer></BamadarOffer>
      <MostSells></MostSells>
      <MostPopular></MostPopular>
      <Footer></Footer>
    </Layout>
  )
}
