import React from 'react'
import Header from './components/Header'
import Card from './components/Card'

const App=()=>{
  return(
    <>
    <Header/>
    <h1><center>logo of the brand</center></h1>
    <h1 class="h1">WELCOME TO MIND&nbsp;<span>MASTER</span></h1>
    <div class="button">
    <button class="same2">apply now!</button>
    </div>
    <div class="container">
    <Card heading="mahak is good" para="loraaa is happening right now blah blah....." color1="red"/>
    <Card heading="nayan is good" para="loraaa is happening right now blah blah....."/>
    <Card heading="deepanshu is good" para="loraaa is happening right now blah blah....."/>
    </div>
    </>
   
)
}


export default App 