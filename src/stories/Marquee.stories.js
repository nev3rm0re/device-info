import React from 'react';
import { action } from '@storybook/addon-actions';
import Marquee from '../Marquee';

import { withKnobs, text, number, color } from '@storybook/addon-knobs';

export default {
    title: 'Marquee',
    component: Marquee,
    decorators: [withKnobs]
};
const marqueeString = "The quick brown fox jumped over the lazy dog";

export const Basic = () => (
    <Marquee content={marqueeString + "😀 😎 👍 💯"} onClick={action('clicked')} />
);

export const Cyrillic = () => (
    <Marquee content='Съешь [же] ещё этих мягких французских булок да выпей чаю' />
)

export const withOptions = () => (
    <Marquee
        content={text("Content", "Try entering custom text")} speed={number('Speed', 15)}
        opacity={number("Opacity", 0.8, { range: true, min: 0.05, max: 1.0, step: 0.05 })}
        fromColor={color('Top', 'red')} toColor={color('Bottom', 'blue')} divider={number('Divide', 25, { range: true, min: 0, max: 100, step: 5 })}
    />
)