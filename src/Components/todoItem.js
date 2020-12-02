import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component{
	getStyle=()=>{
		return {
			backgroundColor:'#fffafa',
			borderRadius:'5px',
			padding:'5px',
			margin:'10px',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
			boxShadow:'2px 2px 2px 2px gray'
		}
	}

	render(){
		const{id,title}=this.props.todo
		return (
			<div style={this.getStyle()}>
				<h3 style={{fontSize:'15px'}}>
					<input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
					{title}
					<button style={{
						backgroundColor:'red', 
						color:'black', 
						borderRadius:'5px', 
						padding:'3px 6px 3px 6px',
						cursor:'pointer', 
						marginLeft:'10px', 
						outlineStyle:'none',
						border:'2px solid red'
					}} onClick={this.props.deleteTodo.bind(this,id)}>Delete</button>

				</h3>
			</div>
			)

	}
  
 }
 TodoItem.propTypes={
 	todo: PropTypes.object.isRequired,
 	markComplete: PropTypes.func.isRequired,
 	deleteTodo: PropTypes.func.isRequired
 }