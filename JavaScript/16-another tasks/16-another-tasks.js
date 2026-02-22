const newTask = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
};

// Добавляем новые задачи
const addTask = {
  name: "Сходить в магазин",
  description: "Сделать покупки",
  id: 2,
  order: 2,
};

const addTask2 = {
  name: "Приготовить еду",
  description: "Пожарить картошку",
  id: 3,
  order: 3,
};
newTask.tasks.push(addTask, addTask2);
console.log(newTask);

// Удаляем задачи по id
const deleteId = 2;
const foundTask = newTask.tasks.find((task) => task.id === deleteId);
console.log(foundTask);
const updateList = newTask.tasks.filter((task) => task.id !== deleteId);
console.log(updateList);

// Обновляем имя или приоритет по id
const updateName = newTask.tasks.find((task) => task.id === 3);
if (updateName) {
  updateName.name = "Помыть машину";
  updateName.description = "Сделать химчистку";
}

console.log(newTask);

// Сортируем по приоритету
const sortList = [...newTask.tasks].sort((a, b) => a.priority - b.priority);
console.log(sortList);
