import React from 'react'
import { withRedux } from '../lib/redux'
import Layout from '../components/Layout'



const MaterialsPage = () => (
    <>
    <Layout>
        <div className="background">
            Materials Page
            <style jsx>{`
                .background{
                    background-color: RosyBrown;
                    height: 800px;
                }
            `}
            </style>
        </div>
    </Layout>
    </>
)

export default withRedux(MaterialsPage)