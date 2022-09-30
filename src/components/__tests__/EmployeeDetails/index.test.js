import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from "../../../reducers";
import EmployeeDetails from "../../EmployeeDetails";

describe("<EmployeeDetails /> component ", () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  it("should return true", async () => {
    const value = true;
    expect(value).toBe(true);
  });

  it("should be defined", async () => {
    expect(<EmployeeDetails />).toBeDefined();
  });

  it("should match snapshot", async () => {
    const tree = render(
      <Provider store={store}>
        <EmployeeDetails />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
