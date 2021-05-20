import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MainLayout from '@/components/layouts/MainLayout/MainLayout'

// eslint-disable-next-line @typescript-eslint/ban-types
type indexProps = {}

export default function index(props: indexProps) {
  const router = useRouter()

  useEffect(() => {
    router.push('/appraisals/1')
  }, [router])
  return (
    <>
      <MainLayout>
        This is Home Page
        <br />
        <br />
        Redirect to /appraisals/[id]
      </MainLayout>
    </>
  )
}
