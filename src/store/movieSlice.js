import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { moviesList: null },
  reducers: {
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import getMovies from "./api";

// First, create the thunk
// const fetchMoviesData = createAsyncThunk(
//   "fetchData",
//   async ({ moviesType, pageNo }) => {
//     const response = await getMovies(moviesType, pageNo);
//     return response.data;
//   }
// );

// const initialState = {
//   moviesList: [],
//   loading: "idle",
// };

// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload);
//     });
//   },
// });
