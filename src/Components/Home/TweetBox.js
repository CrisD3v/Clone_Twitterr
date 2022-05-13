import React, {useState} from 'react'
import {TweetBoxx, Form, Div, Avatar, DivBox, File} from './Styled';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from '@mui/material';
import {db , storage} from '../../Backend/Firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import IconeP from '../../IMG/Icono_perfil.png';

export const TweetBox = () => {

        const [images, setImages] = useState();
        const [img, setImg] = useState();
        const [User, setUser] = useState();
        const [TweetMsg, setTweetMsg] = useState();

        const handleSubir = (e) => {
            let file = e.target.files[0];
            let fileRef = ref(storage, `/avatar/${file.name}`);
            const uploadTask = uploadBytesResumable(fileRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is' + progress + '% done');
                }, 
                (err) => {
                    console.log(err)
                },() => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        setImages(url)
                    })
                }
            )
        }

        const handlePost = (e) => {
            let file = e.target.files[0];
            let fileRef = ref(storage, `/Post/${file.name}`);
            const uploadTask = uploadBytesResumable(fileRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is' + progress + '% done');
                }, 
                (err) => {
                    console.log(err)
                },() => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        setImg(url)
                    })
                }
            )
        }

        const SendTweet = async (e) => {
            
            e.preventDefault();

            if(User.length < 1){
                alert('Debes ingresar un Usuario');
            }
            if(images.length < 1){
                alert('Debes ingresar una Foto de perfil');
            }
            if(TweetMsg.length < 5){
                alert('Debes ingresar un texto de mas de 5 caracteres');
            }
            if(TweetMsg.length > 500){
                alert('Tu post debe de tener menos de 500 caracteres');
            }else{
                await db.collection('post').doc().set({
                    name: User,
                    Username: User,
                    verifield: true,
                    text: TweetMsg,
                    timestamp: Date.now(),
                    avatar: images,
                    ImagePost: img
                });

                setTweetMsg();
                setImg();
                setUser();
            }
        }

  return (
    <TweetBoxx>
        <Form>
        <File type='file' onChange={ handleSubir } />
            <Div>
                {
                    images ? <Avatar src ={ images } alt = ""/> : <Avatar src = { IconeP } alt = ""/>
                }
                <div className='Column'>
                    <input Text = "Text" placeholder = "Deja un tweet" value={ TweetMsg } onChange={ e => setTweetMsg(e.target.value)} />
                    <input Text = "Text" placeholder = "Usuario" value={ User } onChange={ e => setUser(e.target.value)} />
                </div>
            </Div>
            <Div>
                <DivBox>
                    <File type='file' Primary onChange={ handlePost } />
                    <InsertPhotoOutlinedIcon />
                    <File type='file' Primary onChange={ handlePost } />
                    <GifBoxOutlinedIcon />
                    <AlignHorizontalLeftOutlinedIcon />
                    <SentimentSatisfiedOutlinedIcon />
                    <EventOutlinedIcon />
                    <LocationOnOutlinedIcon />
                </DivBox>
                <input Text = "Text" placeholder = "Url Opcional" />
                <Button onClick={ SendTweet } > Twittear </Button>
            </Div>
        </Form>
    </TweetBoxx>
  )
}
