//REACT
import React, { Component } from 'react'
//FIREBASE
import fire from '../../fire'
//STYLES
import './styles.css'
//REDUX ZERO
import { connect } from 'redux-zero/react'
import actions from '../../actions'


const uuidv4 = require('uuid/v4')

const mapToProps = ({ messages }) => ({ messages })

class CreatePost extends Component {
  constructor(props) {
    super(props)
    console.log('dat props boi! : ', props)
    this.state = {
      userID: '',
      imageURL: '',
      name: '',
      value: ''
    }
  }

  createID() {
    this.setState({userID: uuidv4()})
  }

  componentWillMount() {
    if (this.state.userID === '') this.createID()
  }

  handleClick(event) {
    event.preventDefault()
    const _this = this
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'aixlar',
        upload_preset: 'ydbnzewv',
        tags:['onmymind'],
        sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
      },
      function(error, result) {
          console.log('result = ', result)
          console.log('error = ', error)
          if (!error) {
            const imageSecURL = result[0].secure_url
            console.log('imageURL', imageSecURL)
            _this.setState({imageURL: imageSecURL})
          }
      })
  }

  addMessage(e){
    e.preventDefault()
    const imageURL = this.state.imageURL
    const value = this.state.value
    const name = this.state.name
    const date = new Date().toLocaleString()
    console.log('addMSG imageURL', imageURL)
    fire.database().ref('messages').push( {imageURL, name, value, date} )
    this.setState({
      userID: '',
      imageURL: '',
      name: '',
      value: ''
    })
  }

  onChangeName = event => {
    this.setState({
        name: event.target.value
      })
  }

  onChangeText = event => {
    this.setState({
        value: event.target.value
      })
  }

  render() {
    let setState = this.setState.bind()
    return (
    <div align='center' className='post_wrapper'>
        <h3>YOUR POST</h3>
          <span>{'POST ID: ' + this.state.userID}</span>
          <form className = 'create_post_form' onSubmit={this.addMessage.bind(this)}>
            <span>Your name:</span>
            <input className = 'create_post_input input' required type="text" value={this.state.name} onChange={ event => this.onChangeName(event) }/>
            <span>Whats on your mind?</span>
            <textarea className = 'textarea create_post_textarea' required rows='6' value={this.state.value} onChange={ event => this.onChangeText(event) } />
            <div className = 'image_preview' align='center'>
              {(!!this.state.imageURL === true)? (<img width='50' height='50' src={this.state.imageURL} />) : ''}
            </div>
            <div align='center'>
              <button
                className='button is-primary btns'
                disabled={!!this.state.imageURL}
                onClick={event => this.handleClick(event)}
              >
                {(!!this.state.imageURL === false)? 'ADD IMAGE' : 'IMAGE ADDED'}
              </button>
              <label for="send">
                <button className = 'button is-danger btns' color='green'>
                  SEND
                </button>
              </label>
              <input className = 'create_post_send' id="send" type="submit" color="green" />
            </div>
          </form>
    </div>
)}}

export default connect(mapToProps, actions)(CreatePost)
