---
to: <%= targetDir %>/<%= name %>.tsx
---
import * as Mui from '@material-ui/core'
import Dialog, { DialogProps } from '@/components/molecules/Dialog/Dialog'
import styles from './style.module.scss'

type <%= props %> = DialogProps

/** 以下のhookを親で使用する */
const [
  show<%= name %>,
  hide<%= name %>,
] = useModal(() => (
  <<%= name %>
    onClose={hide<%= name %>}
  />
))

export default function <%= name %>(props: <%= props %>) {
  const { onClose } = props

  const content = <>コンテンツ</>

  return (
    <Dialog
      {...props}
      title="タイトル"
      onClose={onClose}
      content={content}
      actions={
        <>
          <Mui.Button color="primary">決定</Mui.Button>
        </>
      }
    />
  )
}
