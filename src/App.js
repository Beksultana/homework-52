import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import './Numbers/Numbers.css'
import Number from './Numbers/Numbers.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {



state = {
    number: []
};

    getRandomNumbers = () => {
        let arr = [];

        while (arr.length < 5) {
            const number = Math.floor(Math.random() * (36 - 5) + 5);
            console.log(number);
            if(arr.indexOf(number) === -1){
                arr.push(number);
            }
        }

        arr.sort((a, b) => a - b);

        this.setState({
            number: arr
        });
    };

    onClickNum =() => {
        this.getRandomNumbers();

    };


    render() {
          return (
          <div className={'Container'}>
              <Button onClick={this.onClickNum} className="btn" color="warning">Click... New numbers!</Button>

              <div className={'NumberDiv'}>

                  {
                      this.state.number.map((numbers, index) => {
                          return(
                              <Number
                                  key={index}
                                  number={numbers}
                              />
                          )
                      })
                  }
              </div>
          </div>
        );
    }
}

export default App;
