import Post from './Post'
import Pagination from './Pagination'

const Posts = () => {
  return (
    <div className=" flex-[9]  bg-[color:var(--bgSoft)] px-[30px] py-[15px]">
      <div className="flex justify-between">
        <Post />
        <Post />
      </div>
      <Pagination />
    </div>
  )
}

export default Posts
