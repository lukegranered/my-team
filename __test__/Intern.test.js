const { it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

jest.mock('../lib/Employee');
jest.mock('../lib/Intern.js');

it('creates an Intern object', () => {
    const intern = new Intern;
    
    expect(intern.name).toBe('John');
    expect(intern.id).toEqual('1');
    expect(intern.email).toBe('john@john.com');
    expect(intern.school).toBe('school');
})