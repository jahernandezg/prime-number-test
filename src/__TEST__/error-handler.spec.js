const errorHandler = require('../../src/middlewares/error-handler')

describe('middleware.ErrorHandler', () => {
  /**
   * Mocked Express Request object.
   */
  let req

  /**
   * Mocked Express Response object.
   */
  let res

  /**
   * Mocked Express Next function.
   */
  const next = jest.fn()

  /**
   * Reset the `req` and `res` object before each test is ran.
   */
  beforeEach(() => {
    req = {
      params: {},
      body: {}
    }

    res = {
      data: null,
      code: null,
      status (status) {
        this.code = status
        return this
      },
      send (payload) {
        this.data = payload
      }
    }

    next.mockClear()
  })

  test('should handle error', () => {
    errorHandler(new Error(), req, res, next)

    expect(res.code).toBeDefined()
    expect(res.code).toBe(500)

    expect(res.data).toBeDefined()
    // expect(res.data).toBe('Something broke!')
  })
})