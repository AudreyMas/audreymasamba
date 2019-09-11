import React, { Component } from 'react';

class AddProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // projects: [],
      name: '',
      description: '',
      image_1: '',
    }
  }

  addProject = (event) => {
    event.preventDefault();

    // const { project } = this.state
    const config = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
    };
    fetch(`http://localhost:5000/projects/add?name=${this.state.name}&description=${this.state.description}&image_1=${this.state.image_1}`, config)
      .then(response => response.JSON.stringify())
      // .then(response => {
      //   if (response.status == 200) {
      //     // return alert('project is added !! ')
      //     this.props.history.push('/');
      //   } else {
      //     alert('problem with the add');
      //   }
      // })

      .catch(function (error) {
        console.log(error);
      });
    console.log('added  ' + 'name: ' + this.state.name + '  description: ' + this.state.description + '  image: ' + this.state.image_1)
  }


  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  updateDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  updateImage = (event) => {
    this.setState({
      image_1: event.target.value
    })
  }


  // handelSubmit = (event) => {
  //   let MYJSON = JSON.stringify(this.state, 1, 2, 3);
  //   return alert('Look your console' + console.log({ MYJSON }))

  // }


  render() {

    return (
      <div className={'project-add'}>
        {console.log('image:' + this.state.image_1)}
        {console.log('name:' + this.state.name)}
        {console.log('description:' + this.state.description)}
        <h1>Add project</h1>
        <input
          value={this.state.name}
          onChange={this.updateName.bind(this)} />
        <input
          value={this.state.description}
          onChange={this.updateDescription.bind(this)} />
        <input
          value={this.state.image_1}
          onChange={this.updateImage.bind(this)} />
        <button type="submit" onClick={this.addProject}>SENT</button>
        {/* <button onClick={this.handelSubmit}>envoyer console</button> */}
      </div>
    )
  }
}
export default AddProject;