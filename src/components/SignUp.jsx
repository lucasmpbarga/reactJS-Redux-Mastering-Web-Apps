import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component{
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
	}

	signUp(){
		const { email, password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.catch( error => {
				this.setState({error})
			})
	}

	render(){
		return(
			<div className="form-inline" style={{margin: '5%'}}>
				<div>Sign Up</div>
				<div className="form-group">
					<input 
						className="form-control"
						type="text"
						style={{marginRigth: '5px'}}
						placeholder="email@email.com"
						onChange={event => this.setState({email: event.target.value})}
					/>
					<input 
						className="form-control"
						type="password"
						style={{marginRigth: '5px'}}
						placeholder="password"
						onChange={event => this.setState({password: event.target.value})}
					/>
					<button
						className="btn btn-primary"
						type="button"
						onClick={ () => this.signUp() }
					>
					Sign Up
					</button>
					<div>{this.state.error.message}</div>
					<div><Link to={'/signin'}>Sign In Instead!</Link></div>
				</div>
			</div>
		)
	}
}

export default SignUp;