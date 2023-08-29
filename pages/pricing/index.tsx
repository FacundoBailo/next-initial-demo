import { MainLayout } from "../../components/layouts/MainLayout"
import Link from "next/link"

const PricingPage = () => {
  return (
    <MainLayout>

      <h1>Pricing Page</h1>

      <h1 className={`${'title'}`} >
        {/*Ir a <a href="/about">About</a>*/}
        Ir a <Link href="/">Home</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>pages/pricing/index.js</code>
      </p>

    </MainLayout>
  )
}
export default PricingPage