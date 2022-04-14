import React from 'react'
import ImageOne from '../images/baby-owlbear.jpg'
import ImageTwo from '../images/adult-owlbear.jpg'
import ImageThree from '../images/dirty-owlbear.jpg'

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="baby" className="h-full rounded mb-20 shadow"/>
        <div className="center-content">
          <h2 className="text-2xl mb-2">Baby Owlbear</h2>
          <p className="mb-2">Cute, cuddly, and deadly</p>
          <span>$25</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="adult" className="h-ful rounded mb-20 shadow"/>
        <div className="center-content">
          <h2 className="text-2xl mb-2">Baby Owlbear</h2>
          <p className="mb-2">Big, bad, and mean</p>
          <span>$5</span>
        </div>
      </div>
    </>

  )
}

export default Content
