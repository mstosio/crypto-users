/* eslint-disable */
import { validateEmail } from './Helpers';

test('Email Validation', () => {
    expect(validateEmail("michal@gmail.com")).toBe(true);
    expect(validateEmail("michal@gmailcom")).toBe(false);
    expect(validateEmail("michal")).toBe(false);
    expect(validateEmail("michal@gmail@com")).toBe(false);
    expect(validateEmail("michal@gm!ail.com")).toBe(false);
    expect(validateEmail("micha2132132l@gm4!ail.556com")).toBe(false);
});