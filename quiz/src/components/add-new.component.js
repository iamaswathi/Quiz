import React, { Component } from "react";
import FormInputs from "./form-inputs.component";

export default class AddNewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { question: '', answerOptions: [{option: ""}], answer: '',
        weightage: 0, counter: 0 };
      }
      changeText = (event) => {
        this.setState({question: event.target.value});
        console.log(this.state.question);
      }
      handleChange = (e) => {
        if (["option"].includes(e.target.className) ) {
          let answerOptions = [...this.state.answerOptions]
          answerOptions[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          this.setState({ answerOptions }, () => console.log(this.state.answerOptions))
        } else {
          this.setState({ [e.target.option]: e.target.value.toUpperCase() })
        }
      }
    addCat = (e) => {
        console.log(e);
        this.setState((prevState) => ({
          answerOptions: [...prevState.answerOptions, {option:""}],
        }));
      }
    handleSubmit = (e) => { e.preventDefault() }
    
    render() {
        let {answerOptions} = this.state
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="question">Question</label><br/>
                            <textarea name="question" cols="30" rows="5" onChange = {this.changeText}/>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-sm-12">
                            <label for="option1">Option1</label><br/>
                            <input name="option1" type="text"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <label for="option2">Option2</label><br/>
                            <input name="option2" type="text"></input>
                        </div>
                    </div> */}
                    <button onClick={this.addCat}>+ New Option</button>
                    <FormInputs answerOptions={answerOptions} />
                    <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="answer">Correct Answer</label><br/>
                            <input name="answer" type="text"></input>
                        </div>
                    </div>

                    <button type="submit">Submit</button> 

                </form>
            </div>
        )
    }
}
