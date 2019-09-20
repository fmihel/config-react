import React from 'react';

class Common extends React.Component{
    bind(funcName){
        this[funcName] = this[funcName].bind(this);
    }
    render(){
        return (
            <div className = {this.props.css.light.self}>
                {this.props.caption}
            </div>
        );
    }
}
Common.defaultProps = {
    css:{
        light:{
            self:'common'
        }
    },
    caption:'common'
};

export default Common;