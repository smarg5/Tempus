import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex font-semibold text-4xl mx-auto">
        <div className="text-center mx-auto">
        <p>Control your anxiety</p>
        <div>
        <a href="" class="duration-75 bg-white inline-block text-sm px-4 py-2 border border-teal-500 rounded text-teal-500 hover:bg-teal-500 hover:text-white mt-4 lg:mt-0">Learn More »</a>
        </div>
        </div>
      </section>
    </Layout>
  )
}