import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DashboardHearder extends Component {
 
  render() {
    return (
      <div>
      <Row>
       <Col 
          lg={12} xs={12} sm={12} md={12} 
          className="text-center text-uppercase font-weight-bold text-info" style={{backgroundColor: "grey"}}>
         header...
       </Col>
      </Row>
    </div>
    )
  }

}

export default DashboardHearder
