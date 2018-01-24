import React, { Component } from "react"
import "./App.css"
import Header from "./header"
import Profiles from "./profiles"
import Footer from "./footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("./dinosaurs.json")
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({ data: response })
      })
  }

  handleClick(event){
    event.preventDefault()
    if(event.target.parentNode.classList.contains("profile-header")){
      event.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden")
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section id="profiles-container">
              <h2>Profiles</h2>
              <ul id="profiles">
                <Profiles profiles={this.state.data} handleClick={this.handleClick} />
              </ul>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
