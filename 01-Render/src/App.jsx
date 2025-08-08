import './App.css'
import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types';

 
  // const name ="Shreya"
  // const greeting = <h1 className='text-blue-700'>Hello, {name}</h1>

  //Ternary expression example

  // const user ="Shreya"
  // const isLoggedIn = true;

  // const message =(
  //   <h1>{isLoggedIn? `Welcome back ${user}`: "Please Logg in"}</h1>
  // )

  //Map over Arrays
  // const fruits =["Orange","Apple", "Grapes","Pomegranate","Strawberry"]
  // const list = (
  //   <ul>
  //     {fruits.map(name => <li key='name'> Hello {name}</li>)}
  //   </ul>
  // )

  //Function component => component- is a reusable , independent block of UI - it is function that returns jsx
  //Example1- function component
  // function Welcome(props){
  //   return <h1>Hello,{props.name}</h1>
  // }

  //Exampl2- function component
  // function UserCard({name, age}){
  //   return (
  //     <div>
  //       <h1>Username:{name}</h1>
  //       <p>age:{age}</p>
  //     </div>
  //   );
  // }

  //class componant- example1
  // class Welcome extends Component{
  //   render(){
  //     return <h1>Hi Yashwant !</h1>
  //   }
  // }

  //props- props are short form of properties , they allows you to pass data from parent to the child
  //Example1- props
  // function Welcome(props){
  //   return <h1>Hello {props.name}</h1>
  // }

  //using descructing
  // function Welcome({name,age,birthDate}){
  //   return (
  //     <div>
  //       <h1>Username:{name}</h1>
  //       <p>age:{age}</p>
  //       <p>BirthDate:{birthDate}</p>
  //     </div>
  //   )
  // }

  //props in class component

  // class College extends Component{
  //   render(){
  //     return <h1>Welcome {this.props.name}</h1>
  //   }
  // }

  //PropTypes is a built-in utility in React (via prop-types package) 
  // that lets you define the expected data types for props in a component.
  //firstly in terminal - npm install prop-types
  //Example1- prop-types
  function Profile({name,age}){
    return <h1>{name} is {age} years old!</h1>
  }
  // Type checking
  Profile.propTypes = {
    name: PropTypes.string.isRequired, // must be a string and required
    age: PropTypes.number.isRequired,  // must be a number and required
  };


  function App() {
  return (
    <>
    <p>Intro(CRA & Vite), jsx, Rendering , Components(function & class),props,ProTypes</p>
    {/* <h1 className='text-center text-4xl text-orange-600 p-4'>Welcome to React!, {greeting} </h1> */}
     {/* {message}
     <p className='text-orange-600 text-3xl'>Welcome to the React Tutorial </p> */}
     {/* <Welcome name="Shreya"/> */}
     {/* <UserCard name ="Shreya" age ={20}/> */}
     {/* <Welcome name= "Shreya" age={20} birthDate={21}/> */}
     {/* <College name="Shreya"/> */}
     <Profile name={123} age="twenty" />

    </>
  )
}

export default App
