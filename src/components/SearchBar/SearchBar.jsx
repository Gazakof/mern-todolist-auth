import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const SearchBar = ({ value , onChage, handleSearch, onClearSearch }) => {
  return (
    <>
        <div className='w-80 flex items-center px-4 bg-slate-200 rounded-lg'>
            <input
                type='text'
                placeholder='Search notes'
                className='w-full text-xs bg-transparent py-[10px] outline-none'
                value={value}
                onChange={onChage}
            />
            {value && (
                <IoMdClose 
                    className='text-xl text-slate-600 cursor-pointer hover:text-black mr-3'
                    onClick={onClearSearch}
                />
            )}
            <FaMagnifyingGlass
                className='text-slate-500 cursor-pointer hover:text-black'
                onClick={handleSearch}
            />
        </div>
    </>
  )
}

export default SearchBar