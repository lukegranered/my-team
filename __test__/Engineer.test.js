const { it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

jest.mock('../lib/Employee');
jest.mock('../lib/Engineer.js');

it('creates an Engineer object', () => {
    const engineer = new Engineer;
    
    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual('1');
    expect(engineer.email).toBe('john@john.com');
    expect(engineer.github).toBe('lukegranered');
})

it('returns data describing object', () => {

    expect(getName()).toBe(this.name);
    expect(this.id);
    expect(this.email);
    expect(this.github);
    expect('Engineer');
});
