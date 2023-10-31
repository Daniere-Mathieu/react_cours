import { ReactNode } from "react";
import "./App.css";

function Modal({
  isOpen,
  content,
  onClose,
}: {
  isOpen: boolean;
  content: ReactNode;
  onClose: () => void;
  storedValue?: unknown;
}) {
  if (!isOpen) return null;
  return (
    <div>
      <div className="modal-overlay"></div>
      <div className="modal">
        <button onClick={onClose}>X</button>
        {content}
      </div>
    </div>
  );
}

export default Modal;
