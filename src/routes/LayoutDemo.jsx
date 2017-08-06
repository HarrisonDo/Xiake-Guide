import React from 'react';
import { connect } from 'dva';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import XiakeHeader from '../components'
import './LayoutDemo.css'

class LayoutDemo extends React.Component {

    render() {
        return (
            <Layout>
                <XiakeHeader />
            </Layout>
      )
    }
}

export default connect()(LayoutDemo);
