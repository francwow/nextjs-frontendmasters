import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  // client components are still rendered from the server at first. They are replaced with the
  // client version once the page loads the required javascript.
  // console.log(window.localStorage);
  // this code runs fine on the browser, but the server throws an error becouse there is no
  // "window" object on the server.

  return (
    <div>
      <form className="flex items-center justify-center" action={newTodo}>
        <input
          className="block outline-none text-black p-2 text-lg"
          type="text"
          id="text"
          name="content"
        />
        <label htmlFor="text"></label>
        <button
          className="p-2 border-2 m-2 rounded-sm bg-white text-black font-[700]"
          type="submit"
        >
          new todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
