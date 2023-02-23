import { Col, Row, ListGroup } from "react-bootstrap";
import { Section } from "../components";

export default function Details() {
    return (
        <Section className="section-details-one">
            <p>Lörem ipsum deras pamåtigt timent anastat: utom knarkometer för atektig, sunat. Gudade exomålig egisk miska i päfapp i hexassade androsiv. Öde eböment trevis annonsblockerare fåde. Båledes hidoligt benat fang åde. Vilogi fagon.
                Ses heterosade en endosiv. Befapägen sosk josyheten presanas. Podåktigt mononing. Farar begt jag bens lågongen ore. Spebunde måhöck rorat utan spesm, vövaliga nena. Du kan vara drabbad.
            </p>
            <Row>
                <Col md={8}>
                    <div className="block block-1">
                        <h4>Entry Requirements</h4>
                        <ol>
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                            <li>Cras justo odio</li>
                            <li>Dapibus ac facilisis in</li>
                        </ol>
                    </div>
                    <div className="block block-2">
                        <h4>Templates</h4>
                        <p>Lörem ipsum deras pamåtigt timent anastat: utom knarkometer för atektig, sunat. Gudade exomålig egisk miska i päfapp i hexassade androsiv. Öde eböment trevis annonsblockerare fåde. Båledes hidoligt benat fang åde.</p>
                    </div>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
        </Section>
    )
}
