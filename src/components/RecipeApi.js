import React from "react";
import "./RecipeApi.css";

//add food from input into this constant to change searches
const food = 'apple-carrot-recipe';
export default class RecipeApi extends React.Component{
    state = {
        loading1: true,
        loading2: true,
        loading3: true,
        recipe1: null,
        recipe2: null,
        recipe3: null
    };

    async componentDidMount() {
        document.body.style.backgroundColor = '#F5F5F5';
        console.log(food);
        const response = await fetch('https://serpapi.com/search.json?q=' + food + '&hl=en&gl=us&api_key=9bfb14a9252b2f2de2c5d620349978f361afbfac674d5ef67a125b9d5d8480ad');
        const data = await response.json();
        this.setState({recipe1: data.recipes_results[0], loading1: false})
        this.setState({recipe2: data.recipes_results[1], loading2: false})
        this.setState({recipe3: data.recipes_results[2], loading3: false})
    }

    render() {
        return(
        <div className = "wrapper">
            <div className = "card">
                {/* recipe 1*/}
                <div className = "card__body">
                    {this.state.loading1 || !this.state.recipe1 ? (
                        <div>loading...</div>
                    ) : (
                        <img src = {this.state.recipe1.thumbnail} className ="card__image" />
                        )
                    }

                    {this.state.loading1 || !this.state.recipe1 ? (
                        <div>loading...</div>
                    ) : (
                        <h2 className = "card__title">{this.state.recipe1.title}</h2>
                    )}

                </div>
                <button className = "card__btn" onClick = {() => window.open(this.state.recipe1.link)}>View Recipe</button>
            </div>


                {/* recipe 2 */}
            <div className = "card">
                <div className = "card__body">

                    {this.state.loading2 || !this.state.recipe2 ? (
                        <div>loading...</div>
                    ) : (
                        <img src = {this.state.recipe2.thumbnail} className ="card__image"/>
                    )
                    }

                    {this.state.loading2 || !this.state.recipe2 ? (
                        <div>loading...</div>
                    ) : (
                        <h2 className = "card__title">{this.state.recipe2.title}</h2>
                    )}
                </div>
                <button className = "card__btn" onClick = {() => window.open(this.state.recipe2.link)}>View Recipe</button>
            </div>



                {/* recipe 3*/}
            <div className = "card">
                <div className = "card__body">

                    {this.state.loading3 || !this.state.recipe3 ? (
                        <div>loading...</div>
                    ) : (
                        <img src = {this.state.recipe3.thumbnail} className ="card__image"/>
                    )
                    }

                    {this.state.loading3 || !this.state.recipe3 ? (
                        <div>loading...</div>
                    ) : (
                        <h2 className = "card__title">{this.state.recipe3.title}</h2>
                    )}
                </div>
                <button className = "card__btn" onClick = {() => window.open(this.state.recipe3.link)}>View Recipe</button>
            </div>
            
        </div>
        )
    }
}