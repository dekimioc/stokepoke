import React, { useEffect, useMemo, useState } from 'react';
import { createContext } from 'react';
import { Ingredients, Sauce } from '../types';
import axios from 'axios';

type IngredientsContextType = {
  ingredients: Ingredients[];
  selectedIngredients: string[];
  setSelectedIngredients: (arg: string[]) => void;
  loading: boolean;
  error: string;
  maximumIngredientsPerSize: number;
  setMaximumIngredientsPerSize: (arg: number) => void;
  isReachedMaxNumbersOfIngrediants: boolean;
};

export const IngredientsContext = createContext<IngredientsContextType>({
  ingredients: [],
  selectedIngredients: [],
  setSelectedIngredients: () => {},
  loading: false,
  error: '',
  maximumIngredientsPerSize: 0,
  setMaximumIngredientsPerSize: () => {},
  isReachedMaxNumbersOfIngrediants: false,
});

export const IngredientsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [ingredients, setIngredients] = useState<Sauce[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [maximumIngredientsPerSize, setMaximumIngredientsPerSize] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getIngredients = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://fet.app.fsd.rs/api/ingredients', {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODk2ODg5NjgsImV4cCI6MTY5MDU1Mjk2OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiZGVraW1pb2NAZ21haWwuY29tIn0.vX95Gdm_2y-WB0_h2vcjTw9hYuCdWIy1iAc1bKtrRLEfy4nUS9eA-7bKkLr65xhlDQVIZKZyFliCaoPXHKRgEL8Mn5k2I26JdvOX7MTdWIcEd8dSKXu6dqKoSzxKWS22ZqXeLvVi8sK0hOgh1d1nIsogn3hwL3e_bHgI08g3GtpkyWEpiRasdkTOdntLW0JKUOpjG4rYFTK3NXLQlkKBskgbMdWA993MZc3t_uPOcwBJiY-0LPs_DXaBTnHL3K1iIoCiFzOscO5MWDNm9jTXkILOF_dGAWhgo5HRNZbts3r9bY5YhRGzPfGx7XTYCsN8nZS5A2hfr_zJpvHCxP2mxA',
        },
      });

      if (res) {
        setIngredients(res.data.data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError('Something went wrong!');
    }
  };

  const removeIngredientsByMaximumNumber = () => {
    if (selectedIngredients.length > maximumIngredientsPerSize) {
      setSelectedIngredients((prev) => prev.slice(0, maximumIngredientsPerSize));
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const isReachedMaxNumbersOfIngrediants = useMemo(
    () => Boolean(selectedIngredients.length >= maximumIngredientsPerSize),
    [selectedIngredients, maximumIngredientsPerSize]
  );

  useEffect(() => {
    removeIngredientsByMaximumNumber();
  }, [maximumIngredientsPerSize]);

  return (
    <IngredientsContext.Provider
      value={{
        ingredients,
        selectedIngredients,
        setSelectedIngredients,
        loading,
        error,
        maximumIngredientsPerSize,
        setMaximumIngredientsPerSize,
        isReachedMaxNumbersOfIngrediants,
      }}>
      {children}
    </IngredientsContext.Provider>
  );
};
