import { Col, Row, Container, Image, Button } from 'react-bootstrap'
import dmc from '../assets/digital-marketing-certification.png'
import smm from '../assets/social-media-marketing.png'
import { container_style } from '../consts/consts'
import * as Icon from 'react-bootstrap-icons'

const img_style = {
  width: '93%',
  height: 'auto',
  padding: '16px',
  borderRadius: '24px'
}

const img_style2 = {
  width: '100%',
  height: 'auto',
  padding: '16px',
  borderRadius: '24px'
}

const button_styling = {
  width: 110,
  fontSize: 12,
  borderRadius: 40,
  backgroundImage: 'linear-gradient(to top, #FF5FA2, #FB9AE9)',
  border: 0
}

const Skills = () => {

  return (
    <>
      <Container style={container_style} className="justify-content-center">
        <Row xs={12}>
          <Col xs={12}>
            <h1 className="title left">Skills & Certifications</h1>
          </Col>
          <Col xs={6} className="justify-content-center">
            <Row xs={12} className="justify-content-center">
              <Image src={dmc} style={img_style}/>
            </Row>
            <Row xs={12}>
              <h5 style={{ textAlign: 'center' }}>Digital Marketing Certification</h5>
            </Row>
          </Col>
          <Col xs={6}>
            <Row xs={12} className="justify-content-center">
              <Image src={smm} style={img_style2}/>
            </Row>
            <Row xs={12}>
              <h5 style={{ textAlign: 'center' }}>Social Media Marketing</h5>
            </Row>
          </Col>
        </Row>
        <Row xs={12} className="justify-content-center">
          <Button
            href="https://www.linkedin.com/in/lea-campos9/details/certifications/"
            style={button_styling}
            variant="none"
          >
            <Icon.Plus size={16}/> More Here
          </Button>
        </Row>
      </Container>
    </>
  )
}

export default Skills
