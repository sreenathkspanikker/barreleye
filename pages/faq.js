import { Fade } from 'react-reveal';
import { Collapse } from 'antd';
import { Layout, Section } from "../components";

const { Panel } = Collapse;

const text = `
Tieto Deutschland ist eine Tochtergesellschaft von Tietoevry Oyi, dem größten nordeuropäischen IT-Dienstleistungsunternehmen mit 24.000 Mitarbeiter/innen rund um den Globus. Tietoevry ist seit 2000 in Deutschland vertreten und wir begegnen einer Vielzahl von Herausforderungen mit unseren fortschrittlichen IT-Services und Lösungen: von ERP- und Produktionslösungen bis hin zu ganzheitliche Optimierungsmodelle zum Arbeitsplatz der Zukunft sowie Business Intelligence und Infrastruktur Dienstleistungen. Mit unseren smarten Produkten, digitalen Services und mobilen Lösungen eröffnen wir unseren Kunden neue Absatzmöglichkeiten, steigern deren Kundenzufriedenheit, optimieren den Vertrieb und gestalten Arbeitsplätze der Zukunft inspiriert von sozialen Medien. Wir glauben an professionelle Entwicklung und Ergebnisse, indem wir unsere Kunden auf ihrem Weg in eine sinnvolle digitale Zukunft unterstützen. Bei Tieto Germany reicht unser Entwicklungs- und Beratungsportfolio von Branchenlösungen und Data Driven Business bis hin zu Customer Experience Management und SAP-Services für digitale Beratung und Transformation. Mit 97 Experten und einem Büro in Regensburg engagiert sich Tieto Germany täglich für die Zufriedenheit unserer Kunden.
`;

export default function Faq() {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Layout className="page-faq">
                <div className="faq-content">
                    <Fade bottom  >
                        <Collapse defaultActiveKey={['1']} onChange={onChange}>
                            <Panel header="This is panel header 1?" key="1">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 2?" key="2">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 3?" key="3">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Fade>
                </div>
        </Layout>
    )
}
