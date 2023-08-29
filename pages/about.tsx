import Link from 'next/link'
import { Inter } from 'next/font/google'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

const AboutPage = () => {
  return (
    <>

          <h1>About Page</h1>
          
          <h1 className={`${'title'} ${inter.className}`} >
          Ir a <Link href="/">Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.js</code>
          </p>
          
    </>
  )
}
export default AboutPage

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}