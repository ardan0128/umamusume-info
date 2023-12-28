import { useState } from 'react';
import AptitudeModal from '../components/AptitudeModal';

export default function ModalTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h1>Model Test</h1>
      <div>
        <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
          button
        </button>
        <AptitudeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
          <h1>Model Test</h1>
        </AptitudeModal>
      </div>
    </>
  );
}
