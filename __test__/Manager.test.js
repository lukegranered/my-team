const { it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

jest.mock('../lib/Employee');
jest.mock('../lib/Manager.js');

it('creates a Manager object', () => {
    const manager = new Manager;
    
    expect(manager.name).toBe('John');
    expect(manager.id).toEqual('1');
    expect(manager.email).toBe('john@john.com');
    expect(manager.officenumber).toBe('100');
})