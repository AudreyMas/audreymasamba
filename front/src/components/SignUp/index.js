import React, { Component } from 'react'

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      mail: '',
      password: '',

    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  updateMail = (event) => {
    this.setState({
      mail: event.target.value
    })
  }
  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handelSubmit = (event) => {
    let MYJSON = JSON.stringify(this.state, 1, 1, 1);
    return alert('Look your console' + console.log({ MYJSON }))
  
  }


  render() {

    return (

      <div className='container'>
        <div className='content form'>
          <h1>Hello : {this.state.name} <br /></h1>
          <form onSubmit={this.handelSubmit} className={'form'}>
            <input placeholder='name' name="name" value={this.state.name} onChange={this.updateName.bind(this)}  required pattern="visitor|recruiter"/>
            <input placeholder='mail' name="mail" value={this.state.mail} onChange={this.updateMail.bind(this)} required />
            <input placeholder='password' name="password" value={this.state.password} onChange={this.updatePassword.bind(this)} required />

            <input type='submit' value='sent' />
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp;