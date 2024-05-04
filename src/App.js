import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import RouteApp from "./route";

function App() {
  const queryClient = new QueryClient();
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Roboto",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouteApp />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
