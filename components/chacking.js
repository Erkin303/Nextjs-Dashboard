import React from 'react'

const chacking = () => {
    return (
      <div>
            <div className="form-check form-switch">
            <input type="radio" className="form-check-input"  name="name1" id="flexRadioDefault1"/>
            <label htmlFor="flexRadioDefault1" className="form-check-label">Silver</label>
            </div>

            <div className="form-check form-switch"> 
            <input type="radio" className="form-check-input"  name="name1" id="flexRadioDefault2"/>
            <label htmlFor="flexRadioDefault2" className="form-check-label">Gold</label>
            </div>

            <div className="form-check form-switch">
            <input type="radio" className="form-check-input"  name="name1" id="flexRadioDefault3"/>
            <label htmlFor="flexRadioDefault3" className="form-check-label">Platinum</label>
            </div>
      </div>
        
    )
}

export default chacking
