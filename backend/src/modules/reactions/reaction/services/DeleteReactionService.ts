import AppError from "@shared/errors/AppError";
import IReactionsRepoository from "../repositories/IReactionsRepository";

export default class DeleteReactionService{
    constructor(private reactionsRepository: IReactionsRepoository){}

    async execute(id: string){

        try{
           const response =  await this.reactionsRepository.delete(id);
        
           return response;
        }catch{

            throw new AppError('Ocorreu um erro', 400);
        }
    }
}