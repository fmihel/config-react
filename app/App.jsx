import React, { Suspense, lazy } from 'react';
import loader from './loader';
// import LazyCom from './components/LazyCom.jsx';

const LazyCom = lazy(() => import(/* webpackChunkName: "LazyCom" */'./components/LazyCom.jsx'));

export class App extends React.Component {
    constructor(p) {
        super(p);
        this.loadLazy = this.loadLazy.bind(this);
        this.loadLazyReact = this.loadLazyReact.bind(this);
        this.state = {
            vsiisbleLazy: false,
        };
    }

    loadLazy() {
        loader('lazy')
            .then(({ lazy: bb, _ }) => {
                bb.noDef();
                // console.log(_.fill(Array(3), 'a'));
            });

        // import(/* webpackChunkName: "lazy" */ './lazy')
        // .then(mod => {
        //    const lazy = mod.default;
        //    lazy();
        // });
    }

    loadLazyReact() {
        this.setState({ vsiisbleLazy: true });
    }

    render() {
        const { vsiisbleLazy } = this.state;
        return (
            <div id='app'>
                App
                <button onClick={this.loadLazy}>load lazy..</button>
                <button onClick={this.loadLazyReact}>load lazy react..</button>
                {vsiisbleLazy
                && <Suspense fallback={<div>Loading...</div>}><LazyCom/></Suspense>
                }
            </div>
        );
    }
}
