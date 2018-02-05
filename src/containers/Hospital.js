import React from 'react'
import { withRouteData, Link } from 'react-static'

//

export default withRouteData(({ hospital }) => (
  <div>
    <Link to="/hospitals/">{'<'} Back</Link>
    <br />
    <h3>{hospital.name}</h3>
  </div>
))
