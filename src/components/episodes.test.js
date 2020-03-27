import React from 'react';
import { render } from '@testing-library/react'
import Episodes from './Episodes'

test('App renders', () => {
    render(<Episodes episodes={[]} error=''/>);
});

