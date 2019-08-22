import React, { Component } from 'react';

class AddProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // projects: [],
      project: [
    
        { name: '' },
        { descritpion: '' }, 
        {
          image_1: ''
        },
      ]

    }
  }


  // getProjects() {
  //   fetch('http://localhost:5000/projects', {
  //   })
  //     .then(response => response.json())
  //     .then(res =>
  //       this.setState({
  //         projects: res.data
  //       })
  //     )
  //     .catch(err => console.error(err))
  // }


  addProduct = (event) => {
    event.preventDefault();

    const { project } = this.state
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
    };
    fetch(`http://localhost:5000/projects/add?name=${project.name}&description=${project.description}&image_1=${project.image_1}`, config)
      .then(response => response.JSON.stringify())
      .then(
        res => this.setState({ "flash": res.flash }),
        err => this.setState({ "flash": err.flash })
      )

      .catch(err => console.error(err))

      console.log('added  ' + 'name: ' + this.state.name + '  description: ' + this.state.description + '  image: ' +  this.state.image_1)
    // this.props.history.push('/');
  }

  updateName = (event) => {
    this.setState({
      project: { ...this.state, name: event.currentTarget.value }
    })
  }
  updateDescription = (event) => {
    this.setState({
      project: { ...this.state, description: event.currentTarget.value }
    })
  }
  updateImage = (event) => {
    this.setState({
      project: { ...this.state, image_1: event.currentTarget.value }
    })
  }


  handelSubmit = (event) => {
    // let MYJSON = JSON.stringify(this.state, 1, 2, 3);
    // return alert('Look your console' + console.log({ MYJSON }))
    { console.log('image:' + this.state.image_1) }
    { console.log('name:' + this.state.name) }
    { console.log('description:' + this.state.description) }
  }


  render() {

    return (
      <div className={'project-add'}>
        <h1>Add project</h1>
        <input
          value={this.state.name}
          onChange={this.updateName.bind(this)} />
        <input
          value={this.state.descritpion}
          onChange={this.updateDescription.bind(this)} />
        <input
          name="image_1'"
          value={this.state.image_1}
          onChange={this.updateImage.bind(this)} />
        <button type="submit" onClick={this.addProduct}>SENT</button>
        <button onClick={this.handelSubmit}>envoyer console</button>
      </div>
    )
  }
}
export default AddProject;