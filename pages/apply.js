import axios from "axios";
import { useState } from "react";
import { Form, Col, Row, InputGroup, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Layout, Section } from "../components";

export default function ApplyNow() {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        console.log({ data });
        axios.post("YOUR_API_ENDPOINT", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Layout className="page-apply-now">
            <Section className="section-apply-one">
                <div className="form-wrap">
                    <Form onSubmit={handleFormSubmit}>
                        <Row>
                            <Col sm={6}>
                                <Form.Group className="mb-4" controlId="formFroup1">
                                    <Form.Label>First Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First name" name="firstName" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-4" controlId="formFroup2">
                                    <Form.Label>Last Name*</Form.Label>
                                    <Form.Control type="Text" placeholder="Enter Last name" name="lastName" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-4" controlId="formFroup3">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-4" controlId="formFroup3">
                                    <Form.Label>Phone number*</Form.Label>
                                    <InputGroup className="mb-4">
                                        <DropdownButton
                                            variant="outline-secondary"
                                            title="Country code"
                                            id="input-group-dropdown-1"
                                        >
                                            <Dropdown.Item href="#">+91</Dropdown.Item>
                                            <Dropdown.Item href="#">+371</Dropdown.Item>
                                        </DropdownButton>
                                        <Form.Control aria-label="Text input with dropdown button" name="phoneNumber" onChange={handleInputChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label>10th Certificate [  PDF - Only ]*</Form.Label>
                                    <Form.Control type="file" name="tenthCertificate" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label>12th Certificate [  PDF - Only ]*</Form.Label>
                                    <Form.Control type="file" name="twelfthCertificate" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label>UG / PG Certificate [  PDF - Only ]</Form.Label>
                                    <Form.Control type="file" />
                                    <Form.Control type="file" name="ugpgCertificate" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label>UG / PG Consolidated mark sheet [  PDF - Only ]</Form.Label>
                                    <Form.Control type="file" name="ugpgMarkSheet" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label>IELTS /TOEFL/MOI [  PDF - Only ]*</Form.Label>
                                    <Form.Control type="file" name="ieltsToeflMoi" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label>Passport [  PDF - Only ]*</Form.Label>
                                    <Form.Control type="file" name="passport" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label>If any other documents required</Form.Label>
                                    <Form.Control type="file" name="otherDocuments" onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-4">
                            <Form.Check
                                required
                                label="By submitting this form, you agree to the  terms and conditions:"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Check
                                required
                                label="You consent to the collection, use, and storage of your personal information as outlined in our privacy policy."
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Check
                                required
                                label="The information you provide is accurate and complete to the best of your knowledge."
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button >Submit</Button>
                    </Form>
                </div>
            </Section >
        </Layout>
    )
}
