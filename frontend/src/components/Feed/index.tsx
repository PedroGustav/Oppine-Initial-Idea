import React, { useCallback, useEffect } from 'react';
import { Container, Post, PostImage, Loading } from './styles';
import { BiLike, BiDislike } from 'react-icons/bi'
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import formatRelative from 'date-fns/formatRelative';
import { usePosts } from '../../hooks/post';

export const Feed: React.FC = () => {

    const {feedPosts, createFeed} =  usePosts();    
    useEffect(() => {
        createFeed();
    }, [createFeed]);
    
    const dateInTextFormat = useCallback((data: string) => {
        
        
            const date =  parseISO(data);
            const fixTimeZone = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
            return formatRelative(fixTimeZone, new Date(), {locale: pt});
    }, [])
    return(
        <Container>
            
            {feedPosts ? feedPosts.map(post => (
                <Post key={post.id}>
                    <div className="profile">
                        <img src={`http://localhost:3333/files/${post.user.avatar}`} alt={post.user.name}/>
                        <div>
                            <strong>{post.user.name}</strong>
                            <p>{dateInTextFormat(post.created_at)}</p>
                        </div>
                    </div>
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
            )): <>a</>}
            
        </Container>
    );
};