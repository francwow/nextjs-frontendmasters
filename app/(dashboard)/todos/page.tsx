import HomeBtn from '@/components/HomeBtn';
import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000));
  const todos = await getData();
  console.log(todos);

  return (
    <div>
      /Todos
      <TodoList todos={todos} />
      <HomeBtn name="home" href={'/'} />
    </div>
  );
};

export default TodosPage;
