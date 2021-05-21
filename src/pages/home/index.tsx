import { useRouter } from 'next/router'
import Link from 'next/link'
import DefaultLayout from '@/components/layouts/DefaultLayout/DefaultLayout'

// eslint-disable-next-line @typescript-eslint/ban-types
type indexProps = {}

export default function index(props: indexProps) {
  const router = useRouter()

  return (
    <>
      <DefaultLayout>
        This is Home Page（Title）
        <br />
        <Link href="/appraisals/1">Go to /appraisals/[id]</Link>
        <br />
        <Link href="/test/weather">Go to weather</Link>
      </DefaultLayout>
    </>
  )
}
