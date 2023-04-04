export default function validate(validator) {
  return (request) =>
    validator
      .transform(({ params, query, body, files, cookies }) => ({
        ...(!!params && params),
        ...(!!query && query),
        ...(!!body && body),
        ...(!!files && files), // Object from multer lib
        ...(!!cookies && cookies),
      }))
      .parse(request);
}
