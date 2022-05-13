import React from 'react';
import {Contenedor,Header} from './Styled';
import { TweetBox } from './TweetBox';
import {Post} from './Post';

export const Home = () => {
  return (
    <Contenedor>
        {/* Header */}
        <Header>
          <h2>Home</h2>
        </Header>

        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        <Post />

    </Contenedor>
  )
}

