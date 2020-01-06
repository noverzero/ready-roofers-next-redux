import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const TerritoryOwner = () => {
 
  return (
    <div className="">
        <div className="frame bg-info" >
            Territory Owner Component
        </div>
        <style jsx>{`
            .frame {
                display: block;
                height: 100px;
                color: yellow;
                z-index 9;
                float: right;
            }

        `}</style>
    </div>
  )
}

export default TerritoryOwner
