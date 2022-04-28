import { ReactNode } from "react"
import Footer from "../Footer"
import Header from "../Header"
import styles from "../../styles/Home.module.css"
import Head from "next/head"
interface LayoutProps {
  children: ReactNode
  pageTitle: string
}
function Layout(props: LayoutProps) {
  const { children, pageTitle } = props
  return (
    <>
      <Head>
        <title>Next Js | {pageTitle}</title>
        <meta
          name="description"
          content={`${pageTitle} - "kanal informasi corona virus 19"`}
        />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
