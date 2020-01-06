import React from 'react'
import { useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import useInterval from '../lib/useInterval'
import Layout from '../components/Layout'
import Home from '../components/Home'
import TerritoryOwner from '../components/TerritoryOwner'

const IndexPage = () => {
  return (
    <>
      <div className="layout">
        <Layout>
          <div className="a">
            <Home />
          </div>
          <div className="">
            <TerritoryOwner/>
          </div>
        </Layout>
        <style jsx>{`

        `}
        </style>
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
