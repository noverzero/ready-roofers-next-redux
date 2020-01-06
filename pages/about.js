import React from 'react'
import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import useInterval from '../lib/useInterval'
import Layout from '../components/Layout'
import Clock from '../components/clock'
import Counter from '../components/counter'

const AboutPage = () => {
  // Tick the time every second
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)
  return (
    <>
    <Layout>
    <div className="background">This is the About Page
      <Clock />
      <Counter />
      <style jsx>{`
        .background{
          background-color: SandyBrown;
          height: 800px;
        }
      `}
      </style>
    </div>
    </Layout>
    </>
  )
}

AboutPage.getInitialProps = ({ reduxStore }) => {
  // Tick the time once, so we'll have a
  // valid time before first render
  const { dispatch } = reduxStore
  dispatch({
    type: 'TICK',
    light: typeof window === 'object',
    lastUpdate: Date.now(),
  })

  return {}
}

export default withRedux(AboutPage)
