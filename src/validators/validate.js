export default function validate(validator) {
  return (request) =>
    validator
      .transform(({ params, query, body, file, files, cookies }) => ({
        ...(!!params && params),
        ...(!!query && query),
        ...(!!body && body),
        ...(!!file && file), // Object from multer lib
        ...(!!files && files), // Object from multer lib
        ...(!!cookies && cookies),
      }))
      .parse(request);
}
