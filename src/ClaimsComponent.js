import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import AAD_B2CService from './AAD_B2CService';

export default class ClaimsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            raw_claims: null,
            user: null
        };

        this.AzureADB2CService = new AAD_B2CService();
    }

    componentWillMount() {

        this.setState({
            raw_claims: this.AzureADB2CService.getClaims(),
            user: this.AzureADB2CService.getUser()
        });
    }

    render() {
        return (
            <div>
                <Container textAlign="left" className="container">
                    <Header as='h2'>Claims from Azure AD B2C</Header>
                    <pre className="claims">
                        {JSON.stringify(this.state.raw_claims, null, 2)}
                    </pre>
                    <pre className="claims">
                        {JSON.stringify(this.state.user, null, 2)}
                    </pre>
                </Container>
            </div>
        )
    };
};