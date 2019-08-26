import Model from '../superclasses/Model';
import * as EventEmitter from 'eventemitter3';

/** Model that stores and controls the app's data and state. */
export default class AppModel extends Model {
  public constructor(emitter: EventEmitter) {
    super(emitter);
  }

  /** A method for dispatching the initial draw event of the app. */
  initialDraw(): void {
    this.emitter.emit('initialDraw');
  }
}
