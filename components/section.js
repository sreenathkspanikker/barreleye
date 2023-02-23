import { Container } from "react-bootstrap"

export const Section = ({children, className, id = ''}) => {
  return (
    <div className={`app-section ${className}`} id={id}>
        <Container>{children}</Container>
    </div>
  )
}
