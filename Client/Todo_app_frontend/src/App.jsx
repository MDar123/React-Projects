import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [title1, settitle] = useState("");
  const [content1, setcontent] = useState("");
  const [completed1, setcompleted] = useState(false);
  const [TodoListArray, setTodoListArray] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Add data (Create)
  async function submitForm(e) {
    e.preventDefault();
    const data = {
      title: title1,
      content: content1,
      isCompleted: completed1,
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/TodoApp/AddTodo/",
      data
    );
    console.log(response.data);
    fetchData();
  }

  // Get data (Read)
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/TodoApp/GetAllTodos/"
      );
      setTodoListArray([...response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  // Update data (Update)
  const updateData = async (id, e) => {
    e.preventDefault();
    const data = {
      title: title1,
      content: content1,
      isCompleted: completed1,
    };
    await axios.put(`http://127.0.0.1:8000/TodoApp/EditTodo/${id}/`, data);
    closeModal();
    settitle("");
    setcontent("");
    setcompleted(false);
    fetchData();
  };

  // edit function (Update)
  async function onEdit(data) {
    try {
      openModal(data);
    } catch (err) {
      console.log(err);
    }
  }

  // Delete method (Delete)
  async function onDelete(id) {
    try {
      await axios.delete(`http://127.0.0.1:8000/TodoApp/DeleteTodo/${id}/`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    fetchData();
    console.log("useEffect is called");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Todo App For Your Better Lifestyle</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form action="" onSubmit={submitForm} className="space-y-4">
            <input
              value={title1}
              type="text"
              placeholder="Enter your title"
              onChange={(e) => settitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={content1}
              type="text"
              placeholder="Enter your Content"
              onChange={(e) => setcontent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={completed1}
                onChange={(e) => {
                  setcompleted(e.target.checked);
                }}
                className="mr-2 h-5 w-5 text-blue-600"
              />
              <label htmlFor="checkbox" className="text-gray-700">Completed</label>
            </div>
            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">Add Task</button>
          </form>
        </div>
        <div className="space-y-4">
          {TodoListArray.length > 0
            ? TodoListArray.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h5 className="text-red-600 text-sm">Id : {value.id}</h5>
                  <h3 className="text-xl font-semibold text-gray-800">Title: {value.title}</h3>
                  <h3 className="text-lg text-gray-600">Content: {value.content}</h3>
                  <h3 className="text-lg text-gray-600">
                    Completed Status:{" "}
                    {String(
                      value.isCompleted == true
                        ? "Task is Completed"
                        : "Task is not completed"
                    )}
                  </h3>
                  <div className="mt-4 space-x-2">
                    <button
                      style={{ padding: "10", color: "blueviolet" }}
                      onClick={() => onEdit(value)}
                      className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      style={{ padding: "10", color: "blueviolet" }}
                      onClick={() => onDelete(value.id)}
                      className="bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-96">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Edit Task</h3>
            <form onSubmit={(e) => updateData(selectedTask.id, e)} className="space-y-4">
              <input
                type="text"
                value={title1}
                onChange={(e) => settitle(e.target.value)}
                placeholder="Edit Title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={content1}
                onChange={(e) => setcontent(e.target.value)}
                placeholder="Edit Content"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={completed1}
                  onChange={(e) => {
                    setcompleted(e.target.checked);
                  }}
                  className="mr-2 h-5 w-5 text-blue-600"
                />
                <label className="text-gray-700">Completed</label>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition duration-300"
                >
                  Save
                </button>
                <button
                  onClick={closeModal}
                  className="bg-slate-400 text-white py-2 px-4 rounded-md hover:bg-slate-500 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

