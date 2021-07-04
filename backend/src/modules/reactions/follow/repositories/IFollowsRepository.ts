import ICreateFollowDTO from "../dtos/ICreateFollowDTO";
import Follow from "../infra/typeorm/entities/Follow";

export default interface IFollowsRepository{
    create(Data: ICreateFollowDTO): Promise<Follow>;
    listByUserIdSend(id_user_send: string): Promise<Follow[]>;
    listByUserIdReceive(id_user_receive: string): Promise<Follow[]>;
    findById(id: string): Promise<Follow | undefined>;
}