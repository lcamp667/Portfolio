import ProjectCard from './ProjectCard'
import labubu from '../assets/labubu.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { container_style, title_style_left } from '../consts/consts'
import * as Icon from 'react-bootstrap-icons';

// const col_spacing = {
//   display: 'flex',
//   gap: 0
// }

const Projects = () => {

  return (
    <Container style={container_style}>
      <Row className="justify-content-center g-4">
        <Col xs={12}>
          <h1 style={title_style_left}>My Work</h1>
        </Col>
        <Col xs={12} lg={6}>
          <ProjectCard
            icon={<Icon.Controller size={32} color='green'/>}
            title={"Rockstar Games Social Media Audit"}
            desc={"Audit of Rockstar's Instagram and Twitter engagement, identifying strengths, weaknesses, and strategic opportunities."}
            link={"https://www.canva.com/design/DAHC3wyQErc/Ip2vXb0tmvHY22jeAWtOUA/edit?utm_content=DAHC3wyQErc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"}
          />
        </Col>
        <Col xs={12} lg={6} className="justify-content-center">
          <ProjectCard
            icon={<Image src={labubu} style={{ width: '100%', alignItems: 'center' }}/>}
            title={"Popmart-Themed Event Marketing Campaign"}
            desc={"Developed and executed a Popmart-themed event campaign using Instagram promotion and incentive-based marketing, reaching 1,871 views and driving 15 event attendees."}
            link={"https://www.canva.com/design/DAHBXtg5qbM/Z8pN2O9ySt573Plw92Lhug/edit?utm_content=DAHBXtg5qbM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"}
          />
        </Col>
        <Col xs={12} lg={6}>
          <ProjectCard
            icon={<Icon.Book size={32} color='darkred'/>}
            title={"Independent Comic Website & Marketing"}
            desc={"Designing a website and developing an online marketing plan for an independent comic creator."}
          />
        </Col>
        <Col xs={12} lg={6}>
          <ProjectCard
            icon={<Icon.Building size={32} color='tan'/>}
            title={"CSULA Marketing Club TikTok Account"}
            desc={"Created and executed a trend-driven TikTok campaign for a campus organization, achieving 863 views and strong algorithmic reach (80% For You page), with early follower conversion."}
            link={"https://www.canva.com/design/DAHE5qczn1s/tmqxElU2umJVRnopP453Qw/edit?utm_content=DAHE5qczn1s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Projects