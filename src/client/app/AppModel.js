import Model from '../superclasses/Model';

/** Model that stores and controls the app's data and state. */
export default class AppModel extends Model {
  /** @param {EventEmitter} emitter */
  constructor(emitter) {
    super(emitter);
  }

  /** A method for dispatching the initial draw event of the app. */
  initialDraw() {
    this.emitter.emit('initialDraw');
  }
}
