export default function AptitudeModal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen ? (
        <div>
          <div onClick={onClose}>close</div>
          {children}
        </div>
      ) : null}
    </>
  );
}
