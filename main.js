import Cycle from '@cycle/core';
import {makeDOMDriver, div, input, p} from '@cycle/dom';

class Main {
    constructor() {
        console.log('object created');
    }

    update(text) {
        console.log('update: ' + text);
    }
}

var a = new Main();
a.update('codey');

function main(drivers) {
    return {
            DOM: drivers.DOM.select('input').events('click')
                  .map(ev => ev.target.checked)
                        .startWith(false)
                              .map(toggled =>
                                   div([
                                                 input({type: 'checkbox'}), 'Toggle me',
                                                           p(toggled ? 'ON' : 'off')

                                   ])
                                        )

    };

}
// function main() {
//     return {
//             DOM: Rx.Observable.interval(1000)
//                   .map(i => CycleDOM.h1('' + i + ' seconds elapsed'))

//     };
// }

const drivers = {
	DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);


