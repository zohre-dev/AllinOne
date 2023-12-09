import Image from 'next/image'

const Post = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/posts/01.jpg"
        width={385}
        height={180}
        alt="post image"
        className="rounded-md object-cover"
      />
      <p className="my-5 w-[80%] cursor-pointer text-sm font-bold text-[#555] hover:text-[#dc3545]">
        ده روش برای گفتن &quot;Thank you&quot; در یک ایمیل انگلیسی زبان
      </p>
      <p className=" w-[80%] overflow-hidden">
        گفتن &quot;متشکرم&quot; راهی عالی برای مودبانه ‌تر کردن و شخصی ‌تر کردن
        ایمیل شماست. با این حال، بهترین راه برای انجام آن چیست؟
      </p>
    </div>
  )
}

export default Post
