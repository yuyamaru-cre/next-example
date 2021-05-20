---
to: <%= targetDir %>/<%= name %>.tsx
---

// eslint-disable-next-line @typescript-eslint/ban-types
type <%= props %> = {}

export default function <%= name %>(props: <%= props %>) {
  return (
    <>
      <%= name %>
    </>
  )
}
