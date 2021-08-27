import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Post from "@modules/posts/infra/typeorm/entities/Post";
import User from "@modules/users/infra/typeorm/entities/User";

@Entity('coment')
class Coment{

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => User)
    @JoinColumn({name: 'id_user'})
    user: User;
    
    @Column()
    id_user: string;

    @OneToOne(() => Post)
    @JoinColumn({name: 'id_post'})
    post: Post;

    @Column()
    id_post: string;

    @Column()
    coment: string;

    @CreateDateColumn({ type: 'timestamptz'})
    created_at: Date;
}

export default Coment;