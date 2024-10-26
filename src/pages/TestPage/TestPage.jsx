import "./TestPage.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import Modal from "react-modal";
import { PopUpModal } from "../../components/PopUpModal/PopUpModal";
import LoadingPage from "../LoadingPage/LoadingPage";

const TestPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenPostModal = () => {
    setModalOpen(true);
  };

  const handleClosePostModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
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
