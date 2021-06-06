import React from 'react';
import {Container, Input, Label} from './searchbarStyles';

class Searchbar extends React.Component {
    state = {
        term: 'Search'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    
    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <Input>
                        <Label htmlFor="video-search">Video Search</Label>
                        <input onChange={this.handleChange} name="video-search" type="text" value={this.state.term}/>
                    </Input>
                </form>
            </Container>
        )
    }
}

export default Searchbar;