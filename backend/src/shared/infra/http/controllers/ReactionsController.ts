import ReactionsRepository from "@modules/reactions/reaction/infra/typeorm/repositories/ReactionsRepository";
import CountReactionsInPostService from "@modules/reactions/reaction/services/CountReactionsInPostService";
import CreateReactionService from "@modules/reactions/reaction/services/CreateReactionService";
import DeleteReactionService from "@modules/reactions/reaction/services/DeleteReactionService";
import { Request, Response } from "express";

export default class ReactionsController{

   async create(request: Request, response: Response): Promise<Response>{

        const id_user = request.user.id;

        const { id_post, type } = request.body;

        const reactionsRepository = new ReactionsRepository();
        const createReaction = new CreateReactionService(reactionsRepository);

        const reaction = await createReaction.execute({ id_user,  id_post, type});

        return response.status(201).json(reaction);

   }

   async  countAgrees(request: Request, response: Response): Promise<Response>{

        const id_post = request.params.idpost;

        const reactionsRepository = new ReactionsRepository();
        const countReactions  = new CountReactionsInPostService(reactionsRepository);

        const reactions = countReactions.execute({id_post, type: 'concordo'});

        return response.json(reactions);
   }

   async  countDisagrees(request: Request, response: Response): Promise<Response>{

        const id_post = request.params.idpost;

        const reactionsRepository = new ReactionsRepository();
        const countReactions  = new CountReactionsInPostService(reactionsRepository);

        const reactions = countReactions.execute({id_post, type: 'discordo'});

        return response.json(reactions);
   }

   async delete(request: Request, response: Response): Promise<Response>{

      const id_reaction = request.params.idreaction;

      const reactionsRepository = new ReactionsRepository();
      const deleteReaction = new DeleteReactionService(reactionsRepository);

      const message = await deleteReaction.execute(id_reaction);

      return response.json(message);

   }
}