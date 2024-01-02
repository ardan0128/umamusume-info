export default function AptitudeModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen ? (
        <div>
          <div className="modal-background" onClick={onClose} />
          <div className="modal-container">
            <button type="button" onClick={onClose}>
              close
            </button>
            <div>ModalTest</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
