import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import authentication from 'react-azure-adb2c';
import decode from 'jwt-decode';

export default class ClaimsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            raw_claims: null
        };
    }

    componentWillMount() {

        //Get claims
        const claims = decode(authentication.getAccessToken());
        console.log(claims);

        this.setState({
            raw_claims: claims
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
                </Container>
            </div>
        )
    };

};