import React from 'react'
import { getRouteProps, Link } from 'react-static'

//

export default getRouteProps(({ doctor }) => (
  <div>
    <Link to="/hospitals/">{'<'} Back</Link>
    <br />
    <h3>{doctor.name}</h3>
  </div>
))
