import Link from "next/link"
import Layout from "../../component/layout"
import styles from "./Users.module.css"
interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}
interface UsersDetailProps {
  user: User
}
function UsersDetail(props: UsersDetailProps) {
  const { user } = props
  return (
    <Layout pageTitle="User Detail">
      <div className={styles["back-nav"]}>
        <Link href={"/"}>Back</Link>
      </div>
      <div className={styles["card-user"]}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </Layout>
  )
}

export default UsersDetail

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users") // your fetch function here
  const usersData = await data.json()
  const paths = usersData.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
interface GetStaticProps {
  params: {
    id: string
  }
}
export const getStaticProps = async (ctx: GetStaticProps) => {
  const { id } = ctx.params
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // your fetch function here
  const user = await data.json()
  return {
    props: {
      user,
    },
  }
}
