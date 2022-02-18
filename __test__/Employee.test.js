const { tsImportEqualsDeclaration } = require('@babel/types');
const { it } = require('jest-circus');
// const { mocked } = require('jest-mock');
const { test } = require('picomatch');
// const { expect, jest } = require('@jest/globals');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

it('creates an employee object'), (name) => {
    const employee = new Employee('John');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual('1');
    expect(employee.email).toBe('john@john.com');
};

it('gets Employees info as an object'), () => {
    // const employee = new Employee('John');

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toBe('1');
    expect(employee.getEmail()).toBe('john@john.com');
    expect(employee.getRole()).toBe('Employee');
}