import React from 'react'
import {Widgetss, Header, DivIcon,DivContent} from './Styled';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

export const Widgets = () => {
  return (
    <Widgetss>
      <Header>
        <DivIcon>
          <SearchIcon className='SearchIcon' />
          <input placeholder='Buscar Tendencias' />
        </DivIcon>
      </Header>
      <DivContent>
        <h2>Notas Diarias de un influencer </h2>

        <TwitterTweetEmbed tweetId={'1516784055253090306'} />

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="viajandares"
        options={{height: 400}} />

        <TwitterShareButton
        url={'https://facebook.com/saurabhnemade'}
        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }} />

      </DivContent>
    </Widgetss>
  )
}
