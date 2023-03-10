import { Button, Form, Row, Col } from "react-bootstrap"
import { SET_VALUES } from "../middleware"

export const WelcomeModal = ({show}) => {

  const handleClick = () => {
    SET_VALUES( 'welcome', false );
    const modalEvent = new Event('ModalShow');
    window.dispatchEvent(modalEvent);
  }

  console.log({show});

  return (
    <div className={`app-welcome-modal ${(show && show !== null) ? 'enabled' : 'desabled' }`}>
      <div className="content">
        <Button className="btn-close" onClick={handleClick}><i className="icon-cancel" /></Button>
        <h2>Where did you find us?</h2>
        <Form.Check
          type="radio"
          label="Instagram"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Facebook"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Youtube"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Col sm={3}>
            <Form.Check
              type="radio"
              label="Friend"
              name="formHorizontalRadios"
              id="formHorizontalRadios4"
            />
          </Col>
          <Col sm={9}>
            <Form.Control type="password" placeholder="Full Name" />
          </Col>
        </Form.Group>
        <Button>Submit</Button>
      </div>
    </div>
  )
}
