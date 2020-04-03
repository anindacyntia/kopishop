import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Row, Col, notification, Button, message } from 'antd';
import {
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const key = 'updatable';

class TopMenu extends React.Component {
  state = {
    profile: 'Masuk',
    current: ''
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  openMessage = () => {
    message.loading({ content: 'Mengambil data diri ...', key });
    setTimeout(() => {
      message.success({ content: 'Sukses!', key, duration: 2 });
    }, 1000);
  };

  masukAkun = () => {
      this.openMessage()
      this.setState({
          profile: 'Aninda Cyntia'
      })
  }

  render() {
    return (
        <div className="menu-container">
            <Row justify="space-between">
                <Col span={4}>                  
                    <Link to='/'><h1>Coffee Shop</h1></Link> 
                </Col>
                
                <Col span={8}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="beranda">
                            <ShoppingOutlined />
                            Beranda
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                <MailOutlined />
                                Hubungi
                                </span>
                            }
                        >
                            <Menu.ItemGroup title="">
                                <Menu.Item key="setting:1"><PhoneOutlined />Telefon</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="lokasi">
                            <EnvironmentOutlined />
                            <a href="https://www.google.com/maps/place/Kopi+Manao/@-6.7093704,108.5378488,15z/data=!4m5!3m4!1s0x0:0x18db52bf923bb20f!8m2!3d-6.7093704!4d108.5378488" target="_blank" rel="noopener noreferrer">
                                Lokasi
                            </a>
                        </Menu.Item>
                        <Menu.Item key="profile" onClick={this.masukAkun}>
                            <UserOutlined />
                            <Link to='/profile'>{this.state.profile}</Link> 
                        </Menu.Item>
                    </Menu>                
                </Col>
            </Row>
            
        </div>
    );
  }
}

export default TopMenu