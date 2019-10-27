var db = require('../helpers/db');

module.exports = {
  getAllUsers
};

function getAllUsers(callback) {
  db.getAllUsers(
    function(res) {
      return callback({
        success: true,
        message: 'Successfully get all users.',
        body: res
      });
    },
    function(err) {
      return callback({ success: false, message: 'You cannot get all users.' });
    }
  );
}
