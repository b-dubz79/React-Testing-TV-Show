import React from 'react';
import { render } from '@testing-library/react'
import Episodes from '../src/components/Episodes'

test('App renders', () => {
    render(<Episodes episodes={[]} error=''/>);
});