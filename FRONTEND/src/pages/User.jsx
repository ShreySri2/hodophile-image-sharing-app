import React from 'react'

import UserGrid from '../components/UserGrid'
import usersData from '../dummyUserData'
import Header from '../components/Header'



function User() {
//   const usersData = [
//     {id: 'ui',
//     name: 'shrey srivastava',
//     image: 'https://images.pexels.com/photos/11427593/pexels-photo-11427593.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
//     places : 1


//     },

//     {id: 'ug',
//     name: 'golu srivastava',
//     image: 'https://images.pexels.com/photos/11427593/pexels-photo-11427593.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
//     places : 4

//     },

// ]
 
  return (
      <><Header/>
      <UserGrid items={usersData} />
      </>
  )
}

export default User
