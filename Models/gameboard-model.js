let gameposts = require("../Data/gameboard.json");
// const filename = "./Data/gameboard.json";
const helper = require("../Helpers/helper.js");

// All Post or Data On Game Board Page
function getPostsGameboard() {
  return new Promise((resolve, reject) => {
    if (gameposts.length === 0) {
      reject({
        message: " no database bawsque",
        status: 202,
      });
    }
    resolve(gameposts);
  });
}

// Post or Data On Game Board Page By Id
function getPostGameboard(id) {
  return new Promise((resolve, reject) => {
    helper
      .mustBeInArray(gameposts, id)
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}

module.exports = {
  getPostsGameboard,
  getPostGameboard,
};
