import { ConfigProvider } from "antd";
import "./App.css";
import RouteApp from "./route";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Roboto",
        },
      }}
    >
      <RouteApp />
    </ConfigProvider>
  );
}

export default App;
