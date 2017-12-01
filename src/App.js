import React, { Component } from 'react';
import './App.css';

var questions = [
  {
    "question": "Name a bad job for someone who is accident-prone",
    "choices": ["Driver - 33", "Construction - 20", "Police Officer - 11", "Food Service - 10", "Glass Maker - 9", "Window Washer - 7", "Surgeon - 6"]
  },
  {
    "question": "Name a word that most people yell at their dogs.",
    "choices": ["No - 27", "Sit - 23", "Stop - 14", "Down - 7", "Fetch - 6", "Bad - 5"]
  },
  {
    "question": "Name a recreational activity traditionally done in hot weather",
    "choices": ["Swimming - 44", "Baseball - 18", "Volleyball - 17", "Surfing - 11", "Boating - 7"]
  },
  {
    "question": "Name an article of clothing you cannot wash in the washing machine",
    "choices": ["Shoe - 29", "Bra - 21", "Hat - 16", "Coat - 13", "Sweater - 9", "Suit - 7", "Gown - 3"]
  },
  {
    "question": "What excuse do people use when they do not return phone calls?",
    "choices": ["Busy - 42", "Didn't Get Message - 19", "Forgot - 13", "Late - 4", "Turned Off - 4", "Asleep - 3"]
  },
  {
    "question": "Name something people are often chased by in movies",
    "choices": ["Monsters - 37", "Cars - 22", "Cops - 19", "Bad Guys - 10", "Dogs - 10"]
  },
  {
    "question": "If you met the real prince charming, how would you know it was him?",
    "choices": ["Wears a Crown - 38", "Rides White Horse - 25", "Good Looking - 14", "Magical Kiss - 12"]
  },
  {
    "question": "Name something that a man had better not take along on his honeymoon",
    "choices": ["Another Woman - 33", "Cellphone - 17", "His Parents - 14", "Work/Laptop - 12", "His Best Friend - 6", "Golf Clubs - 5", "His Pet - 4"]
  },
  {
    "question": "Name something a customer might do to annoy a waitress ",
    "choices": ["Send Food Back - 40", "Not Tip - 35", "Flirt - 6", "Snap Fingers - 5", "Spill Drinks - 4"]
  },
  {
    "question": "When he/she is out of money, what might a gambler put on the table?",
    "choices": ["Jewellery - 33", "Cellphone - 17", "His Parents - 14", "Work/Laptop - 12", "His Best Friend - 6", "Golf Clubs - 5", "His Pet - 4"]
  },
  {
    "question": "Name a musical instrument that is too big to carry on an airplane",
    "choices": ["Tuba - 31", "Piano - 28", "Cello - 10", "Harp - 9", "Drums - 8", "Bass - 5", "Trombone - 4", "Saxophone - 3"]
  },
  {
    "question": "Name an animal that you would not want in your china shop (other than a bull)",
    "choices": ["Elephant - 47", "Cow - 20", "Horse - 10", "Bear - 8", "Hippo - 4", "Rhino - 4", "Moose - 3"]
  },
  {
    "question": "Name something people buy to show they are successful",
    "choices": ["Car - 45", "House - 41", "Jewellery - 6", "Suit - 4", "Boat - 3"]
  },
  {
    "question": "Name a reason that your boss would give you a raise (other than that you worked hard)",
    "choices": ["You are dating your boss - 54", "You are on time - 16", "You are blackmailing your boss - 12", "You have flattered your boss - 5"]
  },
  {
    "question": "Name something you would hate to find under your bed",
    "choices": ["Monster - 43", "Snake - 16", "Food - 12", "Spider - 10", "Rodent - 8", "Dust - 4", "Person - 3"]
  },
  {
    "question": "Name something people do while riding a rollercoaster",
    "choices": ["Scream - 43", "Hold Arms Up - 32", "Get Sick - 13", "Laugh - 4", "Close Their Eyes - 4"]
  },
  {
    "question": "Name something people like to do when listening to music",
    "choices": ["Clean - 21", "Exercise - 18", "Study - 18", "Garden - 12", "Eat - 10", "Dance - 8", "Drive - 8"]
  },
  {
    "question": "Name an animal that you are surprised that some people keep as a pet",
    "choices": ["Snack - 33", "Tiger - 10", "Monkey - 8", "Elephant - 7", "Pig - 5", "Rat - 4"]
  },
  {
    "question": "According to women: What do men consider more important than marriage?",
    "choices": ["Career - 28", "Money - 21", "Other Women - 16", "Sports - 12", "Cars - 6", "Freedom - 4"]
  }
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = { questionNumber : 0 };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);

  }

  handleNext(){
    var currentQIndex = this.state.questionNumber;

    if(currentQIndex !== questions.length - 1){
      currentQIndex++;
      this.setState({ questionNumber: currentQIndex });
    }
  }

  handlePrev(){
    var currentQIndex = this.state.questionNumber;

    if(currentQIndex !== 0){
      currentQIndex--;
      this.setState({ questionNumber: currentQIndex });
    }
  }

  render() {

    document.title='Bethel Family Feud';

    var currentQuestion = questions[this.state.questionNumber];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span>Family</span> Bethel Feud</h1>
        </header>
        <h1>Question {this.state.questionNumber + 1}</h1>
        <h2 className='question'>{currentQuestion.question}</h2>

        <div className='choices-container'>
          {currentQuestion.choices.map((choice, i) => {
            return (
              <div key = {choice} className = 'choice-container'>
                <input type='checkbox' id = {i} />
                <label htmlFor = {i} className = 'cover' onClick = {this.handleClick}>{i+1}</label>
                <div className = 'choice'>{choice}</div>
              </div>
            )
          })}
        </div>

        <div className = 'buttons'>
          <button onClick = {this.handlePrev}>Previous</button>
          <button onClick = {this.handleNext}>Next</button>
        </div>
        
      </div>
    );
  }
}

export default App;
