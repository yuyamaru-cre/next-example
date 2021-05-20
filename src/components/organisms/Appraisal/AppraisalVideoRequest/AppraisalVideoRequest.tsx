import styles from './style.module.scss'
// eslint-disable-next-line @typescript-eslint/ban-types
type AppraisalVideoRequestProps = {
  progress: number
  doing: number
}

export default function AppraisalVideoRequest({
  progress,
  doing
}: AppraisalVideoRequestProps) {
  return (
    <>
      <div className="panel has-background-white">
        <p className="panel-heading">
           動画査定依頼
        </p>
        <a className="panel-block">
          査定依頼中 {progress} 件
        </a>
        <a className="panel-block">
          査定中 {doing} 件
        </a>
      </div>
    </>
  )
}
