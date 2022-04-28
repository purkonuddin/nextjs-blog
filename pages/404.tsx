import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [])
  return <div>404. Ups... Page not Found!</div>
}
