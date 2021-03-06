import Presenter from '../superclasses/Presenter';
import AppModel from './AppModel';
import View from '../superclasses/View';
import * as EventEmitter from 'eventemitter3';
import MapView from '../components/map/MapView';
import MapPresenter from '../components/map/MapPresenter';

export default class AppPresenter extends Presenter<AppModel, View> {
  private readonly mapView: MapView;

  public constructor(model: AppModel, view: View, emitter: EventEmitter) {
    super(model, view, emitter);

    this.mapView = new MapView(
        document.getElementById('map'),
        this.emitter
    );
    new MapPresenter(this.model, this.mapView, this.emitter);

    this.emitter.on('initialDraw', () => {
      this.mapView.draw();
    });
  }
}
