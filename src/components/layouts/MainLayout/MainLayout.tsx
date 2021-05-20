import styles from './style.module.scss'
import React from 'react'
import GlobalMenu from '@/components/molecules/GlobalMenu/GlobalMenu'

export type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-content">
          {children}
        </div>
        <GlobalMenu />
      </div>
    </>
  )
}

