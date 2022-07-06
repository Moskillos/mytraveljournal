export function Card(param){
    return(
    <div>
        <div className="card-container">
        <div>
            <img src={param.img} alt=""></img>
        </div>
        <div className="location-description">
            <div className="location-container">
                <div className="location">
                <img src="./Fill 219.png" alt="" ></img>
                <span>{param.location}</span>
                </div>                
                <span className="google">View on google Maps</span>
            </div>
            <div className="content">
                <h1>{param.title}</h1>
                <p className="data">{param.data}</p>
                <p className="description">{param.description}</p>
            </div>
            
        </div>
    </div>
        <hr></hr>
    </div>
    
    
    )
}