---
to: <%= targetDir %>/<%= name %>.tsx
---
import styles from './style.module.scss'
<% if(category == 'layouts') { -%>
import React from 'react'

export type <%= props %> = {
  children: React.ReactNode
}

export default function <%= name %>({ children }: <%= props %>) {
  return (
    <>
      {children}
    </>
  )
}

<% } else { -%>
// eslint-disable-next-line @typescript-eslint/ban-types
type <%= props %> = {}

export default function <%= name %>(props: <%= props %>) {
  return (
    <>
      <%= name %>
    </>
  )
}
<% } -%>
