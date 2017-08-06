import React from 'react'
import classnames from 'classnames'
import { Icon, Popover, Badge, Avatar, Input, Menu, Layout, Row, Col } from 'antd'
import styles from './layout.css'

const Search = Input.Search
const { Header } = Layout

class XiakeHeader extends React.Component {
    state = {
        current: 'index',
    }

    handleClick = (e) => {
        console.log('click ', e)
        this.setState({
            current: e.key,
        })
    }

    render() {
        const {
            onLogout, } = this.props

        const msgContent = (
            <div>
                <p><a>Mike responded to your email</a></p>
                <p><a>You have 5 new tasks</a></p>
                <p><a>Another</a></p>
            </div>
        )

        const searchStyle = {
            width: 150,
            background: '0 0',
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            borderRadius: '2px'
        }

        const popoverStyle = {
            fontSize: 12
        }

        const avatarStyle = {
            backgroundColor: '#555555'
        }

        return (
            <Header style={{ background: 'rgba(255,255,255,0.5)', position: 'fixed', width: '100%' }}>
                <Row>
                    <Col span={2}>
                        <div className={styles.logo}>Lookcn</div>
                    </Col>
                    <Col span={12}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            selectedKeys={[this.state.current]}
                            onClick={this.handleClick}
                            style={{ 'border-bottom': '0' }}
                        >
                            <Menu.Item key="index">
                                首页
                        </Menu.Item>
                            <Menu.Item key="discover">
                                发现
                        </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={10}>
                        <div className={styles['navbar-right']}>
                            <div style={{ display: 'inline' }}>
                                <Input placeholder="Search" style={searchStyle} />
                            </div>
                            <div style={{ display: 'inline' }}>
                                <a>
                                    <Popover overlayStyle={popoverStyle} content={<div><a onClick={onLogout}>Sign out</a></div>} placement="bottomRight" trigger="click">
                                        <Avatar size="small" icon="user" style={avatarStyle} />
                                    </Popover>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default XiakeHeader
