import { useRouter } from "next/router"
import Layout from "../../component/layout"
import styles from "./Users.module.css"
interface PropsUsers {
  dataUsers: Array<any>
}
const Users = (props: PropsUsers) => {
  const { dataUsers } = props
  const router = useRouter()

  return (
    <Layout pageTitle="Users List">
      <p className={styles.title}>Welcome To Users List</p>
      <div className={styles["wrap-users-card"]}>
        {dataUsers.map(user => (
          <div
            key={user.id}
            className={styles.card}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Users

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const dataUsers = await res.json()
  return {
    props: {
      dataUsers,
    },
  }
}
