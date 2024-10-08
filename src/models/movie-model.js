import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  director: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  rentedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Movie = model("Movie", movieSchema);
export default Movie;
