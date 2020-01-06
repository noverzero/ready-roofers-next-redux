import React from 'react'
import { withRedux } from '../lib/redux'
import Layout from '../components/Layout'


const GetAQuotePage = () => (
    <>
    <Layout>
        <div className="background">
            Get a quote page
            <style jsx>{`
                .background{
                    background-color: DarkSalmon;
                    height: 800px;
                }
            `}
        </style>
        </div>
    </Layout>
    </>
)

export default withRedux(GetAQuotePage)