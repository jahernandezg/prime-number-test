// import { NextFunction, Request, Response } from 'express';
const parseInPropsMiddleware = require('../../src/middlewares/parseIntProps.middleware');

describe('Authorization middleware', () => {
    let mockRequest;
    let mockResponse;
    let nextFunction = jest.fn();

    beforeEach(() => {
        mockRequest = {
            params: {
                numb:'1'
            }
        };
        mockResponse = {
            json: jest.fn()
        };
    });

    test('test middleware normal response', async () => {
        parseInPropsMiddleware(['numb'], 'params')(mockRequest, mockResponse , nextFunction);
        expect(mockRequest.params.numb).toEqual(1);
    });

    test('test middleware no change request', async () => {
        parseInPropsMiddleware('numb', 'params')(mockRequest, mockResponse , nextFunction);
        expect(mockRequest.params.numb).toEqual('1');
    });

});