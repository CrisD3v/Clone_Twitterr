import React from 'react'
import {Postt, Avatar, PostBody, PostDescription, PostFooter, Images} from './Styled';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';

export const Post = () => {
  return (
    <Postt>
        <div className='Post_Avatar'>
            <Avatar src = "https://randomuser.me/api/portraits/women/22.jpg" Alt = "" />
            <PostBody>
                <div>
                    <h3>Natasha <span> <VerifiedIcon className='Post_Icon' /> @Natth </span></h3>
                    <PostDescription>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </PostDescription>

                </div>
            </PostBody>
            <Images src="https://blog.rockthetraveller.com/wp-content/uploads/2017/10/Instagram-el-para%C3%ADso-de-los-influencers-de-viajes-slider-1200x490.jpg" alt='' />
            <PostFooter>
                <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                <SwapCallsOutlinedIcon fontSize='small' />
                <FavoriteBorderOutlinedIcon fontSize='small' />
                <IosShareOutlinedIcon fontSize='small' />
            </PostFooter>
        </div>
    </Postt>
  )
}
