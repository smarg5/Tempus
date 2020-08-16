import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Community(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex-col mx-auto">
        <div className="text-center font-semibold text-4xl mx-auto">
        <p>Community</p>
        </div>
      </section>
    </Layout>
  )
}