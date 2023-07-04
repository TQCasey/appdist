


import {
    MenuFoldOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import './App.css'

import { 
    Button, 
    Layout, 
    Menu, 
    theme ,
    Card,
    
} from 'antd';
import { useState } from 'react';
import AppList from './pages/AppList';
import Download from './pages/Download';

const { Header, Sider, Content ,Footer} = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [pageKey,setPageKey] = useState ('1');

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const renderContent = () => {
        let key = pageKey ;
        let keyMap = {
            '1' : <AppList/>,
            '2' : <Download/>,
        }

        return keyMap [key];
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo-header" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: '应用列表',
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: '设置',
                        },
                    ]}
                    onSelect={(info) => {
                        // console.log (info);
                        let {key} = info;
                        setPageKey (key);
                    }}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 240,
                        background: colorBgContainer,
                    }}
                >
                    {renderContent ()}
                </Content>
                <Footer>footer</Footer>
            </Layout>
        </Layout>
    );
};

export default App;