import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/Image';
import { Col, Figure, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal';
import Link from 'next/link'
import { Section } from '../components'

// Jobs
import IT from '../utils/jobs/it.json'
import Other from '../utils/jobs/other.json'

// Courses
import Bachelors from '../utils/courses/bachelors.json'
import Masters from '../utils/courses/masters.json'
import PHD from '../utils/courses/phd.json'

export default function PageList() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    setData(() => {
      switch (title) {
        case 'IT':
          return IT
        case 'Other':
          return Other
        case 'Bachelors Program':
          return Bachelors
        case 'Masters Program':
          return Masters
        case 'PHD':
          return PHD
        default:
          break;
      }
    })
  }, [title])


  return (
    <Section>
      <Row>
        {data?.map((items, idx) => (
          <Col sm={4} key={idx}>
            <Link href={{
              pathname: '/details',
              query: { slug: idx, title: items.title }
            }}
            >
              <Fade bottom  >
                <Figure>
                  <Image src={require(`../assets/images/${items.image}`)} className="img-fluid" />
                  <Figure.Caption>{items.title}</Figure.Caption>
                </Figure>
              </Fade>
            </Link>
          </Col>
        ))}
      </Row>
    </Section>
  )
}
