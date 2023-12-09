const LoginPage = () => {
  return (
    <div className="flex h-[calc(100vh-50px)] flex-col items-center justify-center  bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/images/01bg.png')] bg-repeat">
      <span className="text-3xl">ورود</span>
      <form className="mt-5 flex flex-col gap-[10px]">
        <label>ایمیل :</label>
        <input
          type="text"
          placeholder="example@gmail.com"
          className="mb-5 border-none bg-white p-[10px] focus:outline-none"
        />
        <label>گذرواژه :</label>
        <input
          type="password"
          placeholder="رمز ورود"
          className="mb-5 border-none bg-white p-[10px] focus:outline-none"
        />{' '}
        <button className="bg-[ #087bea] mb-5 cursor-pointer rounded-md border-none bg-[#ff5555] p-[10px] text-white">
          ورود
        </button>
        <button className="mb-5 cursor-pointer rounded-md border-none bg-[#087bea] p-[10px] text-white">
          ورود با گوگل
        </button>
        <button className="mb-5 cursor-pointer rounded-md border-none bg-[#111] p-[10px] text-white">
          ورود با گیت هاب
        </button>
      </form>
      <button className="absolute right-7 top-20 cursor-pointer rounded-md border-none bg-[teal] p-[10px] text-white">
        ثبت نام
      </button>
    </div>
  )
}

export default LoginPage
