import { Col, Container, Image, Row } from "react-bootstrap"
import { container_style } from "../consts/consts"
import popmart from '../assets/popmart.png'
import cbs from '../assets/consumer-behavior.png'

const img_style = {
  width: 'auto',
  height: '400px',
  padding: '16px',
  borderRadius: '24px'
}

const InAction = () => {

  return (
    <Container style={container_style}>
      <Row xs={12}>
        <Col xs={12}>
          <h1 className="title right">Lea in Action</h1>
        </Col>
        <Col xs={12} lg={6}>
          <Row xs={12} className="justify-content-center">
            <Image src={popmart} style={img_style}/>
          </Row>
          <Row xs={12}>
            <h5 style={{ textAlign: 'center' }}>Popmart Case Study</h5>
          </Row>
        </Col>
        <Col xs={12} lg={6}>
          <Row xs={12} className="justify-content-center">
            <Image src={cbs} style={img_style}/>
          </Row>
          <Row xs={12}>
            <h5 style={{ textAlign: 'center' }}>Consumer Behavior Presentation</h5>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default InAction