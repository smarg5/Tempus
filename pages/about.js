import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function About(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex-col mx-auto">
        <div className="text-center font-semibold text-4xl mx-auto">
        <p>About MH App</p>
        </div>
        <div>
            <ul className="">

                {/* Copy paste and edit */}
                <div className="person text-center">
                    <img src="images/harry-potter.png" className="mx-auto my-3 rounded-full h-20 w-20 object-cover transform scale-110" width="150" height="150"/>
                    <p className="font-semibold">Harry Potter</p>
                    <p>Hi, my name is Harry Potter and I'm a Wizard! I go to the Hogwarts School of Witchcraft and Wizardry and I will magic your anxiety away!</p>

                    {/* Add whatever buttons here, icons instead of buttons, etc. */}
                    <div className="mt-4">
                        <a href="https://github.com/topics/harry-potter" class="duration-75 bg-white inline-block text-sm px-4 py-2 mr-4 border border-teal-500 rounded text-teal-500 hover:bg-teal-500 hover:text-white mt-4 lg:mt-0">Github</a>
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiKtY2rv57rAhUhJTQIHeJ1AZ4QFjABegQIAhAB&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fharry-potter-682996122&usg=AOvVaw2QEb6uTLj9k-7acN2V-F5f" class="duration-75 bg-white inline-block text-sm px-4 py-2 border border-teal-500 rounded text-teal-500 hover:bg-teal-500 hover:text-white mt-4 lg:mt-0">LinkedIn</a>
                        <a href="https://www.wizardingworld.com/" class="duration-75 bg-white inline-block text-sm px-4 py-2 border border-teal-500 rounded text-teal-500 hover:bg-teal-500 hover:text-white mt-4 ml-4 lg:mt-0">Website</a>
                    </div>
                </div>
            </ul>
        </div>
      </section>
    </Layout>
  )
}