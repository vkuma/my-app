import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Post from '../components/headerComponent/Post.js';
import SideCard from '../components/headerComponent/SideCard.js';
import Homepage from '../components/pages/homePage.js';
import ChatWindow from '../components/chatComponent/ChatWindow.js'

import { Container} from 'reactstrap';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main className="my-5 py-5">
        <Container className="px-0">
            <Switch>
                <Route exact path='/' component={ChatWindow}/>
                <Route path='/sidecard' component={SideCard}/>
                <Route path='/post' component={Post}/>
                <Route path='/chat' component={Homepage}/>
            </Switch>
        </Container>
    </main>
)

export default Main
