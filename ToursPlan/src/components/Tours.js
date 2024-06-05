import Card from "./Card";

function Tours({tours , removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>
            {/* div for cards */}
            {/* alag alag na likkar ham map function use krlenge */}
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                    // {...tour} ka use krke ham poora ka poora object pass kr skte hai 
                }
            </div>
        </div>
    )

}

export default Tours;