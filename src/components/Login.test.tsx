import React from 'react';
import { Login } from './Login';
import { render, fireEvent, queryByAttribute, createEvent, getByText } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
const getById = queryByAttribute.bind(null, 'id');
const getByName = queryByAttribute.bind(null, 'name');
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));
describe('Test case for testing login', () => {
    let wrapper;

    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            value: jest.fn(() => {
                return {
                    matches: true,
                    addListener: jest.fn(),
                    removeListener: jest.fn()
                };
            })
        });

    });


    test('login check with right data', () => {

        const wrapper = render(<Login loginUser={() => { }} />);

        fireEvent.change(getById(wrapper.container, 'normal_login_username')!, {
            target: { value: "ahmet" }
        });

        fireEvent.change(getById(wrapper.container, 'normal_login_password')!, {
            target: { value: "544" }
        });


        const submitButton = getByName(wrapper.container, 'login_button');
        const resultLogin = fireEvent.submit(submitButton!);

        console.log(window.location.pathname);
        expect(window.location.pathname).toBe("/");
    })

})