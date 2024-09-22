import React from "react";
import "../styles/Comentario.css";
import PropTypes from "prop-types";

const Comentario = (props) => {
  return (
    <div className="teste">
      <div className="user">User: {props.userId}</div>
      <div className="idComment">ID Comment: {props.idComment}</div>
      <div className="titulo">Titulo: {props.titulo}</div>
      <div className="corpo">{props.corpo}</div>
    </div>
  );
};

Comentario.propTypes = {
  userId: PropTypes.number.isRequired,
  idComment: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  corpo: PropTypes.string.isRequired,
};

Comentario.defaultProps = {
  userId: "Anonymous",
  idComment: "No comment",
  titulo: "No title",
  corpo: "No content",
};

export default Comentario;
