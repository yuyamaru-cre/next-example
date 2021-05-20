import styles from './style.module.scss'
// eslint-disable-next-line @typescript-eslint/ban-types
type AppraisalDetailListProps = {
  progress: number
  doing: number
  done: number
}

export default function AppraisalDetailList({
  progress,
  doing,
  done
} : AppraisalDetailListProps) {
  return (
    <>
      <div className="panel">
        <a className="panel-block">
          査定依頼中 {progress} 件
        </a>
        <a className="panel-block">
          査定中 {doing} 件
        </a>
        <a className="panel-block">
          査定済 {done} 件
        </a>
      </div>
    </>
  )
}
