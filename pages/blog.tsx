import Layout from "../component/layout"
import styles from "../styles/Blog.module.css"

interface Blog {
  id: number
  userId: number
  title: string
  body: string
}
interface BlogProps {
  dataBlog: Array<Blog>
}
function blog(props: BlogProps) {
  const { dataBlog } = props
  return (
    <Layout pageTitle="Blog">
      <div className={styles["wrap-blog"]}>
        <h3>Welcome to Blog Page!</h3>
        <div className={styles["list-blog"]}>
          {dataBlog.map(blog => (
            <div key={`${blog.id}`} className={styles["item-blog"]}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <br />
              <p>UserId : {`${blog.userId}`}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default blog

export const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const dataBlog = await data.json()
  return {
    props: { dataBlog },
  }
}
