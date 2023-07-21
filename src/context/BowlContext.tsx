import { createContext, useEffect, useState } from 'react';
import { Bowl } from '../types';
import axios from 'axios';

const bowlDefaults = {
  id: '',
  name: '',
  description: '',
  image: {
    id: 0,
  },
  imagePath: '',
};
type BowlContextType = {
  bowls: Bowl[];
  loading: boolean;
  error: string;
  selectedBowl: Bowl;
  setSelectedBowl: (arg: Bowl) => void;
};

export const BowlContext = createContext<BowlContextType>({
  bowls: [],
  loading: false,
  error: '',
  selectedBowl: bowlDefaults,
  setSelectedBowl: () => {},
});

export const BowlProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [selectedBowl, setSelectedBowl] = useState<Bowl>(bowlDefaults);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [disabledContinueButton, setDisabledContinueButton] = useState<boolean>(false);

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
      setError('Something went wrong!');
    }
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
