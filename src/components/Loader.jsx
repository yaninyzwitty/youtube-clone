import React from 'react'

function Loader() {
  return (
    <div>
         <div style={{
        width: '80px',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center'
       
    }}>
        <img 
        src="https://miro.medium.com/max/1400/1*Gvgic29bgoiGVLmI6AVbUg.gif" alt="loading..." />
        <h2>
            <span style={{
            fontSize: '20px',
            color: '#fff',
            fontWeight: 'bold',
            fontFamily:'sans-serif',
            lineHeight: '20px',
            textAlign: 'center',
            }} >
                Loading...

            </span>
        </h2>
    </div>

    </div>
   
  )
}

export default Loader