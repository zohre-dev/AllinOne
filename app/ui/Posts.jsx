import Post from './Post'

const Posts = () => {
  return (
    <div className=" flex-[9]  bg-[color:var(--bgSoft)] px-[30px] py-[15px]">
      <div className="flex justify-between">
        <Post />
        <Post />
      </div>
      <div className="mt-[15px]  flex items-center justify-between">
        <button className="max-w-fit cursor-pointer border-none bg-[#ff5555] px-6 py-3 text-white">
          بعدی
        </button>
        <button className="max-w-fit cursor-pointer border-none bg-[#ff5555] px-6 py-3 text-white">
          قبلی
        </button>
      </div>
    </div>
  )
}

export default Posts
