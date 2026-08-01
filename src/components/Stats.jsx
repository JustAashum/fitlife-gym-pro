import "./../styles/stats.css";

function Stats() {

    const stats = [
        { number: "5000+", label: "Happy Members" },
        { number: "25+", label: "Certified Trainers" },
        { number: "15+", label: "Years Experience" },
        { number: "4.9★", label: "Google Rating" }
    ];

    return (
        <section className="stats">

            <div className="stats-container">

                {
                    stats.map((item,index)=>(
                        <div className="stat-card" key={index}>

                            <h2>{item.number}</h2>

                            <p>{item.label}</p>

                        </div>
                    ))
                }

            </div>

        </section>
    )

}

export default Stats;