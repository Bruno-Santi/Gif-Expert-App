import {
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";

export const AddCategory = ({
  addCategory,
}) => {
  const [inputValue, setInputValue] =
    useState();
  const [error, setError] =
    useState("");
  const handleChange = ({ target }) => {
    let { value } = target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setError("");
      addCategory(
        inputValue
          .trim()
          .toLowerCase()
          .replace(/\s\s+/g, " ")
      );
      setInputValue("");
    } else {
      setError(
        "Este campo es requerido"
      );
    }
  };

  useEffect(() => {}, [inputValue]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Buscar Gifs'
          onChange={handleChange}
          value={inputValue}
        />
      </form>
      {error ? (
        <p className='error'>{error}</p>
      ) : (
        ""
      )}
    </>
  );
};

AddCategory.propTypes = {
  addCategory:
    PropTypes.func.isRequired,
};
