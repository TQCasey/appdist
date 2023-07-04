


import {
    MenuFoldOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
} from '@ant-design/icons';


import {
    Button,
    Layout,
    Menu,
    theme,
    Card,
    Avatar,
    Col,
    Row
} from 'antd';

import { useState } from 'react';
import FlatList from 'flatlist-react';

const { Header, Sider, Content, Footer } = Layout;
const { Meta } = Card;

const AppList = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [appList, setAppList] = useState([1, 2, 3, 4, 5, 6]);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const renderItem = (info, index) => {

        return (
            <Card
                style={{ width: 300, height: 300 }}
                key={index}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        )

    }

    return (
        <Row>
            <Col
                xs={{
                    span: 5,
                    offset: 1,
                }}
                lg={{
                    span: 6,
                    offset: 2,
                }}
            >
                Col
            </Col>
            <Col
                xs={{
                    span: 11,
                    offset: 1,
                }}
                lg={{
                    span: 6,
                    offset: 2,
                }}
            >
                Col
            </Col>
            <Col
                xs={{
                    span: 5,
                    offset: 1,
                }}
                lg={{
                    span: 6,
                    offset: 2,
                }}
            >
                Col
            </Col>
        </Row>
    );
};

export default AppList;