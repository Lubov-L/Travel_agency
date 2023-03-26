import React from 'react';
import '../toursList.css';

class TourCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], count: 9};
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

    handleShowMore = (e) => {
        e.preventDefault();
        this.setState({count: this.state.count + 6});
    };


    render() {
        return (
            <div className="tour__list-block">
                <div className="tour__list">
                    {this.state.data
                        .filter((tour, index) => index < this.state.count)
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
                                        <p>{tour.price} $</p>
                                        <button className="tour__button">read more</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="tour__more">
                    <span className="tour__more__button" onClick={this.handleShowMore}>show more</span>
                </div>
            </div>
        )
    }
}

export {
    TourCard
};