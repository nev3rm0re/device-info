import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@import': 'url(https://fonts.googleapis.com/css?family=Oswald)',
    '@font-face': {
        fontFamily: 'Oswald',
        src: 'url("https://fonts.googleapis.com/css?family=Oswald")'
    },
    marqueeStrip: {
        position: 'relative',
        width: 480,
        "top": 'calc(100% - 2em)',
        opacity: props => props.opacity || 0.7,
        overflow: 'hidden',
        color: 'navy',
        fontFamily: 'Oswald',
        fontSize: 32,
        backgroundImage: props => `linear-gradient(${props.fromColor || 'red'} ${props.divider || 25}%, ${props.toColor || 'blue'})`,
        border: '1px solid white',
        '& $content': {
            transform: 'translateX(100%)',
            display: 'block',
            animation: props => `$demo1 ${props.speed || 7}s ease-out infinite`,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
        }
    },
    'content': {},
    '@keyframes demo1': {
        '0%': {
            transform: 'translateX(100%)'
        },
        '100%': {
            'transform': 'translateX(-100%)'
        }
    }
});


export default function Marquee(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.marqueeStrip}>
            <div className={classes.content}>{props.content}</div>
        </div>
    );
}