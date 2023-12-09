import Header from './ui/Header'
import Posts from './ui/Posts'
import Sidebar from './ui/Sidebar'
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-between gap-5 p-10">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}
