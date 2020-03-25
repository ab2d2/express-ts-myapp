import ExamplesService from '../../services/examples.service';
import { Request, Response } from 'express';

export class Controller {
  all(req: Request, res: Response): void {
    ExamplesService.all().then(r => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    ExamplesService.byId(id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const r = await ExamplesService.create(req.body.name);

    return res
      .status(201)
      .location(`/api/v1/examples/${r.id}`)
      .json(r);
  }
}
export default new Controller();
