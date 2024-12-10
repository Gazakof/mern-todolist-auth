import React from 'react'
import Navbar from '../../components/Navigationbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <NoteCard 
          title="Meeting at 7am"
          date="3rd Apr"
          content="Meeting at 7am on 3rd April"
          tags={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </>
  )
}

export default Home