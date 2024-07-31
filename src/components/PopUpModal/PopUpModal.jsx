import './PopUpModal.scss';
import Button from '../Button/Button';
import ExitButton from '../../assets/images/exit.svg';
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
                        <div className="popUpModal__buttonCancel">
                            <Button text={closeButtonName} className="popUpModal__close-btn" eventListener={closeButtonAction}>
                                <img className="close-icon" src={ExitButton} />
                            </Button>
                        </div>
                        <div className="popUpModal__container">

                            <div className="popUpModal__header">
                                <div className="bodyTitleOutput">
                                    {title.icon && <img className="iconBodyTitle" alt="" src={title.icon} />}
                                    {title.title && <div className="titleBodyTitle">{title.title}</div>}
                                </div>
                            </div>
                            <div className="popUpModal__container__children">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export { PopUpModal, PopUpStyle };

