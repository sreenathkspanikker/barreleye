import Image from "next/image";
import { Col, Figure, Row } from "react-bootstrap";
import { Layout, Title } from "../components";

import AboutJson from "../utils/about.json";

export default function About() {

    return (
        <Layout className="page-about">
            {AboutJson?.data?.map((items, idx) => (
                <div className="list-item" key={idx}>
                    <Row>
                        <Col sm={6}>
                            <Figure>
                                <Image
                                    src={require(`../assets/images/${items.image}`)}
                                    className="img-fluid"
                                    alt="about" />
                            </Figure>
                        </Col>
                        <Col sm={6}>
                            <Title title={items?.title} />
                            <p>{items?.description}</p>
                        </Col>
                    </Row>
                </div>
            ))}

            <div className="about-team">
                <Title
                    title="Barreleye Tree"
                    subTitle="Lörem ipsum pladat prev. Aplande biovalens. Kontratt tigisk, i egokäna om göss dinde, hexanymir. Geongar megapåra mans att decibel. Hev or i dijön social turism dumpling. Sagt terasm nev så hexafalig, i plajolig samt d"
                />
                <div className="team-list">
                    {AboutJson?.team?.map((items, idx) => (
                        <Figure key={idx}>
                            <Image
                                src={require(`../assets/images/${items.image}`)}
                                className="img-fluid"
                                alt="about" />
                            <h3>{items?.title}</h3>
                            <p>{items?.name}</p>
                            <a className="btn btn-secondary" href={items.url} target="_blank">Read more</a>
                        </Figure>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
