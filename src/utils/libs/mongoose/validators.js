export const arrayLimit = (limit) => ({
  validator: (arr) => arr.length <= limit,
  message: `{PATH} exceeds the limit of ${limit} items`,
});

export const emptyArray = {
  validator: (arr) => arr.length,
  message: '{PATH} property cannot be a empty array',
};

export const positiveInteger = {
  validator: (value) => Number.isInteger(value) && value >= 0,
  message: '{PATH} needs to be a positive integer',
};

export const isUrl = {
  validator: (value) => {
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    return urlRegex.test(value);
  },
  message: '{PATH} is not a valide url',
};
