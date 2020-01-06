import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const TerritoryOwner = () => {
 
  return (
    <div className="frame border border-white">
        <div className="text-white" >
            Territory Owner Component
        </div>
        <style jsx>{`
            .frame {
                height: 400px;
                width: 100%;
                background-color:#ff9933;
                float: right;
                margin: 00px;
            }
        `}</style>
    </div>
  )
}

export default TerritoryOwner
