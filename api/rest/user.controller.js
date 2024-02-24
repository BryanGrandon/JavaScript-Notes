// req => Request, res => Response

const User = {
  get: (req, res) => {
    res.status(200).send("This is an element");
  },
  list: (req, res) => {
    res.status(200).send("Hello");
  },
  create: (req, res) => {
    res.status(201).send("Create");
  },
  update: (req, res) => {
    res.status(204).send("Update");
  },
  destroy: (req, res) => {
    res.status(204).send("Delete");
  },
};

module.exports = User;
