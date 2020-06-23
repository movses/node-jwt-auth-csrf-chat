class ErrorHandler {
  /**
   * @return {Function}
   * @description Handles the error.
   */
  static handleError() {
    return (e, req, res, next) => {
      const result = {
        status: 500,
        code: e.code || 'developer error, contact developer :)',
        message: e.message
      }

      console.log(e)
      res.status(result.status).json(result)
    }
  }
}

module.exports = ErrorHandler
