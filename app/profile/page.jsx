import Image from 'next/image'

const Profile = () => {
  return (
    <div className="profile flex min-h-[calc(100vh-50px)] flex-col items-center bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/images/02bg.png')] bg-repeat">
      <div className="my-20 flex w-[80%] gap-5">
        <div>
          <Image
            src="/images/students/01.jpg"
            width={300}
            height={300}
            alt="profile image"
            className="cursor-pointer  object-cover"
          />
        </div>

        <div className="w-[50%]">
          <form action="" className="flex  flex-col">
            <label>نام</label>
            <input type="text" name="username" placeholder="رویا" />

            <label>نام خانوادگی</label>
            <input type="text" name="lastname" placeholder="پناهی" />

            <label>ایمیل</label>
            <input type="email" name="email" placeholder="roya@gmail.com" />

            <label>گذرواژه</label>
            <input type="text" name="password" placeholder="123" />
            <label>آدرس</label>
            <textarea
              name="address"
              placeholder="خیابان امام - کوی  شهریور - کوچه عدالت 3"
            ></textarea>
            <button className="cursor-pointer border-none bg-[teal] p-4 text-white">
              ویرایش
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
