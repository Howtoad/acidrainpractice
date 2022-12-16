import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckSequence from './CheckSequence';

const mockConsoleLog = jest.fn();
global.console.log = mockConsoleLog;

describe('CheckSequence component', () => {
    test('should log "Excellent" to the console when the correct sequence of keys is pressed within the time range', () => {
        const setBarAnimation = jest.fn();

        const frameData = [
            ['a'],
            ['b', 1, 14],
            ['b', 24, 26],
            ['b', 34, 35],
        ];

        render(
            <CheckSequence
                frameData={frameData}
                barAnimation="%0"
                setBarAnimation={setBarAnimation}
            />
        );

        fireEvent.keyPress(document, { key: 'a', code: 'KeyA', charCode: 65 });

        jest.advanceTimersByTime(17);
        fireEvent.keyPress(document, { key: 'b', code: 'KeyB', charCode: 66 });

        jest.advanceTimersByTime(400 - 17);
        fireEvent.keyPress(document, { key: 'b', code: 'KeyB', charCode: 66 });

        jest.advanceTimersByTime(567 - 400);
        fireEvent.keyPress(document, { key: 'b', code: 'KeyB', charCode: 66 });

        expect(mockConsoleLog).toHaveBeenCalledWith('Excellent');
    });
});