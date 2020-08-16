import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Therapists(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex-col mx-auto">
        <div className="text-center font-semibold text-4xl mx-auto">
        <p>Therapists</p>
        <p className="font-medium text-2xl">Find Therapists near you!</p>
        </div>
      </section>
    </Layout>
  )
}