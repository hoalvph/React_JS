import React from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Button, } from 'antd';


const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;


const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = (value: string) => console.log(value);

const WebSiteLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout hasSider>

            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}

            >


                {/* <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} /> */}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >

                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to={'/products'}>Products</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link to={'/categories'}>Catogory</Link>
                    </Menu.Item>



                </Menu>
                <Space wrap>
                    <Button type="primary" danger>
                        <Link to={'/signup'}>Đăng Ký</Link>
                    </Button>
                    <Button type="primary">
                        <Link to={'signin'}>Đăng Nhập</Link>
                    </Button>
                </Space>
            </Sider>

            <Layout className="site-layout" style={{ marginLeft: 200 }}>




                <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100vh' }}>
                    <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default WebSiteLayout;