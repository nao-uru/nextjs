import '../styles/globals.css'
import { Button } from '../component/atoms/Button'
import { SampleImg } from '../component/templete/SampleTemp'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Button text="HELLO This is Next.js Sample!" />
    <SampleImg />
    </>
  )
}

export default MyApp
