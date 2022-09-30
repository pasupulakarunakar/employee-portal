import { render } from "@testing-library/react";
import Login from "../../Login";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from "../../../reducers";

describe("<Login /> component ", () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  it("should return true", async () => {
    const value = true;
    expect(value).toBe(true);
  });

  it("should be defined", async () => {
    expect(<Login />).toBeDefined();
  });

  it("should match snapshot", async () => {
    const tree = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
