import { createContext, useEffect, useState } from 'react';
import { Bowl } from '../types/types';
import axios from 'axios';

type BowlContextType = {
  bowls: Bowl[];
  loading: boolean;
  error: string;
  selectedBowl: string;
  setSelectedBowl: (arg: string) => void;
};

export const BowlContext = createContext<BowlContextType>({
  bowls: [],
  loading: false,
  error: '',
  selectedBowl: '',
  setSelectedBowl: function (arg: Bowl): void {
    throw new Error('Function not implemented.');
  },
});

export const BowlProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [selectedBowl, setSelectedBowl] = useState<Bowl>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [disabledContinueButton, setDisabledContinueButton] = useState<boolean>(false);

  console.log(selectedBowl, 'selected');
  // console.log(bowls, 'bowls');

  const getBowls = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://fet.app.fsd.rs/api/bowls', {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODk2ODg5NjgsImV4cCI6MTY5MDU1Mjk2OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiZGVraW1pb2NAZ21haWwuY29tIn0.vX95Gdm_2y-WB0_h2vcjTw9hYuCdWIy1iAc1bKtrRLEfy4nUS9eA-7bKkLr65xhlDQVIZKZyFliCaoPXHKRgEL8Mn5k2I26JdvOX7MTdWIcEd8dSKXu6dqKoSzxKWS22ZqXeLvVi8sK0hOgh1d1nIsogn3hwL3e_bHgI08g3GtpkyWEpiRasdkTOdntLW0JKUOpjG4rYFTK3NXLQlkKBskgbMdWA993MZc3t_uPOcwBJiY-0LPs_DXaBTnHL3K1iIoCiFzOscO5MWDNm9jTXkILOF_dGAWhgo5HRNZbts3r9bY5YhRGzPfGx7XTYCsN8nZS5A2hfr_zJpvHCxP2mxA',
        },
      });

      if (res) {
        setBowls(res.data.data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e, 'error');
      setError('Something went wrong!');
    }
  };

  const selectBowl = (bowl: Bowl) => {
    setSelectedBowl(bowl);
  };

  useEffect(() => {
    getBowls();
  }, []);

  return (
    <BowlContext.Provider value={{ bowls, loading, error, selectedBowl, setSelectedBowl }}>
      {children}
    </BowlContext.Provider>
  );
};
