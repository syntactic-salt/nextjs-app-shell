import React, { Component } from 'react';
import Layout from './components/Layout';

class AppShell extends Component {
    render() {
        return (
            <Layout>
                {this.props.children}
            </Layout>
        );
    }
}

export default AppShell;
