// /* eslint-disable import/prefer-default-export */
// import * as BaseUserService from '../services/BaseUserService.js';
// import asyncHandler from '../utils/general/asyncHandler.js';
// import { SUCCESS_CODES } from '../utils/general/constants.js';
// import { decodePwdToken } from '../utils/libs/jwt.js';
// import * as BaseUserValidator from '../validators/BaseUserValidator.js';

// export const verifyEmail = asyncHandler(async (req, res) => {
//   const { token } = BaseUserValidator.verifyEmail(req);
//   const { userId } = decodePwdToken(token);

//   const verifiedUser = await BaseUserService.verifyUser({
//     _id: userId,
//     inputData: { emailVerified: true },
//   });

//   res.status(SUCCESS_CODES.OK).json(verifiedUser);
// });
