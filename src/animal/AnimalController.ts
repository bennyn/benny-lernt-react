import * as Boom from 'boom';
import * as Hapi from 'hapi';
import AnimalService from './AnimalService';

class AnimalController {
  public static async get() {
    return (new AnimalService).getAll();
  }

  public static async getById(request: Hapi.Request) {
    const animal = await (new AnimalService).getById(parseInt(request.params.id, 10));
    return (animal) ? animal : Boom.notFound();
  }

  public static async post(request: Hapi.Request) {
    const {name} = request.payload as { name: string };
    return (new AnimalService).save({name});
  }
}

export default AnimalController;
