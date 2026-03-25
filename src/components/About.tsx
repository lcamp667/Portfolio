import { Col, Row, Container } from 'react-bootstrap';
import { container_style } from '../consts/consts';

interface AboutProps {
  image: string,
}

const img_style = {
  height: 'auto',
  width: '100%'
}

const About = ({image}:AboutProps) => {

  return (
      <Container style={container_style}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            {/* <div> */}
              <img style={img_style} src={image} />
              <h1 className="title center">About Me</h1>
            {/* </div> */}
          </Col>
          <Col xs={12} sm={12} md={6} lg={8}>
            {/* <div className="about-summary"> */}
              <ul>
                <li>Hi! I'm a senior pursuing my BBA with a concentration in marketing at Cal State LA.</li>
                <li>I've gained experience through my education and leadershiproles, making me comfortable working in fast-paced, collaborative environments.</li>
                <li>Outside of school, you can find me playing video games, trying new cafes, and hanging out with my sisters</li>
                <li>I'm seeking a Summer 2026 internship where I can apply my skills in a real-world setting and gain hands-on experience. I'm excited to learn from professionals and contribute to a creative team.</li>
              </ul>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
  )
}

export default About
