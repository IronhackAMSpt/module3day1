import React, {Component} from "react";
import "./App.css"

import Cats from "./Cats";

import Dogs from "./Dogs";

import ReactPlayer from "react-player";
import Slider from "react-slick";

import CatContainer from "./CatContainer"


class App extends Component {

    render() {

        const cat = {
            firstName: "mr.",
            lastName: "wiggles",
            avatar: "../wiggles.jpeg"
          };
      
          const cat2 = {
              firstName: "ms.",
              lastName: "Pickles",
              avatar: "../mspickles.jpeg"
            };

            var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              };
          

        return (
            <div>
                 <CatContainer style="red" name="jorg" />


                <h1>hello class</h1>
                <Cats cat={cat}/>
                <Cats cat={cat2}/>

            </div>
        )
    }
}

export default App;