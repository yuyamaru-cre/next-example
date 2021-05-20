import MainLayout from '@/components/layouts/MainLayout/MainLayout'
import AppraisalDetail from '@/components/templates/Appraisal/AppraisalDetail/AppraisalDetail'
import { useRouter } from 'next/router'

export default function AppraisalId() {
  const router = useRouter()
  const { appraisalId } = router.query

  return (
    <>
      <MainLayout>
        <AppraisalDetail appraisalId={Number(appraisalId)} />
      </MainLayout>
    </>
  )
}
