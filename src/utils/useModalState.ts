import { useState } from 'react';

const useModalState = (initialValue: boolean = false) => {
  const [modalState, setModalState] = useState<boolean>(initialValue);

  const handleModalClose = () => {
    setModalState(false);
  };

  const handleModalOpen = () => {
    setModalState(true);
  };

  return [modalState, handleModalClose, handleModalOpen] as const;
};
export default useModalState;
