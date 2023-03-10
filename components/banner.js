export const Banner = ({data}) => (
    <p className='app-banner'>
            <i className="animate__animated animate__infinite animate__delay animate__headShake">🔔</i>
            {data?.content}
    </p>
)
