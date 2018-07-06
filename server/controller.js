const lists = {
  'To Do List': []
};

module.exports = {
  fetch: (req, res) => {
    const {listName} = req.query;
    if (listName in lists) {
      res.status(200).send(lists[listName]); // instead of doing response.end
    } else {
      res.status(404).send('List not found');
    }
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    lists[listName].push(todo);
    res.status(201).send(lists[listName]);
  }, 
  delete: (req, res) => {
    const {index, listName} = req.query;
    lists[listName].splice(+index, 1);
    res.status(202).send(lists[listName]);
  }
}