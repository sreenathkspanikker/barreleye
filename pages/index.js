
import { Row, Col } from 'react-bootstrap'
import { Section, Title, CourseSlider, ClientSlider, MarchandiseSlider } from '../components'

export default function Home() {

  return (
    <>
      {/* Why Barreleye */}
      <Section className="section-about" id="about">
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Title title="Why Barreleye ?" />
            <p>Lörem ipsum diasam hotörade påsm trinetik. Pårad soligt, kosam diren båskapet bel. Syngen skimma manas vattkoppsgodis, och disamma, oaktat plad mobilzombie. Trininar sper eller mikror även om dekanade konnetik. Supranyvinade depreheten. Tinera fande, fjärrnyckel på sesyning såväl som vypån. Ik hemifertad tinade och infralig såsom sylingar, autoll och viligt monor eftersom ber. Bessade kromirade i budgetstup tihonade mikrode antetönde proniling. Nyling dis fesåliga uskade. Nispenat digt. Fessa snippgympa androvision i astrolåna vyr dekoktig timygen okögon, eller bokstavsdrog bera beligen. Kompetensutvisning nyktiga symyning bertad nenera men antisk is. Metrofoni ar då påsoligt, resade. Issa hässade inte tins min orade jimyll bögöbelt så savysm göpöning. Jis böna nyktiga.
              Astropal nyde, böck vang. Dinörar nul predade än stenolig hypona i soll mipp, anteskap. Suprande igus så flipperförälder, ugon. Friva latrer att tesoda har bedoll. Viviren fadegisk har der anar, bölåsk antende prodat nemylig plaling panism multinissade vyl.
            </p>
          </Col>
        </Row>
      </Section>

      {/* Top Courses */}
      <Section className="section-courses">
        <Title
          title="Top Courses"
          subTitle="Lörem ipsum diasam hotörade påsm trinetik. Pårad soligt, kosam diren båskapet bel. Syngen skimma manas vattkoppsgodis, och disamma, oaktat plad mobilzombie. Trininar sper eller mikror även om dekanade konnetik. Supranyvinaen."
        />
        <CourseSlider />
      </Section>

      {/* Marchindise */}
      <Section className="section-marchandaise">
        <Title
          title="Marchandise"
          subTitle="Lörem ipsum diasam hotörade påsm trinetik. Pårad soligt, kosam diren båskapet bel. Syngen skimma manas vattkoppsgodis, och disamma, oaktat plad mobilzombie. Trininar sper eller mikror även om dekanade konnetik. Supranyvinaen."
        />

        <MarchandiseSlider />
      </Section>

      {/* Marchindise */}
      <Section className="section-clients">
        <Title
          title="Clients"
          subTitle="Lörem ipsum diasam hotörade påsm trinetik. Pårad soligt, kosam diren båskapet bel. Syngen skimma manas vattkoppsgodis, och disamma, oaktat plad mobilzombie. Trininar sper eller mikror även om dekanade konnetik. Supranyvinaen."
        />
        
        <Row className="justify-content-md-center">
          <Col md={10}>
            <ClientSlider />
          </Col>
        </Row>
      </Section>
    </>
  )
}
