import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'


export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: null
        };

        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        this.isAuthenticated();
    }

    isAuthenticated() {
        this.setState({
            authenticated: true
        });
    }

    logout() {

    }

    render() {
        return (
            <div>
                <Menu>
                    <Menu.Item name="Azure Active Directory B2C Demo">
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        {this.state.authenticated === true && <Menu.Item name="logout" onClick={this.logout}></Menu.Item>}
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}