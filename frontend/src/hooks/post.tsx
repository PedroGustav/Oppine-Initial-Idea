import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { User } from './auth';

export interface Post{
    id: string;
    description: string;
    created_at: string;
    image?: string;
    user: {
        name: string;
        avatar: string;
    }
}

interface PostContextData{
    feedPosts: Post[];
    myPosts: Post[];
    isNewPostsModalOpen: boolean;
    OpenModal: () => void;
    CloseModal: () => void;
    createPost:(data: FormData) => Promise<void>;
    createFeed: () => void;
    createMyPostsFeed: (user: User) => Promise<void>;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

export const PostProvider: React.FC = ({children}) => {

    const [ myPosts, setMyPosts ] = useState<Post[]>([]);
    const [ feedPosts, setFeedPosts ] = useState<Post[]>([]);
    const [isNewPostsModalOpen, setIsNewPostsModalOpen] = useState(false);

    const createMyPostsFeed = useCallback(async (user) => {
        await api.get(`/post/${user.id}`)
        .then( response => setMyPosts(response.data));
    }, []);
    
    const createFeed = useCallback(  () => {
        
        api.get('/post/feed').then(response => setFeedPosts(response.data));
    }, []);

    
    const OpenModal = useCallback(() => {
        setIsNewPostsModalOpen(true);
    }, []);

    const CloseModal = useCallback(() => {
        setIsNewPostsModalOpen(false);
    }, []);

    const createPost = useCallback(async (data: FormData) => {
         const response = await  api.post('/post', data);
         const newPost: Post = {
             id: response.data.id,
             description:  response.data.description,
             created_at: response.data.created_at,
             image: response.data.image,
             user:{
                 name: response.data.user.name,
                 avatar: response.data.user.avatar
             }
         }

        setFeedPosts([newPost, ...feedPosts]);
        
        
        
    }, [setFeedPosts, feedPosts]);

    return(
        <PostContext.Provider value={{ feedPosts, myPosts, isNewPostsModalOpen, OpenModal, CloseModal, createPost, createFeed, createMyPostsFeed}}>
            {children}
        </PostContext.Provider>
    );
}

export function usePosts(): PostContextData {
    const context = useContext(PostContext)

    if(!context){
        throw new Error('O usePostsModal só pode ser utilizado com o PostProvider.');
    }

    return context;
}
