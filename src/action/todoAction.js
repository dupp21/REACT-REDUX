import { FETCH_DATA } from "./types";
import axios from "axios";

export const fetchData = () => dispatch => {
  // dispatch({
  //   type: FETCH_DATA,
  //   payload: [
  //     {
  //       description: "Learn Redux",
  //       done: false
  //     }
  //   ]
  // });
  axios
    .get("https://haekal-todo-list-api.herokuapp.com/todos")
    .then(res =>
      dispatch({
        type: FETCH_DATA,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
