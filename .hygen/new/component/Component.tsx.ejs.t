---
to: <%= targetDir %>/<%= name %>.tsx
---
import styles from './style.module.scss'

// eslint-disable-next-line @typescript-eslint/ban-types
type <%= props %> = {}

export default function <%= name %>(props: <%= props %>) {
  return <></>
}
