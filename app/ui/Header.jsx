import Image from 'next/image'

const Header = () => {
  return (
    <div className="mt-[60px] border border-red-700">
      <div className="flex flex-col items-center text-[#444]">
        <span className="absolute top-[18%] text-xl">
          شکوه آموختن با حرفه ایی ها در
        </span>
        <span className="absolute top-[25%] text-7xl">کودکان دوزبانه ویرا</span>
      </div>
      <Image
        src="/images/main.jpg"
        className="mt-20 w-full object-cover"
        height={450}
        width={500}
        alt=""
      />
    </div>
  )
}

export default Header
