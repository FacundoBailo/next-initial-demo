import Link from 'next/link'
import { Inter } from 'next/font/google'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

const ContactPage = () => {
  return (
    <MainLayout>
        <h1>Contact Page</h1>
        
        <h1 className={`${'title'} ${inter.className}`} >
        Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/contact.js</code>
        </p>
    </MainLayout>
  )
}
export default ContactPage