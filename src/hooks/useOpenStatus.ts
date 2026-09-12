import { useState, useEffect } from 'react';
import { checkIsOpenNow } from '../data/business';

export function useOpenStatus() {
  const [status, setStatus] = useState(() => checkIsOpenNow());

  useEffect(() => {
    // Recheck immediately and every 60 seconds
    const interval = setInterval(() => {
      setStatus(checkIsOpenNow());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return status;
}
