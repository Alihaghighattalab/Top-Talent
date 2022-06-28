import ProfileInfo from '../Components/User/ProfileInfo'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PublicRepo from '../Components/User/PublicRepo'
import axios from 'axios'

export default function Username() {
  const { username } = useParams()
  const [userInfo, setUserInfo] = useState([])
  const [userRepo, setUserRepo] = useState([])
  const [filterValue, setFilterValue] = useState(1)
  const [error, setError] = useState(false)
  
  var resultFilter = []
  useEffect(() => {
    getUsername()
    getUserRepo()
  }, [filterValue],[username])


  const getUsername = async () => {
    await axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUserInfo(response.data)
      }).catch(() => {
         setError(true)
      })
  }

  const getUserRepo = async () => {
    await axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setUserRepo(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  resultFilter = userRepo.sort((a, b) => {
    if (filterValue == 1) {
      return userRepo
    } else if (filterValue == 2) {
      if (a.forks_count > b.forks_count) {
        return 1
      } else if (a.forks_count < b.forks_count) {
        return -1
      } else {
        return 0
      }
    } else if (filterValue == 3) {
      if (a.stargazers_count > b.stargazers_count) {
        return 1
      } else if (a.stargazers_count < b.stargazers_count) {
        return -1
      } else {
        return 0
      }
    } else {
      if (a.updated_at > b.updated_at) {
        return 1
      } else if (a.updated_at < b.updated_at) {
        return -1
      } else {
        return 0
      }
    }
  })


  return (
    <>
      <ProfileInfo userInfo={userInfo} />
      <div className='container'>
        <select className="form-select mb-1" dir='rtl' onChange={e => setFilterValue(e.target.value)}>
          <option value="1">No Filter</option>
          <option value="2">Fork</option>
          <option value="3">Star</option>
          <option value="4">Date</option>
        </select>
      </div>
      <PublicRepo repoInfo={resultFilter} />
    </>
  )
}
