import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className="mt-[15px] flex items-center  gap-[10px] bg-[#2e374a] p-4">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-lg text-[#7e7d7d]"
      />
      <input
        type="text"
        placeholder="جستجو"
        className="w-[50%] p-2 text-[#7e7d7d] outline-none"
      />
    </div>
  )
}

export default Search
