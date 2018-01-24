import React from 'react'
import { getRouteProps, Link } from 'react-static'

//

export default getRouteProps(({ hospital }) => (
  <div>
    <Link to="/hospitals/">{'<'} Back</Link>
    <br />
    <h3>{hospital.name}</h3>
  </div>
))
