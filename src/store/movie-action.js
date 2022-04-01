import { showNotification } from "./uiSlice";
import { resetMovies } from "./movieSlice";

export const fetchMovieData = (URL) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "loading",
        title: "Loading",
        message: "Movies data is loading",
      })
    );

    const getData = async () => {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Couldn't fetch data!");
      }
      const data = await response.json();

      return data;
    };
    try {
      const movieData = await getData();
      dispatch(resetMovies(movieData));
      dispatch(
        showNotification({
          status: "success",
          title: "success",
          message: "Movies data success",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error",
          message: "fetching movie data failed",
        })
      );
    }
  };
};
