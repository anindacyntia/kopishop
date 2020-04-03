import React from 'react';
import './App.css';

import { 
  Layout,
  Carousel,
  Row,
  Col,
  Card,
  Button,
  message,
  notification
} from 'antd';

import {
  CheckCircleTwoTone,
} from '@ant-design/icons';

import TopMenu from './container/menu';
import Counter from './container/counter'

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Mengambil data diri ...', key });
  setTimeout(() => {
    message.success({ content: 'Sukses!', key, duration: 2 });
  }, 1000);
};

const close = () => {
  console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const openNotification = () => {
const key = `open${Date.now()}`;
const btn = (
  <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
  </Button>
);
}

const carauselImage = [
  {
    alt: 'kopimanao'
  },
  {
    alt: 'merchandise'
  },
  {
    alt: 'best seller'
  },
  {
    alt: 'testimoni'
  },
]

const manaoPoint = [
  {
    source: 'require("./assets/kopimanao4.jpg")',
    title: 'Testimoni',
    description: 'Nice atmosphere. Mostly crowded yet comfy. Tasty coffee & bev. Avail traditional snacks. Lovely!'
  },
  {
    source: 'require("./assets/kopimanao3.jpg")',
    title: '"Best Seller"',
    description: 'Selalu ada cara untuk menikmati kopi sebelum akhir pekan berakhir nih. Nah ini adalah menu favorite dari manao yaitu "Es Kopi Susu Kita" '
  },
  {
    source: 'require("./assets/totebagmano3.JPG")',
    title: 'Merchandise',
    description: 'Salah satu input yang kami wujudkan untuk teman-teman semuanya dengan Merchandise Kopi Manao'
  },
]

class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'bottom',
  };

  render() {

    let containerWide = {
      width: '1030px',
      height: '500px',
      objectFit: 'cover'
    }

    let carouselDesc = {
      zIndex: '1',
      fontSize: '40px',
      color: '#000000'
    }

    let carouselBlock = {
      background: '#D2B48C',
      padding: '50px',
      height: '500px'
    }

    return (
      <div>
        <Row>
          <Col span={8} style={carouselBlock}>
            <div className="webText">
              <h1 style={carouselDesc}>Selamat Datang di Kopi Manao</h1>
              <p>Terinspirasi dari rotan manao yang merupakan salah satu rotan dengan kualitas yang paling baik</p>
              <p><em><b>Opening at: </b></em> </p>
              <p> Mon:	2:00 – 11:00 PM |
                  Tue:	Closed |
                  Wed:	2:00 – 11:00 PM |
                  Thu:	2:00 – 11:00 PM |
                  Fri:	2:00 PM – 12:00 AM |
                  Sat:	2:00 PM – 12:00 AM |
                  Sun:	2:00 – 11:00 PM </p>
            </div>
            <Counter/>
          </Col>

          <Col span={16}>
            <Carousel dotPosition={this.state.dotPosition}>
              {carauselImage.map ((props, index) =>
                <a href='/'>
                <img style={containerWide} alt={props.alt} src={require(`./assets/gambar${index+1}.jpg`)}></img>
                </a>
              )}
            </Carousel>
          </Col>
        </Row>        
      </div>
    );
  }
}

function App() {
  return (
    <Layout className="layout">
      <Header>
        <TopMenu openMessage={openMessage}/>
      </Header>

      <Content style={{background: '#ffffff',}}>
        <PositionCarouselDemo/>
      </Content>

      <Content style={{padding: '50px 50px 50px 50px', background: '#ffffff'}}>
        <Row gutter={8}>
         
          {manaoPoint.map ((data, index) =>
            <Col key={index} span={6}> 
              <Card
                hoverable
                style={{ width: 300, }}
                cover={<img style={{ height: 200, objectFit: 'cover' }} alt="example" src={require(`./assets/point${index+1}.jpg`)} />}
                
              >
                <Meta title={data.title} description={data.description} />
              </Card>
            </Col>
          )}
        </Row>
      </Content>

      <Footer style={{textAlign: 'center', background:'#A0522D', color: '#ffffff' }}>Kopi Manao @2020 Created by Aninda Cyntia</Footer>
    </Layout>
  );
}

export default App;
