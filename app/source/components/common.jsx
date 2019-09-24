import React from 'react';

class Common extends React.Component {
    bind(...funcsName) {
        funcsName.map((funcName) => {
            this[funcName] = this[funcName].bind(this);
            return undefined;
        });
    }

    render() {
        return (
            <div className = {this.props.css.light.self}>
                {this.props.caption}
            </div>
        );
    }
}
Common.defaultProps = {
    css: {
        light: {
            self: 'common',
        },
    },
    caption: 'common',
};

export default Common;
