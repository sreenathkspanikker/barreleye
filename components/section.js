import { Container } from "react-bootstrap"

export const Section = ({children, className}) => {
  return (
    <div className={`app-section ${className}`}>
        <Container>{children}</Container>
    </div>
  )
}
