import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text"> 
          Du glaubst, wir passen zusammen? <br className="sm:block hidden" />
          Schreib mich an! 
        </p>
            <Link to="/contact" className="btn" style={{ minWidth: '187px', width:'auto', marginRight: '40px', marginLeft: '40px'}}>
                 Kontakt   
            </Link>
    </section>
  )
}

export default CTA