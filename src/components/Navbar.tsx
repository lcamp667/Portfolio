import { Button, Col, Container, Navbar, Row } from "react-bootstrap"
import { container_style, title_style } from "../consts/consts"

interface NavProps {
  refs: Record<string, React.RefObject<HTMLDivElement | null>>,
  scrollFunc: Record<string, () => void>
}

const nav_styling = {
  backgroundColor: 'rgba(255, 227, 241, 0.9)',
  width: '100%',
  borderRadius: 20
}

const button_styling = {
  width: 110,
  fontSize: 12,
  borderRadius: 40,
  backgroundImage: 'linear-gradient(to top, #FF5FA2, #FB9AE9)',
  border: 0
}

const Nav = ({refs, scrollFunc}:NavProps) => {

  return (
    // <Navbar style={nav_styling}>
    //   <Navbar.Brand>
    //     <h2 style={title_style}>Lea's Marketing Portfolio</h2>
    //   </Navbar.Brand>
    // </Navbar>
    
    <Container style={container_style}>
      <Row>
        <h2 style={title_style}>Lea Campos' Marketing Portfolio</h2>
      </Row>
      <Row xs={12} className="justify-content-center">
        <Col xs={4} className="justify-content-center">
          <Row className="justify-content-center">
          <Button
            style={button_styling}
            onClick={scrollFunc.about}
            variant="none"
          >
            About Me
          </Button>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="justify-content-center">
          <Button
            style={button_styling}
            onClick={scrollFunc.works}
            variant="none"
          >
            My Works
          </Button>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="justify-content-center">
          <Button
            style={button_styling}
            onClick={scrollFunc.contact}
            variant="none"
          >
            Let's Connect!
          </Button>
          </Row>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Nav