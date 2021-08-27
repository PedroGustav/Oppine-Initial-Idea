import { formatRelative, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import React, { useEffect, useCallback } from 'react';
import { BiDislike, BiLike, BiTrash } from 'react-icons/bi';
import { usePosts } from '../../hooks/post';
import { useAuth } from '../../hooks/auth';
import { Container, Post, PostImage, Loading } from './styles';


export const MyPosts: React.FC = () => {
    const { user } = useAuth();
    const {myPosts, createMyPostsFeed} =  usePosts();
    useEffect(() => {
            createMyPostsFeed(user);
    },[])
    
    console.log(myPosts);
    const dateInTextFormat = useCallback((data: string) => {
        
        
        const date =  parseISO(data);
        const fixTimeZone = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
        return formatRelative(fixTimeZone, new Date(), {locale: pt});
    }, [])

    return (
        <Container>
            {myPosts ? myPosts.map(post => (
                <Post key={post.id}>
                    <div className="profile">
                        <img src={`http://localhost:3333/files/${post.user.avatar}`} alt={post.user.name}/>
                        <div>
                            <strong>{post.user.name}</strong>
                            <p>{dateInTextFormat(post.created_at)}</p>
                        </div>
                    </div>
                    <button className='delete-button'>
                        <BiTrash  size={24}/>
                    </button>
                    <div className="post">
                        <span className="text">{post.description}</span>
                        {post.image ? <PostImage src={`http://localhost:3333/files/${post.image}`}/>: <></>}
                    </div>
                    
                    <div className='buttons'>
                        <button className='agree'>
                            Concordo
                            <BiLike size={27} color={'#14CC60'}/>
                        </button>
                        <button className='disagree'>
                            Discordo
                            <BiDislike size={27} color={'#EE1515'}/>
                        </button>
                    </div>
                </Post>
            )): <Loading></Loading>}
            
        </Container>
    );
}