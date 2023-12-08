import Image from 'next/image'
import {
  faSquarePinterest,
  faTwitter,
  faSquareFacebook,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-[3] flex-col items-center rounded-md bg-[#fdfbfb] ">
      <div className="flex flex-col items-center">
        <span className="title ">درباره ویرا</span>
        <Image
          src="/images/department.jpg"
          width={250}
          height={250}
          alt="department"
          className="mt-[15px]"
        />
        <p className="p-[30px] text-justify">
          آموزشگاه زبان ویرا با سابقه‌ی 20 ساله ، دارای مجوز رسمی از وزارت آموزش
          و پرورش و جزء بهترین آموزشگاه‌های زبان ایران در زمینه آموزش زبان‌های
          روز دنیا (انگلیسی، فرانسه، آلمانی، اسپانیایی، ترکی استانبولی و …) می
          باشد .
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <span className="title ">بیشتر بدانیم</span>
        <ul className="sidebarList px-[30px]">
          <li className="sidebarListItem ">سال تاسیس</li>
          <li className="sidebarListItem">1390/02/04</li>
          <li className="sidebarListItem">مدیریت</li>
          <li className="sidebarListItem">منصور جهانی</li>
          <li className="sidebarListItem ">آدرس</li>
          <li className="sidebarListItem ">
            خیابان امیرمازندرانی - جنب کوچه ی اتحاد - ساختمان مشاهیر - طبقه ی
            سوم - واحد 124
          </li>
        </ul>
      </div>
      <div className="flex w-full flex-col items-center ">
        <span className="title ">ما را دنبال کنید</span>
        <div className="mt-[15px] flex cursor-pointer items-center justify-center gap-[15px] text-[#444]">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faSquarePinterest} />
          <FontAwesomeIcon icon={faSquareInstagram} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
