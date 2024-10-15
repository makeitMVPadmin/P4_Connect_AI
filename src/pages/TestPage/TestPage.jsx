import "./TestPage.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import ListWithCheckbox from "../../components/ListWithCheckbox/ListWithCheckbox";
import DropdownCheckbox from "../../components/DropdownCheckbox/DropdownCheckbox";
import PromptPage from "../PromptPage/PromptPage";
import NoMatch from "../../components/NoMatch/NoMatch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Modal from '@mui/material/Modal';
import { useState } from "react";
import Modal from "react-modal";
import { PopUpModal, PopUpStyle } from "../../components/PopUpModal/PopUpModal";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import ChallengePage from "../../components/ChallengePage/ChallengePage";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TestPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenPostModal = () => {
    setModalOpen(true);
  };

  const handleClosePostModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      {/* <Dropdown />
      <DropdownCheckbox /> */}
      {/* <ListWithCheckbox /> */}
      {/* <PromptPage />
      <NoMatch /> */}
      <LoadingPage />
      <Modal
        id="promptpage__linkedinpost-modal"
        isOpen={isModalOpen}
        onRequestClose={handleClosePostModal}
        ariaHideApp={false}
        className="modalStyle"
        overlayClassName="modalOverlay"
        shouldCloseOnOverlayClick={false}
      >
        <>
          <PopUpModal
            title={{ title: "goal breakdown" }}
            closeButtonName="Close"
          >
            {/* <ErrorMessageAlert>
          </ErrorMessageAlert> */}
            hello this is the goal breakdown
            <Button
              className="successMessage__linkedin-btn"
              onClick={handleClosePostModal}
            >
              Close
            </Button>
          </PopUpModal>
        </>
      </Modal>
      <Button className="promptpage__post-btn" onClick={handleOpenPostModal}>
        goal
      </Button>

    </div>
  );
};

export default TestPage;
