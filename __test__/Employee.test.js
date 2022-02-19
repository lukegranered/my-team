// const { tsImportEqualsDeclaration } = require('@babel/types');
const { it } = require('@jest/globals');
// const { mocked } = require('jest-mock');
// const { test } = require('picomatch');
// const { expect, jest } = require('@jest/globals');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

it('creates an employee object', () => {
    const employee = new Employee;

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual('1');
    expect(employee.email).toBe('john@john.com');
});

it('returns data describing object', () => {

    expect(this.name);
    expect(this.id);
    expect(this.email);
    expect('Employee');
});
