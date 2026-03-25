import { Col, Container, Image, Row } from 'react-bootstrap'
import { container_style, title_style_left } from '../consts/consts'
import * as Icon from 'react-bootstrap-icons'
import hottie from '../assets/portrait_4x.png'



const Contact = () => {

  return (
    <Container style={container_style}>
      <Row className="justify-content-center g-4">
        <Col xs={12} md={8} className="justify-content-center g-4">
          <Row className="justify-content-center g-4">
            <h1 style={title_style_left}>Let's Connect!</h1>
          </Row>
          <Row className="justify-content-start g-0">
            <Col xs={2}>
              <Icon.GeoAltFill size={32}/> 
            </Col>
            <Col xs={10}>
              <p style={{fontSize: 20}}>Los Angeles, CA</p>
            </Col>
          </Row>
          <Row className="justify-content-start g-0">
            <Col xs={2}>
              <Icon.TelephoneFill size={32}/> 
            </Col>
            <Col xs={10}>
              <p style={{fontSize: 20}}>909-762-8120</p>
            </Col>
          </Row>
          <Row className="justify-content-start g-0">
            <Col xs={2}>
              <Icon.EnvelopeFill size={32}/> 
            </Col>
            <Col xs={10}>
              <p style={{fontSize: 20}}>lcamp7845@gmail.com</p>
            </Col>
          </Row>
          <Row className="justify-content-center g-0">
            <Col xs={2}>
              <Icon.Linkedin size={32}/> 
            </Col>
            <Col xs={10}>
              <p style={{fontSize: 20}}>www.linkedin.com/in/lea-campos9</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Image src={hottie} style={{ width: '100%', height: 'auto', borderRadius: '16px' }}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact