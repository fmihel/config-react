import modules from './modules';

async function loader(...names) {
    const modulesNames = Object.keys(modules);
    const mods = [];

    modulesNames.map((name) => {
        if (names.indexOf(name) >= 0) { mods.push(modules[name]); }
    });

    return Promise.all(mods.map((mod) => mod()))
        .then((modules) => {
            let out = {};
            modules.map((mod) => {
                out = { ...out, ...mod };
            });
            return out;
        });
}

export default loader;
