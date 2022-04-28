import Link from "next/link"
import styles from "./Header.module.css"
import Image from "next/image"
function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"/blog"}>
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={"/users"}>
            <a>Users</a>
          </Link>
        </li>
      </ul>
      <div className="wrap-logo">
        <Image src={"/logo.png"} width={200} height={50} alt="logo-covid19" />
      </div>
    </header>
  )
}

export default Header
