// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import InputSelect from './InputSelect';

// const mockConsoleLog = jest.fn();
// global.console.log = mockConsoleLog;

// describe('InputSelect component', () => {
//   test('should call the keySetter function when a key is pressed', () => {
//     const keySetter = jest.fn();
//     const setListening = jest.fn();

//     render(
//       <InputSelect
//         keySetter={keySetter}
//         keyState={null}
//         number={1}
//         existingKeys={[]}
//         listening={[false, setListening]}
//       />
//     );

//     expect(screen.getByTestId('input-select')).toBeInTheDocument();
//     expect(screen.getByText('Input Chosen for "1":')).toBeInTheDocument();
//     expect(screen.getByTestId('recorder')).toBeInTheDocument();

//     fireEvent.click(screen.getByTestId('recorder'));
//     expect(setListening).toHaveBeenCalledWith(true);

//     jest.advanceTimersByTime(200);

//     fireEvent.keyPress(document, { key: 'a', code: 'KeyA', charCode: 65 });
//     expect(keySetter).toHaveBeenCalledWith('a');
//   });

//   test('should not call the keySetter function when the selected key is already in use', () => {
//     const keySetter = jest.fn();
//     const setListening = jest.fn();

//     render(
//       <InputSelect
//         keySetter={keySetter}
//         keyState={null}
//         number={1}
//         existingKeys={['a']}
//         listening={[false, setListening]}
//       />
//     );

//     expect(screen.getByTestId('input-select')).toBeInTheDocument();
//     expect(screen.getByText('Input Chosen for "1":')).toBeInTheDocument();
//     expect(screen.getByTestId('recorder')).toBeInTheDocument();

//     fireEvent.click(screen.getByTestId('recorder'));
//     expect(setListening).toHaveBeenCalledWith(true);

//     fireEvent.keyPress(document, { key: 'a', code: 'KeyA', charCode: 65 });

//     expect(mockConsoleLog).toHaveBeenCalledWith('This key is already in use!');
//     expect(keySetter).not.toHaveBeenCalled();
//   });

//   test('should not call the keySetter or setListening function when a key is pressed and listening is true', () => {
//     const keySetter = jest.fn();
//     const setListening = jest.fn();

//     render(
//       <InputSelect
//         keySetter={keySetter}
//         keyState={null}
//         number={1}
//         existingKeys={[]}
//         listening={[true, setListening]}
//       />
//     );

//     expect(screen.getByTestId('input-select')).toBeInTheDocument();
//     expect(screen.getByText('Input Chosen for "1":')).toBeInTheDocument();
//     expect(screen.getByTestId('recorder')).toBeInTheDocument();

//     fireEvent.click(screen.getByTestId('recorder'));
//     fireEvent.keyPress(document, { key: 'a', code: 'KeyA', charCode: 65 });

//     expect(setListening).not.toHaveBeenCalled();
//     expect(keySetter).not.toHaveBeenCalled();
//   });
// });
