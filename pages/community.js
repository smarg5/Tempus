import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Community(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex-col mx-auto" style={{marginTop: "75px"}}>
        <div className="text-center font-semibold text-4xl mx-auto" style={{border: "1px solid lightblue", borderRadius: "15px", height: "400px", padding:"75px 0 0 0"}}>
          <form action="./chat">
          <div class="form-control">
          <label for="username" style={{marginTop: "50px"}}>Username</label>
          <input style={{border: "1px solid", borderRadius: "15px", marginLeft: "30px"}}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username..."
                  required
          />
          </div>
          <div class="form-control">
                  <label for="room"style={{}}>Choose a Room</label>
                  <select name="room" id="room" style={{border: "1px solid", borderRadius: "15px", marginLeft: "30px", width: "300px"}}>
                          <option value="friends">Make friends</option>
                          <option value="vent">Vent</option>
                          <option value="advice">Advice</option>
                          <option value="Music">Music</option>
                          <option value="Gaming">Gaming</option>
                  </select>
          </div>
          <button type="submit" class="btn" style={{width: "200px", backgroundColor: "lightblue", borderRadius: "15px", marginTop: "50px"}}>Join Chat</button>
  </form>
        </div>
      </section>
    </Layout>
  )
}