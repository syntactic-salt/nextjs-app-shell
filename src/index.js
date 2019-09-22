import React from 'react';
import Layout from './components/Layout';

const AppShell = (props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    );
};

export default AppShell;
