import jwt from 'jsonwebtoken';

export function signSessionJwts(user) {
  const accessToken = jwt.sign(
    {
      user,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: +process.env.ACCESS_TOKEN_EXPIRE } // in seconds
  );
  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: +process.env.REFRESH_TOKEN_EXPIRE } // in seconds
  );

  return { accessToken, refreshToken };
}

export function signJwts(user) {
  const accessToken = jwt.sign(
    {
      user,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: +process.env.ACCESS_TOKEN_EXPIRE } // in seconds
  );
  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: +process.env.REFRESH_TOKEN_EXPIRE } // in seconds
  );

  return { accessToken, refreshToken };
}

export function pwdJwts(_id) {
  const passwordToken = jwt.sign(
    {
      _id,
    },
    process.env.PASSWORD_TOKEN_SECRET,
    { expiresIn: +process.env.PASSWORD_TOKEN_EXPIRE } // in seconds
  );
  return { passwordToken };
}

export function decodeRefreshToken(token) {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
}

export function decodeAccessToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}
export function decodePwdToken(token) {
  return jwt.verify(token, process.env.PASSWORD_TOKEN_SECRET);
}

export function signConfirmEmailJwt(userId) {
  const emailToken = jwt.sign(
    {
      userId,
    },
    process.env.EMAIL_TOKEN_SECRET,
    { expiresIn: +process.env.EMAIL_TOKEN_EXPIRE } // in seconds
  );
  return emailToken;
}

export function decodeConfirmEmailToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.EMAIL_TOKEN_SECRET, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
}
