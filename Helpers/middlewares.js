function mustBeInteger(req, res, next) {
  const id = req.params.id;

  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: "Check id, Integer Please!" });
  } else {
    next();
  }
}

function checkFieldsPost(req, res, next) {
  const { avatar, name, sex, jobs, comment } = req.body;

  if (avatar && name && sex && jobs && comment) {
    next();
  } else {
    res.status(400).json({ message: "Form field not pakem Gaess" });
  }
}

module.exports = {
  mustBeInteger,
  checkFieldsPost,
};
