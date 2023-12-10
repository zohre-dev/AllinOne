import Image from 'next/image'
import Pagination from '@/app/ui/Pagination'
import Search from '@/app/ui/Search'

const teachers = () => {
  return (
    <div>
      <div className="mx-auto my-10 w-[80%]">
        <Search />

        <table className="teachersTable w-full ">
          <thead>
            <tr className="">
              <td>شماره</td>
              <td>نام مدرس</td>
              <td>نام خانوادگی </td>
              <td>مدرک تحصیلی</td>
              <td>دوره</td>
              <td>ایمیل</td>
            </tr>
          </thead>
          <tbody>
            {/* ****************************************************** */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/01.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>نازنین</span>
                </div>
              </td>
              <td>عظیمی</td>
              <td>فوق لیسانس</td>
              <td>آیلتس</td>
              <td>mohammad.gamil.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>2</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/02.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>حسام</span>
                </div>
              </td>
              <td>مجیدی</td>
              <td>دکترا</td>
              <td>آیلتس</td>
              <td>hesam@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>3</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/03.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>الهام</span>
                </div>
              </td>
              <td>امامی</td>
              <td>لیسانس</td>
              <td>little pocket</td>
              <td>elham@gmail.com</td>
              <td></td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>4</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/04.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>مرتضی</span>
                </div>
              </td>
              <td>احمدی</td>
              <td>لیسانس</td>
              <td>interchange</td>
              <td>morteza@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>5</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/05.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>کوروش</span>
                </div>
              </td>
              <td>کبیری</td>
              <td>فوق لیسانس</td>
              <td>تاپ ناچ</td>
              <td>korosh@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>6</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/06.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>نگین</span>
                </div>
              </td>
              <td>رسولی</td>
              <td>لیسانس</td>
              <td>little pocket</td>
              <td>negin@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>7</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/07.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>سپهر</span>
                </div>
              </td>
              <td>الهی</td>
              <td>دکترا</td>
              <td>تافل</td>
              <td>sepehr@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>8</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/08.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>لیلا</span>
                </div>
              </td>
              <td>کلانتری</td>
              <td>فوق لیسانس</td>
              <td>side by side</td>
              <td>leila@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>9</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/09.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>ریحانه</span>
                </div>
              </td>
              <td>عظیمی</td>
              <td>لیسانس</td>
              <td>passe passe 3</td>
              <td>reyhane@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
            <tr>
              <td>10</td>
              <td>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/images/teachers/10.jpg"
                    height={50}
                    width={50}
                    alt="teacher profile"
                    className="rounded-full object-cover"
                  />
                  <span>مهران</span>
                </div>
              </td>
              <td>کریمی</td>
              <td>لیسانس</td>
              <td>little pocket</td>
              <td>mehran@gmail.com</td>
            </tr>
            {/* ****************************************************** */}
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
  )
}

export default teachers
