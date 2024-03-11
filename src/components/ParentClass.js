import React from "react";

export default class ParentClass extends React.Component {
    render() {
        return (
            <div>
                <h1> Blueprint is created </h1>
                <Child1 title="Prop 1" />
                <Child2 title="Prop 2" />
            </div>
        )
    }
}

class Child1 extends React.Component {
    render() {
        return (
            <h1>Hi Im {this.props.title} { }, manipulated by parent  </h1>
        )
    }
}
class Child2 extends React.Component {
    state = {
        count:0,
        goOut: "Yes",
        isDisabled:false
    }
    add=()=>{
        this.setState(prevState => {
            return { 
                count : prevState.count+1
             }
        })
    }
    subtract=()=>{
        this.setState(prevState => {
            return { 
                count : prevState.count-1
             }
        })
    } 
    toggleOut = ()=> {
        this.setState(prevState => {
            return { 
                goOut : prevState.goOut==='Yes'? 'No': 'Yes'
             }
        })
    }
    render() {
        return (
            <main>
                <h1> Hi Im {this.props.title}, manipulated by parent  </h1>
                <p> {this.state.goOut} </p>
                <button onClick={this.toggleOut}>Click Me..</button>
                <div className="counter" >
                    <button onClick={()=>{this.add()}} > + </button>
                    <h2> {this.state.count} </h2>
                    <button onClick={()=>{this.subtract()}} disabled={this.state.isDisabled} > - </button>
                </div>
            </main>
        )
    }
}
