import React from 'react';
import { FriendsList } from '../../components/FriendsList';
import { Header } from '../../components/Header';
import { Feed } from '../../components/Feed';
import { Container, RightSection } from './styles';
import { usePosts } from '../../hooks/post';
import { NewPostModal } from '../../components/NewPostModal';
import { FriendsRequest } from '../../components/FriendsRequest';
export const Dashboard: React.FC = () => {
    
    const { OpenModal, isNewPostsModalOpen, CloseModal } = usePosts();
    const { createMyPostsFeed } = usePosts();
    return(
        <>
            <Header 
                title={'Feed de publicações'}
                onClickOpenNewPostModal={OpenModal}    
            />
            
            <Container>
                <NewPostModal
                isOpen={isNewPostsModalOpen}
                onRequestClose={CloseModal}
                onClickClose={CloseModal}
                />

                <Feed/>
                
                <RightSection>
                    <FriendsRequest/>
                    <FriendsList/>
                </RightSection>
            </Container>    
        </>
    );
}