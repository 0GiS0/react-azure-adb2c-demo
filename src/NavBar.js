import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import AAD_B2CService from './AAD_B2CService';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: null
        };

        this.AzureADB2CService = new AAD_B2CService();
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        this.isAuthenticated();
    }

    isAuthenticated() {
        this.setState({
            authenticated: this.AzureADB2CService.loggedIn()
        });
    }

    logout() {
        this.AzureADB2CService.logout()
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