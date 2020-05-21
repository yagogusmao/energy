import React from "react";
import InputFloat from "react-floating-input";
import styled from "styled-components";

const InputContainer = styled.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  transition: all .4s;
  label {
    font-weight: 400;
  }
  .styles_float-group__bCv9q {
    margin-top: 0px;
    margin-left: 0px;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputErroMenssage = styled.label`
  color: black;
  font-size: 12px;
  margin-top: 5px;
  animation: fadeIn 0.8s;
`;

function getColor(color) {
  return color === undefined ? "black" : color;
}
const Input = props => {
  /* props para mudar cor do input
   * color='#999' ->  quando o input não foi selecionado
   * activeColor='#007bFF' -> quando o input for selecionado
   */
  let {
    errorMessage,
    invalid,
    type,
    activeColor,
    value,
    onChange,
    onKeyPress,
    label,
    disabled,
    color,
    name,
    onFocus,
    onBlur,

  } = props;
  return (
    <InputContainer>
      <InputFloat
        name={name}
        color={invalid ? "#F35B5D" : getColor(color)}
        type={type}
        activeColor={activeColor ? activeColor : "black"}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={label}
        disabled={disabled}
        onFocus={onFocus !== undefined ? () => onFocus(name) : onFocus}
        onBlur={onBlur !== undefined ? () => onBlur() : onBlur}
      />
      {invalid && (
        <InputErroMenssage>
          {errorMessage ? errorMessage : "Campo obrigatório"}
        </InputErroMenssage>
      )}
    </InputContainer>
  );
};
export default Input;