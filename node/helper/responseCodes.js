class ResponseCodes {

    // Static constants for HTTP response codes
    static RESPONSE_CODES = {
      SUCCESS: 200,
      ACCEPTED: 201,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      PAYMENT_REQUIRED: 402,
      ACCESS_NOT: 403,
      NOT_FOUND: 404,
      NOT_ACCEPTABLE: 406,
      TIMEOUT: 408,
      CONFLICT: 409,
      LARGE_PAYLOAD: 413,
      UNPROCESSABLE_ENTITY: 422,
      TOO_MANY_REQUESTS: 429,
      SERVER_ERROR: 500,
      BAD_GATEWAY: 502
    }
  
    // Static constants for response messages
    static RESPONSE_MESSAGES = {
      SUCCESS: "Success",
      UPDATED: "Updated successfully",
      CREATED: "Created successfully",
      DELETED: "Deleted successfully",
      NOT_FOUND: "Not found.",
      BAD_REQUEST: "Bad request.",
      PAYMENT_REQUIRED: "Payment required.",
      ACCESS_NOT: "Forbidden, access denied.",
      BAD_GATEWAY: "Request method not allowed.",
      UNPROCESSABLE_ENTITY: "Unprocessable entity.",
      TIMEOUT: "Request timeout.",
      LARGE_PAYLOAD: "Request payload too large.",
      SERVER_ERROR: "Internal server error.",
      MISSING_BODY: "Required value missing.",
      FILE_ERROR: "Error to process file",
      NOT_ACCEPTABLE: "Not acceptable",
      EMAIL_ALREADY_REGISTERED: "Email already registered",
      TOO_MANY_REQUESTS: "Too many requests, please try again later.",
      CARD_ALREADY_EXIST: "Card already exist",
      ALREADY_EXIST: "Already exist",
      LINK_SENT: "A link has been successfully sent to your registered email address.",
      SOMETHING_WENT_WRONG: "Something went wrong.",
      PASSWORD: {
        NOT_SAME: "Password and confirm password fields must match",
        INCORRECT: "Password is incorrect"
      },
      UNAUTHORIZED: "Failed to authenticate because of bad credentials or invalid authorization details."
    }
}

module.exports = ResponseCodes