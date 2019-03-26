import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../logo.svg';
import '../App.css';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

import Post from '../components/headerComponent/Post.js';
import Header from '../components/headerComponent/Header.js';
import SideCard from '../components/headerComponent/SideCard.js';

class App extends Component {
  render() {
    return (
      <Fragment>

        <Header />

        <main className="my-5 py-5">
          <Container className="px-0">
            <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

              <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                <SideCard />
              </Col>

              <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                <Post />
              </Col>

            </Row>
          </Container>
        </main>

      </Fragment>
    );
  }
}

export default App;
