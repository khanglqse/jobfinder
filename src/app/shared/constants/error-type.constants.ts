export enum ErrorType {
    UNAUTHENTICATED = 401,
    FOBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

export enum ErrorIcon {
    UNAUTHENTICATED = 'lock',
    FOBIDDEN = 'lock',
    NOT_FOUND = 'sentiment_very_dissatisfied',
    SERVER_ERROR = 'event_busy'
}

export enum ErrorMessage {
    UNAUTHENTICATED = 'lock',
    FOBIDDEN = 'You don\'t have permission to access this content.',
    NOT_FOUND = 'We count\'t find the page you\'re looking for.',
    SERVER_ERROR = 'An error occurred and request couldn\'t completed. Please try again.',
}

export enum ErrorTitle {
    UNAUTHENTICATED = '401 Unauthenticated',
    FOBIDDEN = '403 Forbidden',
    NOT_FOUND = '404 Page Not Found',
    SERVER_ERROR = '500 Unexpected Error'
}
