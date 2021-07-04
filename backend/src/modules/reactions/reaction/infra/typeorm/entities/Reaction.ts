import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import Post from "@modules/posts/infra/typeorm/entities/Post";
import User from "@modules/users/infra/typeorm/entities/User";

@Entity('reactions')
class Reaction{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'id_user'})
    user: User;

    @Column()
    id_user: string;

    @ManyToOne(() => Post)
    @JoinColumn({name: 'id_post'})
    post: Post;
    
    @Column()
    id_post: string;

    @Column()
    type: string;

    @CreateDateColumn()    
    created_at: Date;
}

export default Reaction;