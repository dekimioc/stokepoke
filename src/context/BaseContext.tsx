import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Base } from '../types';
import { baseDefaults } from '../defaults';

type BaseContentType = {
  bases: Base[];
  selectedBase: Base;
  setSelectedBase: (arg: Base) => void;
  loading: boolean;
  error: string;
  currentStep: number;
  setCurrentStep: (arg: number) => void;
  activeScreen: number;
  setActiveScreen: (arg: number) => void;
};

export const BaseContext = createContext<BaseContentType>({
  bases: [],
  selectedBase: baseDefaults,
  setSelectedBase: () => {},
  loading: false,
  error: '',
  currentStep: 1,
  setCurrentStep: () => {},
  activeScreen: 1,
  setActiveScreen: () => {},
});

export const BaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [bases, setBases] = useState<Base[]>([]);
  const [selectedBase, setSelectedBase] = useState<Base>(baseDefaults);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [activeScreen, setActiveScreen] = useState<number>(1);

  const getBases = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://fet.app.fsd.rs/api/bases', {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODk2ODg5NjgsImV4cCI6MTY5MDU1Mjk2OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiZGVraW1pb2NAZ21haWwuY29tIn0.vX95Gdm_2y-WB0_h2vcjTw9hYuCdWIy1iAc1bKtrRLEfy4nUS9eA-7bKkLr65xhlDQVIZKZyFliCaoPXHKRgEL8Mn5k2I26JdvOX7MTdWIcEd8dSKXu6dqKoSzxKWS22ZqXeLvVi8sK0hOgh1d1nIsogn3hwL3e_bHgI08g3GtpkyWEpiRasdkTOdntLW0JKUOpjG4rYFTK3NXLQlkKBskgbMdWA993MZc3t_uPOcwBJiY-0LPs_DXaBTnHL3K1iIoCiFzOscO5MWDNm9jTXkILOF_dGAWhgo5HRNZbts3r9bY5YhRGzPfGx7XTYCsN8nZS5A2hfr_zJpvHCxP2mxA',
        },
      });

      if (res) {
        setBases(res.data.data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError('Something went wrong!');
    }
  };

  useEffect(() => {
    getBases();
  }, []);

  return (
    <BaseContext.Provider
      value={{
        bases,
        selectedBase,
        setSelectedBase,
        loading,
        error,
        currentStep,
        setCurrentStep,
        activeScreen,
        setActiveScreen,
      }}>
      {children}
    </BaseContext.Provider>
  );
};
