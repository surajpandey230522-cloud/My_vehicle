import React from 'react'

function Footor() {
let footerstyle={
  Position:"absolute",
  top:"100vh",
  width:"100%"
}
  return (
    
      <footer className="bg-dark text-light py-3" style={footerstyle}>

        <p className='text-center'>
          2026 Vehicle World&copy; vehicle.com
          Designed with ❤️ using React
        </p>

    </footer>
  )
}

export default Footor
