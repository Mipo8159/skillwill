import React, { PureComponent } from 'react'

class UserItem extends PureComponent {  

  handleResize = () => {
    console.log('user' + this.props.id)
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }

render(){
  const {id, name, action} = this.props
  return (
    <div className="user-item">
        <p> ID: {id} </p>
        <p> NAME: {name} </p>

        <button onClick={() => action(id)}>Remove</button>
   </div>
  )
}
}

export default UserItem