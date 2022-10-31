import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <section>
      <Head>Next.js Boilerplate</Head>
      <h1>Awesome Next.js@13 boilerplate ⭐</h1>
      <div className='logo'>
        <Image src='/vercel.svg' alt='logo vercel' width={100} height={100} />
      </div>
    </section>
  )
}
export default Home
