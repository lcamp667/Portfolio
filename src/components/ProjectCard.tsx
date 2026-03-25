import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './ProjectCard.css'

interface ProjectCardProps {
  icon: Element,
  title: string,
  desc: string,
  link?: string
}

const card_style = {
  width: 'auto',
  height: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  padding: 16,
  alignContent: 'start',
  justifyItems: 'left',
  alignItems: 'vertical',
  display: 'grid'
}

const row_spacing = {
  display: 'grid',
  gap: 8
}

const desc_style = {
  fontSize: 12
}

const button_styling = {
  width: 110,
  fontSize: 12,
  borderRadius: 40,
  backgroundImage: 'linear-gradient(to top, #FF5FA2, #FB9AE9)',
  border: 0
}

const ProjectCard = ({icon, title, desc, link}:ProjectCardProps) => {

  return (
    <>
      <Container style={card_style}>
        <Row xs={12}>
          <Col xs={2} sm={2} md={1} lg={2}>
            <Row style={{ alignContent: 'center' }}>
              {icon}
            </Row>
          </Col>
          <Col xs={10} sm={10} md={11} lg={10} style={row_spacing}>
            <Row>
              <h6 className='card-title'>{title}</h6>
            </Row>
            <Row>
              <p style={desc_style}>{desc}</p>
            </Row>
            {link ? 
            <Row>
              <Button
                variant="none"
                size="sm"
                style={button_styling}
                href={link}
              >
                View Project
              </Button>
            </Row>
            :
            <></>
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectCard