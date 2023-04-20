import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Box from '../box/box.jsx';
import styles from './blocks.css';

const BlocksComponent = props => {
    const {
        containerRef,
        dragOver,
        ...componentProps
    } = props;
    return (
        <>
            <Box
                className={classNames(styles.blocks, {
                    [styles.dragOver]: dragOver
                })}
                {...componentProps}
                componentRef={containerRef}
            />

            <div
                style={{
                    backgroundColor: 'transparent',
                    width: 320,
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 110,
                    borderRadius: 16,
                    boxShadow: '2px 5px 7px rgba(0, 0, 0, 0.1)',
                    pointerEvents: 'none'
                }}
            />

            <div
                style={{
                    backgroundColor: 'transparent',
                    width: 'calc(100% - 446px)',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    borderRadius: 16,
                    boxShadow: '2px 5px 7px rgba(0, 0, 0, 0.1)',
                    pointerEvents: 'none'
                }}
            />
        </>
    );
};
BlocksComponent.propTypes = {
    containerRef: PropTypes.func,
    dragOver: PropTypes.bool
};
export default BlocksComponent;
