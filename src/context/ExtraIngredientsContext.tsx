import React, { useEffect, createContext, useState } from 'react';
import { ExtraIngredient } from '../types';
import axios from 'axios';
import { extraIngredientsDefaults } from '../defaults';

type ExtraIngredientsContextType = {
  extraIngredients: ExtraIngredient[];
  selectedExtraIngredients: ExtraIngredient[];
  setSelectedExtraIngredients: (arg: ExtraIngredient[]) => void;
  loading: boolean;
  error: string;
};

export const ExtraIngredientsContext = createContext<ExtraIngredientsContextType>({
  extraIngredients: extraIngredientsDefaults,
  selectedExtraIngredients: [],
  setSelectedExtraIngredients: () => {},
  loading: false,
  error: '',
});

export const ExtraIngredientsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [extraIngredients, setExtraIngredients] =
    useState<ExtraIngredient[]>(extraIngredientsDefaults);
  const [selectedExtraIngredients, setSelectedExtraIngredients] = useState<ExtraIngredient[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getExtraIngredients = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://fet.app.fsd.rs/api/extra_ingredients', {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODk2ODg5NjgsImV4cCI6MTY5MDU1Mjk2OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiZGVraW1pb2NAZ21haWwuY29tIn0.vX95Gdm_2y-WB0_h2vcjTw9hYuCdWIy1iAc1bKtrRLEfy4nUS9eA-7bKkLr65xhlDQVIZKZyFliCaoPXHKRgEL8Mn5k2I26JdvOX7MTdWIcEd8dSKXu6dqKoSzxKWS22ZqXeLvVi8sK0hOgh1d1nIsogn3hwL3e_bHgI08g3GtpkyWEpiRasdkTOdntLW0JKUOpjG4rYFTK3NXLQlkKBskgbMdWA993MZc3t_uPOcwBJiY-0LPs_DXaBTnHL3K1iIoCiFzOscO5MWDNm9jTXkILOF_dGAWhgo5HRNZbts3r9bY5YhRGzPfGx7XTYCsN8nZS5A2hfr_zJpvHCxP2mxA',
        },
      });

      if (res) {
        setExtraIngredients(res.data.data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError('Something went wrong!');
    }
  };

  useEffect(() => {
    getExtraIngredients();
  }, []);

  return (
    <ExtraIngredientsContext.Provider
      value={{
        extraIngredients,
        selectedExtraIngredients,
        setSelectedExtraIngredients,
        loading,
        error,
      }}>
      {children}
    </ExtraIngredientsContext.Provider>
  );
};
