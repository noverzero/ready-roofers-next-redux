import React from 'react'
import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import useInterval from '../lib/useInterval'
import Home from '../components/Home'

const IndexPage = () => {
  return (
    <>
      <div className="home">
        <Home />
      </div>

    </>
  )
}

IndexPage.getInitialProps = ({ reduxStore }) => {
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

export default withRedux(IndexPage)
