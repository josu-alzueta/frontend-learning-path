import { BrowserRouter as Router } from 'react-router-dom'
import { RouteRenderer } from '@/router'
import { Sidebar } from '@/components/organisms/Sidebar'
import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <Router>
      <div className={styles.Layout}>
        <Sidebar />
        <section className={styles.LayoutScroll}>
          <div className={styles.LayoutContent}>
            <RouteRenderer />
          </div>
        </section>
      </div>
    </Router>
  )
}
