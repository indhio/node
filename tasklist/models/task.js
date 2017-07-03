var tasks = {
  data: [
    {_id: 1, title: 'Tarefa', status: 1, created_at: new Date()},
    {_id: 2, title: 'Tarefa', status: 0, created_at: new Date()}
  ]
}

function all () {
  return tasks
}

function save (object) {
  object._id = tasks.data[tasks.data.length - 1]._id + 1
  tasks.data.push(object)
}

function update (id, task) {
  var index = tasks.data.findIndex(function (task) {
    return task._id == id
  })

  tasks.data[index].title = task.title
  tasks.data[index].status = task.status

  return
}

function remove (id) {
  tasks.data = tasks.data.filter(function (task) {
    return task._id != id
  })

  return
}

function find (id) {
  return tasks.data.filter(function (task) {
    return task._id == id
  })[0]
}

module.exports = {all, find, save, update, remove}
