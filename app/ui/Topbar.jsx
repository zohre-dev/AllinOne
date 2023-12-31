import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquarePinterest,
  faTwitter,
  faSquareFacebook,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-[50px] w-full items-center bg-[color:var(--bgSoft)] ">
      <div className="topRight  flex-[3] ">
        <Link href="./profile">
          <Image
            src="/images/students/01.jpg"
            width={40}
            height={40}
            alt="profile image"
            className="cursor-pointer rounded-full object-cover"
          />
        </Link>
        <Link href="./login" className="cursor-pointer">
          ورود
        </Link>
      </div>

      <ul className="topCenter flex-[6] font-extrabold">
        <Link href="./">
          <li>خانه</li>
        </Link>
        <Link href="./teachers">
          <li>اساتید</li>
        </Link>
        <li>درباره ی ما</li>
        <Link href="./">
          <li>خروج</li>
        </Link>
      </ul>

      <div className="topLeft flex-[3] cursor-pointer text-[#444]">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faSquarePinterest} />
        <FontAwesomeIcon icon={faSquareInstagram} />
      </div>
    </div>
  )
}

export default Topbar
