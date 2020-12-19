import React, { Component, Fragment } from 'react';


class FetchGithub extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        location: ''
      };
    }
    
    async componentDidMount() {
        try {
            const response = await fetch('https://api.github.com/users/workshopsjsmvd');
            if (response.status === 200) {
                const data = await response.json();
                this.setState({
                    name: data.name,
                    location: data.location
                });
            }
        } catch(err) {
            console.log(`Error: ${err}`);
        }
    }

    render() {
        const { name, location } = this.state;
      
        return (
            <Fragment>
                <h1 key="name">{`Nombre: ${name}`}</h1>,
                <h2 key="location">{`País: ${location}`}</h2>
            </Fragment>
        );
    }
}

export default FetchGithub;