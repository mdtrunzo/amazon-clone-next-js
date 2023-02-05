import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products}/>
      </main>
    </div>
  )
}

//This function tells the app that this is no longer a static page, but it needs to render data into the server
export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products/').then(
    (res) => res.json()
  )

  // The data is returning as props
  return {
    props: {
      products: products,
    },
  }
}

