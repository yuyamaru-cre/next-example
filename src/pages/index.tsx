import Link from 'next/link'
import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout'

export default function Index() {

  return (
    <>
      <DefaultLayout>
        This is Title Page
        <br />
        <h1>
          Appraisal
        </h1>
        <br />
        <Link href="/home">Go to /home</Link>
      </DefaultLayout>
    </>
  )
}
