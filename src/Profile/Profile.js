import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Profile = (props) => {
  const myStyle = {
    color: "black",
    backgroundColor: "#f5e1c9",
    padding: "10px",
    fontFamily: "Arial",
    width: "18rem",
    textAlign: "center",
    marginTop: "100px",
  };
  return (
    <div>
      <Card style={myStyle}>
        {props.children}
        <Card.Body>
          <Card.Title style={{ fontSize: "30px", fontWeight: "bolder" }}>
            {props.user.fullName}
          </Card.Title>
          <Card.Text>{props.user.bio}</Card.Text>
          <Card.Title style={{ fontWeight: "bold" }}>
            Ma Profession est : <br />
            {props.user.profession}
          </Card.Title>
          <Button variant="secondary" onClick={props.handleName}>
            Show my Name
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
  }),
  handleName: PropTypes.func,
};

Profile.defaultProps = {
  user: {
    fullName: "Nom: Non defini",
    bio: "Bio: Non defini",
    profession: "Profession: Non defini",
  },
};
