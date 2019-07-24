import mapboxgl from 'mapbox-gl';
import View from '../../superclasses/View';

/** @class */
export default class MapView extends View {
  /**
   * @param {HTMLElement} container
   * @param {EventEmitter} emitter
   */
  constructor(container, emitter) {
    super(container, emitter);

    mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzbG9yaW5jeiIsImEiOiJjamx5aXVwaH' +
        'AxamZzM3dsaWdkZ3Q2eGJyIn0.mXjlp9c3l2-NBoS1uaEUdw';

    const href = `href="https://github.com/thomaslorincz"`;
    const rel = `rel="noopener"`;
    const target = `target="_blank"`;
    const credit = 'Developed by Thomas Lorincz';
    const attribution = `<a ${href} ${rel} ${target}>${credit}<a/>`;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      bounds: [[-115.11466, 53.04465], [-112.16116, 54.06214]],
      attributionControl: false,
      dragRotate: false,
      pitchWithRotate: false,
    }).addControl(new mapboxgl.AttributionControl({
      customAttribution: attribution,
    }));

    this.map.on('load', () => {
      this.emitter.emit('loaded');
    });
  }

  /** Draws the map */
  draw({}) {
    // TODO:
  }
}
