import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

export function createSlider(controlId, minYear, maxYear, changeCb) {
    let slider = document.getElementById(controlId);

    noUiSlider.create(slider, {
        start: [minYear, maxYear],
        connect: true,
        range: {
            min: minYear,
            max: maxYear
        },
        pips: {
            mode: 'positions',
            values: [0, 25, 50, 75, 100],
            density: 4
        }
    });

    slider.noUiSlider.on('set', changeCb);
}