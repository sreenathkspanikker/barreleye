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
import PlaceToVisit from '../utils/placeToVistit.json'

export default function PageList() {
  const [data, setData] = useState([]);
  const [path, setPath] = useState('/details');
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    const fetchData = () => {
      switch (title) {
        case 'IT':
          setData(IT);
          break
        case 'Other':
          setData(Other);
          break
        case 'Bachelors Program':
          setData(Bachelors);
          break
        case 'Masters Program':
          setData(Masters);
          break
        case 'PHD':
          setData(PHD);
          break
        case 'Places to visit':
          setData(PlaceToVisit);
          setPath('/placeToVisit')
          break
        default:
          break;
      }
    }
    fetchData();

  }, [title])


  return (
    <Section>
      {console.log({path})}
      <Row>
        {data?.map((items, idx) => (
          <Col sm={4} key={idx}>
            <Link href={{
              pathname: path,
              query: { slug: items.id, title: items.title }
            }}
            >
              <Fade bottom  >
                <Figure>
                  <Image src={require(`../assets/images/${items.image}`)} className="img-fluid" alt={`title-${idx}`} />
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
