import React from 'react';
import '../toursList.css';

class TourCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {

        fetch("dataTours.json")

            .then((response) => response.json())
            .then((data) => {
                data.sort((a, b) => a.name.localeCompare(b.name));
                this.setState({data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.data
                    .map((tour) => (
                        <div key={tour.id} className="tour__card">
                            <div className="tour__card__img">
                                <img src={tour.image} alt="Tour title"/>
                            </div>
                            <div className="tour__card__inf">
                                <div className="tour__card__top">
                                    <h2 className="tour__name">{tour.name}</h2>
                                    <p className="card__description">{tour.description}</p>
                                </div>
                                <div className="tour__card__but">
                                    <p>{tour.price}</p>
                                    <button className="tour__button">show more</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

export {
    TourCard
};