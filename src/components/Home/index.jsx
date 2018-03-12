//REACT
import React, { Component } from 'react'
//CLOUDINARY
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
//STYLES
import './styles.css'
//FIREBASE
import fire from '../../fire'
//REDUX-ZERO
import { connect } from 'redux-zero/react'
//ACTIONS
import actions from '../../actions'

const CardItem = ({name, id, value, date, imageURL}) => (
  <div className="card post__card">
    {(!!imageURL) ? (<div className="card-image" align="center">
      <img src={imageURL} />
    </div>) : ''}

    <span className='post__id'>{'POST ID: ' + id}</span>
    <h5 className="title is-5 post__title">{'AUTHOR: ' + name}</h5>
    <span className="subtitle is-6">{value}</span>
    <footer className="card-footer">
      <span>{'DATE: ' + date}</span>
    </footer>
  </div>
)


let mes_ar = []
const mapToProps = ({ messages }) => ({ messages })

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: this.props.messages
        }
        console.log('state changed', this.state)
    }

    componentWillMount() {
      let messagesRef = fire.database().ref('messages').orderByKey()
      messagesRef.on('child_added', snapshot => {
        let newMessage = {
          text: snapshot.val(),
          id: snapshot.key
        }
        console.log('snapshot key', snapshot.key.toString())
        this.props.addPost(newMessage)
        this.setState(this.props.messages)
      })
      console.log('ALL POST PAGE MSGS', this.props.messages)
    }

    render() {
        return (
            <div className="container">
                <h1 className="title is-1 main__title">WHATS ON PEOPLE MIND?</h1>
                {console.log("this.state.messages", this.state.messages)}
                  <div className="columns is-centered is-multiline">
                        {
                          this.state.messages.map( message => {
                            return (
                              <div className="column is-mobile is-one-fifth">
                                <CardItem
                                  name = {message.text.name}
                                  id = {message.id}
                                  value = {message.text.value}
                                  date = {message.text.date}
                                  imageURL = {message.text.imageURL}
                                />
                              </div>
                            )
                          })
                        }
                  </div>
            </div>
        )
    }
}


export default connect(mapToProps, actions)(Home)
