import React, { Component } from 'react';

export default class TodoItem extends Component {
  
  // toggleComplete = (id) => {
  // this.setState({
  //   tasks:this.state.tasks.map(tasks=>{
  //  if(tasks.id===id) {
  //    tasks.isCompleted=!tasks.isCompleted

  //  }
  //  return tasks
  // })})}
  // toggleComplete = (e) => {
  //       console.log(this.props)
      // textDecoration:this.props.
    
    

    // console.log(e.target.checked)
  // }

  render() {
    const { title, isCompleted } = this.props.tasks;
    return (
      <React.Fragment>
        {/* <h6>TodoItem</h6> */}
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
        
          <input checked ={isCompleted} type="checkbox" onChange={this.props.toggleComplete.bind(this,this.props.tasks.id)} />


          {this.props.tasks.title}
          {title}
          <button onClick={this.props.del.bind(this,this.props.tasks.id)}>x</button>
          </p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}