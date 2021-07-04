import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "@modules/users/infra/typeorm/entities/User";

@Entity('follows')
class Follow{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'id_user_send'})
    user_send: User;

    @Column()
    id_user_send: string;

    @OneToOne(() => User)
    @JoinColumn({name: 'id_user_receive'})
    user_receive: string;

    @Column()
    id_user_receive: string;

    @Column('boolean')
    state: boolean;

    @CreateDateColumn()
    created_at: Date;
}

export default Follow;