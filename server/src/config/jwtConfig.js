const jwtConfig = {
  access: {
    expiresIn: `${1000 * 60 * 60 * 24 * 3}`,
  },
  refresh: {
    expiresIn: `${1000 * 60 * 60 * 24 * 7}`,
  },
};

module.exports = jwtConfig;
