import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTutorial } from "../actions/tutorials";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    nombre: "",
    duracion: "",
    link: "",
    idTipo: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    const { id, nombre, duracion, link, idTipo } = tutorial;

    dispatch(createTutorial(id, nombre, duracion, link, idTipo))
      .then(data => {
        setTutorial({
          id: data.id,
          nombre: data.nombre,
          duracion: data.duracion,
          link: data.link,
          idTipo: data.idTipo,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Nombre Pelicula</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              required
              value={tutorial.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Duracion</label>
            <input
              type="text"
              className="form-control"
              id="duracion"
              required
              value={tutorial.duracion}
              onChange={handleInputChange}
              name="duracion"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Link de acceso a la pelicula</label>
            <input
              type="text"
              className="form-control"
              id="link"
              required
              value={tutorial.link}
              onChange={handleInputChange}
              name="link"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Categoria</label>
            <input
              type="text"
              className="form-control"
              id="idTipo"
              required
              value={tutorial.idTipo}
              onChange={handleInputChange}
              name="idTipo"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
