import modules from './modules';
async function loader(...names){
    let modulesNames = Object.keys(modules);
    let mods=[];

    modulesNames.map( name => { 
        if (names.indexOf(name)>=0) 
            mods.push(modules[name]); 
    });
    
    return Promise.all(mods.map(mod=>mod()))
        .then(mods=>{
            let out = {};
            mods.map(mod=>{ 
                out={...out,...mod};
            })
            return out;
        })
}

export default loader;