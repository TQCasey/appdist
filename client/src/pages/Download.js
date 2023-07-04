


import {
    MenuFoldOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Sider, Content ,Footer} = Layout;


const Download = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            Hello ,This is Download Page
        </Layout>
    );
};

export default Download;