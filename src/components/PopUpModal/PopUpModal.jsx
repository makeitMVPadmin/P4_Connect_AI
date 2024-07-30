import './PopUpModal.scss';
import Button from '../Button/Button';

//to be passed in to the style prop of Modal component
const PopUpStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(217, 217, 217, 0.85)'
    },
    content: {
        position: 'absolute',
        top: '20%',
        left: '35%',
        right: '35%',
        bottom: '10%',
        width: '500px',
        height: '50%',
        border: 'none',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '24px',
        outline: 'none',
        padding: '10px'

    }
};

const PopUpModal = ({ title, closeButtonAction, closeButtonName, children }) => {
    return (
        <>
            <div className="modal">
                <div className="content">
                    <div className="popUpModal">
                        <div className="header">
                            <div className="bodyTitleOutput">
                                {title.icon && <img className="iconBodyTitle" alt="" src={title.icon} />}
                                <div className="titleBodyTitle">{title.title}</div>
                            </div>
                        </div>
                        <div className="children">
                            {children}
                        </div>
                        {closeButtonAction &&
                        <div className="buttonCancel">
                            <Button className="close-btn" onClick={closeButtonAction}>
                                {closeButtonName}
                            </Button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};


export { PopUpModal, PopUpStyle };

