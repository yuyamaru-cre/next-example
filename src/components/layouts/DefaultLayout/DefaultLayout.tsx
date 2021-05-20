import styles from './style.module.scss'
import React from 'react'
import GlobalHeader from '@/components/molecules/GlobalHeader/GlobalHeader'
import GlobalFooter from '@/components/molecules/GlobalFooter/GlobalFooter'

export type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <div className="wrapper">
       <GlobalHeader />
        <div className="wrapper-content">
          {children}
        </div>
        <GlobalFooter />
      </div>
    </>
  )
}

