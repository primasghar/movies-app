import { setStatus } from "./uiSlice";
import { setMovies } from "./movieSlice";

export const fetchMovies = (URL) => {
  return async (dispatch) => {
    dispatch(
      setStatus({
        status: "loading",
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
      dispatch(setMovies(movieData));
      dispatch(
        setStatus({
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        setStatus({
          status: "error",
        })
      );
    }
  };
};
