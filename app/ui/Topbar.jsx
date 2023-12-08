import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
  faSquarePinterest,
  faTwitter,
  faSquareFacebook,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const Topbar = () => {
  return (
    <div className="sticky top-0 flex h-[50px] w-full items-center">
      <div className="topRight  flex-[3] ">
        <Image
          src="/images/profile.jpg"
          width={40}
          height={40}
          alt="profile image"
          className="cursor-pointer rounded-full object-cover"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-lg text-[#666]"
        />
      </div>

      <ul className="topCenter flex-[6] ">
        <li>خانه</li>
        <li>اساتید</li>
        <li>درباره ی ما</li>
        <li>خروج</li>
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
