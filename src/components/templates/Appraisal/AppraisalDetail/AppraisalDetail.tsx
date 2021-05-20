import { useState, useEffect } from 'react'
import styles from './style.module.scss'
import AppraisalDetailList from '@/components/organisms/Appraisal/AppraisalDetailList/AppraisalDetailList'

// eslint-disable-next-line @typescript-eslint/ban-types
type AppraisalDetailProps = {
  appraisalId: number
}

interface AppraisalDate {
  date: string
}

export default function AppraisalDetail({ appraisalId }: AppraisalDetailProps) {

  const [appraisalDates, setAppraisalDates] = useState<AppraisalDate[]>([])

  const getAppraisals = () => {
    // TODO: 査定情報の取得処理
    return appraisalDates
  }

  useEffect(() => {
    setAppraisalDates(getAppraisals())
  }, [])

  return (
    <>
      AppraisalDetail ID: {appraisalId}

     <AppraisalDetailList progress={5} doing={2} done={100} />
    </>
  )
}
