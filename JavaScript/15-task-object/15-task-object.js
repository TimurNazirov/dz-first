let ToDoList = [
  {
    title: "Помыть посуду",
    id: 1,
    priority: 1,
  },
];
// Добавляем новы задачи
const addTask = {
  title: "Сходить в магазин",
  id: 2,
  priority: 2,
};

const addTask2 = {
  title: "Приготовить еду",
  id: 3,
  priority: 3,
};
ToDoList.push(addTask, addTask2);
console.log(ToDoList);

// Удаляем задачи по id
const deleteId = 2;
const foundTask = ToDoList.find((task) => task.id === deleteId);
console.log(foundTask);
const updateList = ToDoList.filter((task) => task.id !== deleteId);
console.log(updateList);

// Обновляем имя или приоритет по id
const updateName = ToDoList.find((task) => task.id === 3);
if (updateName) {
  updateName.title = "Помыть машину";
}
console.log(ToDoList);

// Сортируем по приоритету
const sortList = [...ToDoList].sort((a, b) => a.priority - b.priority);
console.log(sortList);
