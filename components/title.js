
import { Fade } from 'react-reveal';

export const Title = ({ title, className = '', position = 'center', subTitle = '' }) => {
  return (
    <Fade bottom cascade >
      <h2 className={`app-title ${className !== undefined ? className : ''} ${position}`}>
        {title}
        <span></span>
        <p>{subTitle}</p>
      </h2>
    </Fade>
  )
}
