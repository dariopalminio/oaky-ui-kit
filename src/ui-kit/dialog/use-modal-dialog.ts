import { useState } from 'react';

/**
 *  useModalDialog Custom hook
 */
export const useModalDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function toggle() {
    setIsDialogOpen(!isDialogOpen);
  }

  return {
    isDialogOpen,
    toggle,
  }
};

export default useModalDialog;
