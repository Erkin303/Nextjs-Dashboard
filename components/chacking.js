import React from 'react'

const chacking = () => {
    return (
      <div>
            <div class="form-check form-switch">
            <input type="radio" class="form-check-input"  name="name1" id="flexRadioDefault1"/>
            <label htmlFor="flexRadioDefault1" class="form-check-label">Silver</label>
            </div>

            <div class="form-check form-switch"> 
            <input type="radio" class="form-check-input"  name="name1" id="flexRadioDefault2"/>
            <label htmlFor="flexRadioDefault2" class="form-check-label">Gold</label>
            </div>

            <div class="form-check form-switch">
            <input type="radio" class="form-check-input"  name="name1" id="flexRadioDefault3"/>
            <label htmlFor="flexRadioDefault3" class="form-check-label">Platinum</label>
            </div>
      </div>
        
    )
}

export default chacking
