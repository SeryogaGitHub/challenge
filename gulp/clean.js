const del = require('del');

// Повністю видаляємо папку dist

module.exports = function clean(cb) {
  return del('dist').then(() => {
    cb()
  })
};
