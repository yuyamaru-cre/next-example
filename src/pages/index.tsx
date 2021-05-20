import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Index() {

  const router = useRouter()

  useEffect(() => {
    //TODO: ログインチェックを行ってhomeかログインへ飛ばす
    router.push('/home/login')
  }, [router])

  return <></>
}
