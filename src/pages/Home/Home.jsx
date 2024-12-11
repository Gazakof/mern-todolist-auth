import React from 'react'
import Navbar from '../../components/Navigationbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'


const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard 
            title="Meeting at 7am"
            date="3rd Apr"
            content="Meeting at 7am on 3rd April"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button  className='w-14 h-14 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'>
        <MdAdd className='text-4xl text-white' />
      </button>

      <AddEditNotes />
    </>
  )
}

export default Home