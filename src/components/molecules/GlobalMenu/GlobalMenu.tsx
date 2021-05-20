import styles from './style.module.scss'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/ban-types
type GlobalMenuProps = {}

export default function GlobalMenu(props: GlobalMenuProps) {
  return (
    <>
      <div className="navbar is-dark">
        <div className="navbar-item">
          <div className="columns is-mobile">
            <p className={'column' + ' ' + styles.column}>
              <Link href="/">
                <span className="button is-white">
                  <i className="fas fa-home"></i>
                </span>
              </Link>
            </p>
            <p className={'column' + ' ' + styles.column}>
              <Link href="/request">
                <span className="button is-white">
                  <i className="fas fa-poll-h"></i>
                </span>
              </Link>
            </p>
            <p className={'column' + ' ' + styles.column}>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
