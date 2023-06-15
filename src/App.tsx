import TodoContextprovider from "./store/todos.context";
import AuthContextProvider from "./components/AuthContext";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <AuthContextProvider>
      <TodoContextprovider>
        <LoginForm />
      </TodoContextprovider>
    </AuthContextProvider>
  );
}

export default App;
