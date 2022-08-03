export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className='card--img' />
            <div className='card--details'>
                <div className='card--header'>
                    <span className='card--icon'>
                        <i class="fa-solid fa-location-dot fa-2xs"></i>
                    </span>
                    <span className='card--location'>{props.location}</span>
                    <a className='card--link' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <span className='card--title'>{props.title}</span>
                <span className='card--date'>{props.startDate} - {props.endDate}</span>
                <span className='card--description'>{props.description}</span>
            </div>
        </div>
    )
}