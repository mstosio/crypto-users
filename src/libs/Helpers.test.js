/* eslint-disable */
import { validateEmail, validateIPaddress } from './Helpers';

test('Email Validation', () => {
    expect(validateEmail("michal@gmail.com")).toBe(true);
    expect(validateEmail("michal@gmailcom")).toBe(false);
    expect(validateEmail("michal")).toBe(false);
    expect(validateEmail("michal@gmail@com")).toBe(false);
    expect(validateEmail("michal@gm!ail.com")).toBe(false);
    expect(validateEmail("micha2132132l@gm4!ail.556com")).toBe(false);
});

test('Ip Adress Validation', () => {
    expect(validateIPaddress("110.234.52.124")).toBe(true);
    expect(validateIPaddress("192.168.0.1")).toBe(true);
    expect(validateIPaddress("110.234.52.124")).toBe(true);
    expect(validateIPaddress("210.110")).toBe(false);
    expect(validateIPaddress("255")).toBe(false);
    expect(validateIPaddress("y.y.y.y")).toBe(false);
    expect(validateIPaddress("636.10.10.20")).toBe(false);
    expect(validateIPaddress("4444.11.11.11")).toBe(false);
    expect(validateIPaddress("4444.11.1122.11")).toBe(false);
});