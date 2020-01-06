import React from 'react'
import { withRedux } from '../lib/redux'
import Layout from '../components/Layout'



const LearnRoofingPage = () => (
    <>
    <Layout>
        <div className="background">
            Learn Roofing Page
            <style jsx>{`
                .background{
                    background-color: PaleGoldenRod;
                    height: 800px;
                }
            `}
            </style>
        </div>
    </Layout>
    </>
)

export default withRedux(LearnRoofingPage)