import React, {Component} from 'react';
class AddPerson extends Component{

    state = {
        name: null,
        age: null,
        favoriteFood: null
    }

handleChange = (e) => {
// console.log(e.target.id)

    this.setState({
        [e.target.id]: e.target.value
})
// console.log(this.state)
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.addMyBra(this.state)
}
    render() {
        return(
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange}/>

            <label htmlFor="age"> Age</label>
            <input type="number" id="age" onChange={this.handleChange}/>

            <label htmlFor="favoriteFood">Favorite Food</label>
            <input type="text" id="favoriteFood" onChange={this.handleChange}/>
            
            <button>Submit</button>
            </form>
         )
    }
}

export default AddPerson