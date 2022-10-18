import React from 'react'
import { useRecoilState } from 'recoil'
import Layout from '../components/Layout/Layout'
import HomeContent from '../components/SectionContent/HomeContent'
import { userState } from '../Recoil'

const Home = () => {
  const [user, setUser] = useRecoilState(userState)
  return (
    <Layout>
      <HomeContent />
    </Layout>
  )
}

export default Home
