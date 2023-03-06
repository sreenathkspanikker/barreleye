import { Col, Figure, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal';
import Link from 'next/link'
import { Section } from '../components'

export default function PageList() {

  const data = [
    {
      title: "Aviation Transport",
      image: "https://picsum.photos/id/327/400/250"
    },
    {
      title: "Chemistry and Chemical Technology",
      image: "https://picsum.photos/id/328/400/250"
    },
    {
      title: "Civil Engineering",
      image: "https://picsum.photos/id/329/400/250"
    },
    {
      title: "Aviation Transport",
      image: "https://picsum.photos/id/400/400/250"
    },
    {
      title: "Aviation Transport",
      image: "https://picsum.photos/id/401/400/250"
    },
    {
      title: "Aviation Transport",
      image: "https://picsum.photos/id/402/400/250"
    },
    {
      title: "Aviation Transport",
      image: "https://picsum.photos/id/403/400/250"
    },
    {
      title: "Aviation Transport",
      image: "https://picsum.photos/id/404/400/250"
    },
  ]

  return (
    <Section>
      <Row>
        {data?.map((items, idx) => (
          <Col sm={4} key={idx}>
            <Link href={{
              pathname: '/details',
              query: { slug: idx, title: items.title }}}
            >
              <Fade bottom  >
              <Figure>
                <Figure.Image src={items.image} />
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
