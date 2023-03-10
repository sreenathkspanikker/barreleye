
import {Fade} from 'react-reveal';
import { Row, Col } from 'react-bootstrap'
import { Layout, Section, Title, CourseSlider, ClientSlider, MarchandiseSlider } from '../components'

export default function Home() {

  return (
    <Layout className="page-home">
      {/* Why Barreleye */}
      <Section className="section-about" id="about">
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Title title="Why Barreleye ?" />
            <Fade bottom >              
              <p>The word "consultant" is not much popular as "agent", just because of the reason no one ever got such a service.
Barreleye is wiping out the term "agent" hereafter, to replace the services, which served on your behalf.
The consultant doesn't work on your behalf, but will train and guide with the all the possible methods to make you ready for to talk in public, get ready for an interview or to
deliver a quality lecture on your favorite topic.
As referred in our vision, our aim is to make the education to the new level called "learn by doing", also known as  applied education. Barreleye recommends and strongly believes that can impact
an individual's ability on decision making, design thinking and implementation. 
If you are ready to learn the new norm of learning, come and join us and let's paddle alongside.
              </p>
              </Fade>
          </Col>
        </Row>
      </Section>

      {/* Top Courses */}
      <Section className="section-courses">
        <Title
          title="Top Courses"
          subTitle="The following are the trending courses available in Latvia in top Universities. Slide through them to see the best crush."
        />
        <CourseSlider />
      </Section>

      {/* Marchindise */}
      <Section className="section-marchandaise">
        <Title
          title="Marchandise"
          subTitle="We are now the emerging brand, which is in it's finest shape. Checkout our new products from our brandspace. Unfortunately, the service is only available in Kerala. 
          The shipping will be free of cost across the state."
        />

        <MarchandiseSlider />
      </Section>

      {/* Marchindise */}
      <Section className="section-clients">
        <Title
          title="Our Clients"
          subTitle="See how Barreleye made their success by convincing the top Universities in Latvia. We underline, the trust and quality service could make difference, no matter how experience you are.
          The results are counted based on your ability to adapt, not by your expertise and experience."
        />
        
        <Row className="justify-content-md-center">
          <Col md={10}>
            <ClientSlider />
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}

