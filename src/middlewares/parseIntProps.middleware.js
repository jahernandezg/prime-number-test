/**
 * Adds two params.
 * @param {Array} props is array of props.
 * @param {string} segment find in req segment (params, body, query, head, etc).
 * @return {boolean} determine is prime or not
 */
function parseIntProps(props, segment) {
  return (req, _res, next) => {
    try {
      if (Array.isArray(props)) {
        props.forEach((prop) => {
          req[segment][prop] = parseInt(req[segment][prop]);
          // console.log(req[segment][prop]);
        });
      }
    } catch (error) {
      // console.log(error);
    }
    next();
  };
}

module.exports = parseIntProps;
