import Presenter from '../../superclasses/Presenter';

/** @class */
export default class MapPresenter extends Presenter {
  /**
   * @param {AppModel} model
   * @param {MapView} view
   * @param {EventEmitter} emitter
   */
  constructor(model, view, emitter) {
    super(model, view, emitter);

    this.emitter.on('loaded', () => {
      this.model.initialDraw();
    });
  }
}
