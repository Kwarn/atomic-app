import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

const ButtonComponent = ({title, disabled, onClick}) => (
  <Button
    variant="contained"
    color="primary"
    disabled={disabled}
    onClick={onClick}
    size="medium"
  >
    {title}
  </Button>
);

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  disabled: false,
};

export default ButtonComponent;