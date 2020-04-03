import React, { Component } from 'react'; //import dari react biasa
import { Layout, Row, Col, Modal, Button, message } from 'antd'; //import dari ant seperti biasa
import '../assets/css/landing.css' //import css dari folder css yang ada di folder assets
import TopMenu from './menu.js'

const key = 'updatable';

const openMessage = () => {
    message.loading({ content: 'Mengambil data diri ...', key });
    setTimeout(() => {
        message.success({ content: 'Sukses!', key, duration: 2 });
    }, 1000);
};

const { Content, Header } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

const image1 = require(`../assets/aninda.png`); //membuat variabel image 1 dimana isinya merupakan importan gambar yang ada dari folder images

let carouselBlock = {
    background: '#ffe7ba',
    padding: '50px',
    height: '500px'
}

const Profile = () => {
    return(
        <Layout className="landing-container">
            {/* <Navbar/>  ini merupakan component navbar yang kita import dari folder layout yang ada di common */}
            <Header>
                <TopMenu openMessage={openMessage}/>
            </Header>
            <Content style={{ overflow: "hidden"}}> {/* ini merupakan component content yang sudah di define sebelumnya*/}
                <Row className="section-container">
                    <Col lg={12} md={12} sm={12}>
                        <div className="image-big-container">
                            <img
                                src={image1}
                                alt="Home 1"
                                style={{maxWidth: '80%'}}
                            />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <Row>
                            <Col span={24}>
                                <div className="title-container">
                                    <span style={{fontSize : "36px"}}><h1>Kenalan Yuk! </h1></span>
                                    <span className="text-soft-blue title-big bold"> Selamat datang! </span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="image-hidden">
                                    <img
                                        src={image1}
                                        alt="Home 1"
                                        style={{width: '100px',}}
                                    />
                                </div>
                                <div className="description-container desc-medium">
                                   Perkenalkan nama saya Aninda Cyntia, Saya adalah mahasiswi dari Universitas Gadjah Mada Jurusan D4 Alih Program Teknologi Rekayasa Perangkat Lunak. 
                                   Saya hobi mendengarkan musik dan saya senang kuliner dan traveling. Kalo kalian mau tahu sosial media saya, kalian bisa buka Instagram dan Twitter saya.
                                    Terima kasih.
                                </div>
                            </Col>
                            <Col span={24} >
                                <div className="button-section-1-container">                                
                                <Button type="primary" href="https://instagram.com/anindacyntia" target="_blank" style={{marginRight: '20px'}}>
                                    Instagram
                                </Button>

                                <Button type="primary" href="https://twitter.com/anindacyntia" target="_blank">
                                    Twitter
                                </Button>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>  
                </Row>
            </Content>
        </Layout>
    );
}

export default Profile;