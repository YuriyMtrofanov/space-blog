// import React from "react";
// import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
// import { Button, Modal } from "react-bootstrap-modal";

const ModalCard = ({ active, setActive }) => {
    // const history = useHistory();
    // const handleClick = () => {
    //     setActive(false);
    //     history.push(`/`);
    // };
    return (
        null
        // <Modal show={active} onHide={ () => { setActive(false); } }>
        //     {/* <Modal.Header>
        //         {/* <Modal.Title>Данные сохранены</Modal.Title> */}
        //     {/* </Modal.Header> */}
        //     {/* <Modal.Footer> */}
        //     <Button variant="primary" onClick={handleClick}>
        //         Ok
        //     </Button>
        //     {/* </Modal.Footer> */}
        // </Modal>
    );
};

ModalCard.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func
};

export default ModalCard;
