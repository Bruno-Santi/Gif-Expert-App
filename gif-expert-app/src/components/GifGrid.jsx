import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
export const GifGrid = ({
  category,
  removeItem,
}) => {
  getGifs(category);
  return (
    <div key={category}>
      <span
        onClick={() =>
          removeItem(category)
        }
        value={category}
      >
        X
      </span>
      <h1 className='list'>
        {category
          .charAt(0)
          .toUpperCase() +
          category.slice(1)}
      </h1>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};
