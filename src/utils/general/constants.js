// Supported success response status code
export const SUCCESS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
};

// Supported error response status codes and names
export const ERROR_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500,
};
export const ERROR_NAMES = {
  BAD_REQUEST: 'BadRequest',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'NotFound',
  VALIDATION_ERROR: 'ValidationError',
  INTERNAL_SERVER: 'InternalServerError',
};

// Application supported exit status
export const EXIT_STATUS = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Binary data supported configuration
export const DOCUMENTS_CONFIG = {
  fileName: 'Document',
  allowedMimeTypes: ['text/plain', 'application/pdf'],
  sizeLimitInMB: 15,
};
export const PICTURES_CONFIG = {
  fileName: 'Picture',
  allowedMimeTypes: ['image/jpeg', 'image/png'],
  sizeLimitInMB: 5,
};
export const IMAGE_CONFIG = {
  fileName: 'Image',
  allowedMimeTypes: ['image/jpeg', 'image/png'],
  sizeLimitInMB: 5,
};
export const VIDEOS_CONFIG = {
  fileName: 'Video',
  allowedMimeTypes: [
    'video/x-flv',
    'video/mp4',
    'video/MP2T',
    'video/3gpp',
    'video/quicktime',
    'video/x-msvideo',
    'video/x-ms-wmv',
  ],
  sizeLimitInMB: 500,
};
export const MULTIMEDIA_CONFIG = {
  fileName: 'multimedia',
  allowedMimeTypes: [
    'video/x-flv',
    'video/mp4',
    'video/MP2T',
    'video/3gpp',
    'video/quicktime',
    'video/x-msvideo',
    'video/x-ms-wmv',
    'image/jpeg',
    'image/png',
  ],
  sizeLimitInMB: 500,
};

// Table names
export const TABLE_NAMES = {
  USER: 'users',
  POST: 'posts',
  COMMENT: 'comments',
  EVENT: 'events',
  LEGAL_PERSON: 'legalpersons',
  PHYSICAL_PERSON: 'physicalpersons',
  MATERIAL: 'materials',
  PRODUCT: 'products',
  FILE: 'files',
  REPLIED_TO: 'repliedtos',
  USER_TOKEN: 'usertokens',
  ADVERTISEMENT: 'advertisements',
  DIDACTIC_MATERIAL: 'didacticmaterials',
  MEMORIAL_MATERIAL: 'memorialmaterials',
  RATING: 'ratings',
  SAVED_POST: 'savedposts',
  SPONSOR: 'sponsors',
  USER_SESSION_TOKEN: 'usersessiontokens',
};
