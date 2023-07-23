'use client';

import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal isOpen onChange={() => {}} description="Test Desc" title="Test model">
        Test
      </Modal>
    </>
  );
};

export default ModalProvider;
