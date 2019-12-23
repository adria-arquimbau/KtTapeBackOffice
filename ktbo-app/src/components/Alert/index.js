import React, { useState } from 'react'
import { Button, Alert, Heading } from 'bootstrap/dist/css/bootstrap.min.css'

function AlertModal() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
        
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    )
  }
  
 export default AlertModal