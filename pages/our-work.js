import React from 'react'
import { withRedux } from '../lib/redux'
import Layout from '../components/Layout'


const OurWorkPage = () => (
    <>
    <Layout>
        <div className="background">
            Our Work Page
            <style jsx>{`
                .background{
                    background-color: LightSteelBlue;
                    height: 800px;
                }
            `}
            </style>
        </div>
    </Layout>
    </>
)

export default withRedux(OurWorkPage)