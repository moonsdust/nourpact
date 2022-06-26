import React from 'react';
import "./FoodRescueApi.css";

export default class FoodRescueApi extends React.Component{
    state = {
        loading1: true,
        loading2: true,
        loading3: true,
        location1: null,
        location2: null,
        location3: null
    };

    async componentDidMount() {
        document.body.style.backgroundColor = '#F5F5F5';
        const response = await fetch('https://serpapi.com/search.json?q=' + 'food rescue markham '+ '&hl=en&api_key=9bfb14a9252b2f2de2c5d620349978f361afbfac674d5ef67a125b9d5d8480ad');
        const data = await response.json();
        this.setState({location1: data.local_results.places[0], loading1: false})
        this.setState({location2: data.local_results.places[1], loading2: false})
        this.setState({location3: data.local_results.places[2], loading3: false})
        console.log(data);

    }

    render(){
        return(
            <div className = "verticalwrapper">
                <h1 className = "big">Nearby Food Rescues</h1>
                <div className = "cardrescue">
                    {/* first result */}
                    {this.state.loading1 || !this.state.location1 ? (
                        <div>loading...</div>
                    ) : (
                        <h1 className = "card__titlerescue">{this.state.location1.title}</h1>
                        )
                    }

                    {this.state.loading1 || !this.state.location1 ? (
                        <div>loading...</div>
                    ) : (
                        <a href = {this.state.location1.directions_link}><h2 className = "card__sumrescue">{this.state.location1.hours}</h2></a>
                    )
                    }
                </div>

                {/* second result */}
                <div className = "cardrescue">
                    {this.state.loading2 || !this.state.location2 ? (
                        <div>loading...</div>
                    ) : (
                        <h1 className = "card__titlerescue">{this.state.location2.title}</h1>
                    )
                    }

                    {this.state.loading2 || !this.state.location2 ? (
                        <div>loading...</div>
                    ) : (
                        <a href = {this.state.location2.directions_link}><h2 className = "card__sumrescue">{this.state.location2.hours}</h2></a>
                    )
                    }
                </div>

                {/* third result */}
                <div className = "cardrescue">
                    {this.state.loading3 || !this.state.location3 ? (
                        <div>loading...</div>
                    ) : (
                        <h1 className = "card__titlerescue">{this.state.location3.title}</h1>
                    )
                    }

                    {this.state.loading3 || !this.state.location3 ? (
                        <div>loading...</div>
                    ) : (
                        <a href = {this.state.location3.directions_link}><h2 className = "card__sumrescue">{this.state.location3.hours}</h2></a>
                    )
                    }
                </div>

            </div>
        );
    }
}