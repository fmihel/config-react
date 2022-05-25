export default {
    lazy() { return import(/* webpackChunkName: "lazy" */ './lazy').then((lazy) => ({ lazy })); },
    lodash() { return import(/* webpackChunkName: "lodash" */ 'lodash').then((lodash) => ({ _: lodash })); },
};
