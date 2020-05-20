import React from 'react'

const ProfileDeets = ({ prop, title }) => (
<>
<h3>{title}</h3>
  <div className="input-box">
  <input 
  className="input"
  // placeholder="name"
  name={prop}
  value={prop ? prop : ""}
  // onChange={handleChange}
  />
  </div>
</>
)

export default ProfileDeets