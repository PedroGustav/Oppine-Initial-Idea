import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "@modules/users/infra/typeorm/entities/User";

@Entity('posts')
class Post{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, { eager: true})
    @JoinColumn({ name: 'id_user'})
    user: User;
    
    @Column()
    id_user: string;

    @Column()
    image?: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export default Post;