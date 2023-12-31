import React, { useEffect, useState, createContext } from 'react';
import { Sauce } from '../types';
import axios from 'axios';
import { sauceDefaults } from '../defaults';

type SauceContextType = {
  sauces: Sauce[];
  selectedSauce: Sauce;
  setSelectedSauce: (arg: Sauce) => void;
  loading: boolean;
  error: string;
};

export const SauceContext = createContext<SauceContextType>({
  sauces: [],
  selectedSauce: sauceDefaults,
  setSelectedSauce: () => {},
  loading: false,
  error: '',
});

export const SauceProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [sauces, setSauces] = useState<Sauce[]>([]);
  const [selectedSauce, setSelectedSauce] = useState<Sauce>(sauceDefaults);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getSauces = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://fet.app.fsd.rs/api/sauces', {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODk2ODg5NjgsImV4cCI6MTY5MDU1Mjk2OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiZGVraW1pb2NAZ21haWwuY29tIn0.vX95Gdm_2y-WB0_h2vcjTw9hYuCdWIy1iAc1bKtrRLEfy4nUS9eA-7bKkLr65xhlDQVIZKZyFliCaoPXHKRgEL8Mn5k2I26JdvOX7MTdWIcEd8dSKXu6dqKoSzxKWS22ZqXeLvVi8sK0hOgh1d1nIsogn3hwL3e_bHgI08g3GtpkyWEpiRasdkTOdntLW0JKUOpjG4rYFTK3NXLQlkKBskgbMdWA993MZc3t_uPOcwBJiY-0LPs_DXaBTnHL3K1iIoCiFzOscO5MWDNm9jTXkILOF_dGAWhgo5HRNZbts3r9bY5YhRGzPfGx7XTYCsN8nZS5A2hfr_zJpvHCxP2mxA',
        },
      });

      if (res) {
        setSauces(res.data.data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError('Something went wrong!');
    }
  };

  useEffect(() => {
    getSauces();
  }, []);

  return (
    <SauceContext.Provider value={{ sauces, selectedSauce, setSelectedSauce, loading, error }}>
      {children}
    </SauceContext.Provider>
  );
};
