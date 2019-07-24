import Presenter from '../superclasses/Presenter';
import MapView from '../components/map/MapView';
import MapPresenter from '../components/map/MapPresenter';

/** @class */
export default class AppPresenter extends Presenter {
  /**
   * @param {AppModel} model
   * @param {View} view
   * @param {EventEmitter} emitter
   */
  constructor(model, view, emitter) {
    super(model, view, emitter);

    this.mapView = new MapView(document.getElementById('map'));
    new MapPresenter(this.model, this.mapView, this.emitter);

    this.emitter.on('initialDraw', (data) => {
      this.mapView.draw(data);
    });
  }
}
