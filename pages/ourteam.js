import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function OurTeam(props) {
  return (
    <Layout home>
    <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="text-center font-semibold text-4xl mx-auto">
        <p>Our Team</p>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class = "bg-gray-800 text-white p-2 rounded-lg transition ease-in-out duration-500 transform hover:bg-gray-900 hover:scale-105">
                <img src="images/myAvatar.png"/>
                <h2 className = "text-center font-semibold mx-auto text-lg">Abhik Ahuja</h2>
                <p className = "text-center mx-auto text-sm">????????</p>
                <div className = "flex justify-center space-x-4 pt-2">
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">LinkedIn</button>
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">GitHub</button>
                </div>
            </div>
            <div class = "bg-gray-800 text-white p-2 rounded-lg transition ease-in-out duration-500 transform hover:bg-gray-900 hover:scale-105">
                <img src="images/kateAvatar.png"/>
                <h2 className = "text-center font-semibold mx-auto text-lg">Kate Park</h2>
                <p className = "text-center mx-auto text-sm">????????</p>
                <div className = "flex justify-center space-x-4 pt-2">
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">LinkedIn</button>
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">GitHub</button>
                </div>
            </div>
            <div class = "bg-gray-800 text-white p-2 rounded-lg transition ease-in-out duration-500 transform hover:bg-gray-900 hover:scale-105">
                <img src="images/myAvatar.png"/>
                <h2 className = "text-center font-semibold mx-auto text-lg">Minh Tran</h2>
                <p className = "text-center mx-auto text-sm">????????</p>
                <div className = "flex justify-center space-x-4 pt-2">
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">LinkedIn</button>
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">GitHub</button>
                </div>
            </div>
            <div class = "bg-gray-800 text-white p-2 rounded-lg transition ease-in-out duration-500 transform hover:bg-gray-900 hover:scale-105">
                <img src="images/myAvatar.png"/>
                <h2 className = "text-center font-semibold mx-auto text-lg">Nandini Venkatesh</h2>
                <p className = "text-center mx-auto text-sm">????????</p>
                <div className = "flex justify-center space-x-4 pt-2">
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">LinkedIn</button>
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">GitHub</button>
                </div>
            </div>
            <div class = "bg-gray-800 text-white p-2 rounded-lg transition ease-in-out duration-500 transform hover:bg-gray-900 hover:scale-105">
            <img src="images/myAvatar.png" className = "rounded-md"/>
                <p className = "text-center font-semibold mx-auto text-lg">Pavitra Srinivasan</p>
                <p className = "text-center mx-auto text-sm">Pavitra is a student at the University of Michigan.</p>
                <div className = "flex justify-center space-x-4 pt-2">
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">LinkedIn</button>
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">GitHub</button>
                </div>
            </div>
            <div class = "bg-gray-800 text-white p-2 rounded-lg transition ease-in-out duration-500 transform hover:bg-gray-900 hover:scale-105">
                <img src="images/myAvatar.png"/>
                <h2 className = "text-center font-semibold mx-auto text-lg">Shivasree Margam</h2>
                <p className = "text-center mx-auto text-sm">????????</p>
                <div className = "flex justify-center space-x-4 pt-2">
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">LinkedIn</button>
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">GitHub</button>
                </div>
            </div>
            <div class = "bg-gray-800 text-white p-2 rounded-lg transition ease-in-out duration-500 transform hover:bg-gray-900 hover:scale-105">
                <img src="images/myAvatar.png"/>
                <h2 className = "text-center font-semibold mx-auto text-lg">Vinay Prasad</h2>
                <p className = "text-center mx-auto text-sm">????????</p>
                <div className = "flex justify-center space-x-4 pt-2">
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">LinkedIn</button>
                    <button class="bg-transparent hover:bg-teal-500 focus:outline-none focus:shadow-outline text-white border text-sm border-white py-0.5 px-4 rounded-full">GitHub</button>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}