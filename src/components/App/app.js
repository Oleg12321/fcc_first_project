import React from 'react';
import {  AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Stack, Button } from 'react-bootstrap';
import useColorRandom from '../ColorRandom';
import useTextAuthor from '../Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {

  const { colorRand, setColor } = useColorRandom()

  const {textAuthor, setContent} = useTextAuthor()

    return (
      <main className='button_box' style={
        { height: '100vh',
          width: '100vw',
          backgroundColor: '#' + colorRand}
        }>
        <Stack direction="horizontal"  className='d-flex align-items-center justify-content-center vh-100'>
          <div id='quote-box' className='quote_box'>
            <div className='content_text d-flex flex-column m-3' style={{color: '#' + colorRand}}>
              <p id='text' className='text'>
              {textAuthor[0]}
            </p>
            <p id='author' className='author ms-auto'>
              {textAuthor[1]}
            </p>
            </div>
          <div className='d-flex mb-3 justify-content-around'>
            <div>
              <Button 
                id="tweet-quote" 
                as="a" 
                variant="primary" 
                className='github'
                style={{
                  backgroundColor: '#' + colorRand, 
                  border: '#' + colorRand}}>
                <AiFillGithub />
              </Button>
              <Button 
                id="tweet-quote" 
                as="a" 
                variant="success" 
                className='linkdin' 
                style={{
                  backgroundColor: '#' + colorRand,
                  border: '#' + colorRand}}
                href='https://www.linkedin.com/in/oleh-danylovych-354844222'
                target='_blank' >
                <AiFillLinkedin />
              </Button>
            </div>
              
              <Button 
                id='new-quote' 
                as="a" 
                variant="success" 
                className='new_quote'
                style={
                  {
                    backgroundColor: '#' + colorRand,
                    border: '#' + colorRand
                  }}
                onClick={() => {
                  setColor()
                  setContent()
                }} >
                New quote
              </Button>
          </div>
          
          </div>
        </Stack>
      </main>
    )
  }


export default App