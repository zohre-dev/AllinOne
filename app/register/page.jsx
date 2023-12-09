const Register = () => {
  return (
    <div className="flex h-[calc(100vh-50px)] flex-col items-center justify-center  bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/images/02bg.png')] bg-repeat">
      <span className="text-3xl">ثبت نام</span>
      <form className="mt-5 flex flex-col gap-[10px]">
        <label>نام کاربری :</label>
        <input
          type="text"
          placeholder="یک نام کاربری انتخاب کنید"
          className="mb-5 border-none bg-white p-[10px] focus:outline-none"
        />
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
          className="mb-5 border-none bg-white p-[10px]  focus:outline-none"
        />{' '}
        <button className="bg-[ #087bea] mb-5 cursor-pointer rounded-md border-none bg-[teal] p-[10px] text-white">
          ثبت نام
        </button>
      </form>
      <button className="absolute right-7 top-20 cursor-pointer rounded-md border-none bg-[#ff5555] px-[20px] py-[10px] text-white">
        ورود
      </button>
    </div>
  )
}

export default Register
