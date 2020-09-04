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
          <form action="./chat">
          <div class="form-control">
          <label for="username">Username</label>
          <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username..."
                  required
          />
          </div>
          <div class="form-control">
                  <label for="room">Room</label>
                  <select name="room" id="room">
                          <option value="JavaScript">JavaScript</option>
                          <option value="Python">Python</option>
                          <option value="PHP">PHP</option>
                          <option value="C#">C#</option>
                          <option value="Ruby">Ruby</option>
                          <option value="Java">Java</option>
                  </select>
          </div>
          <button type="submit" class="btn">Join Chat</button>
  </form>
        </div>
      </section>
    </Layout>
  )
}