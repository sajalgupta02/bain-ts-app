import "./App.css";
import GoalDashboard from "./components/GoalsDashboard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootComp from "./components/RootComp";
import CreateGoalHome from "./components/createGoal/CreateGoalHome";
import CreatePerformanceGoal from "./components/createGoal/goalCreateWays/CreatePerformanceGoal";
import CreateGoalFromLibrary from "./components/createGoal/goalCreateWays/CreateGoalFromLibrary";
import CreateGoalFromPlan from "./components/createGoal/goalCreateWays/CreateGoalFromPlan";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComp />}>
        <Route index element={<GoalDashboard />}></Route>
        <Route path="/createGoal" element={<CreateGoalHome />}></Route>
        <Route
          path="/createGoal/createPerformanceGoal"
          element={<CreatePerformanceGoal />}
        ></Route>
        <Route
          path="/createGoal/createFromLibrary"
          element={<CreateGoalFromLibrary />}
        ></Route>
          <Route
          path="/createGoal/createFromPlan"
          element={<CreateGoalFromPlan />}
        ></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
