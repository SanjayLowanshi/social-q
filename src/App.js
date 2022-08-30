import logo from "./logo.svg";
import "./App.less";
import {
  Button,
  DatePicker,
  Input,
  Layout,
  Progress,
  Slider,
  Space,
  Spin,
} from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>The Social Question</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
