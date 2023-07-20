import { useCallback } from 'react';
import { useSize } from '../../hooks/useSize';
import { Loader } from '../Loader';
import { Label, Radio } from '../inputs';
import { FlexColumn } from '../layout';
import { convertToTwoDecimals, getNumberOfIngredients } from '../../utils';
import { useIngredients } from '../../hooks/useIngredients';
import { Size } from '../../types';

export const SizeOptions = () => {
  const { sizes, selectedSize, setSelectedSize, loading } = useSize();
  const { setMaximumIngredientsPerSize } = useIngredients();

  const isChecked = useCallback((id: string) => Boolean(selectedSize === id), [selectedSize]);

  const selectSizeHandler = (size: Size) => {
    setSelectedSize(size.id);
    setMaximumIngredientsPerSize(getNumberOfIngredients(size.description).number);
  };

  const renderSizes = useCallback(() => {
    if (sizes) {
      return sizes.map((size) => (
        <Radio
          key={size.id}
          setChecked={() => selectSizeHandler(size)}
          checked={isChecked(size.id)}>
          <Label
            checked={isChecked(size.id)}
            extraText={getNumberOfIngredients(size.description).text}>
            {`${size.name} - ${size.currency}${convertToTwoDecimals(size.price)}`}
          </Label>
        </Radio>
      ));
    }
  }, [sizes, selectedSize]);

  return loading ? <Loader /> : <FlexColumn gap={15}>{renderSizes()}</FlexColumn>;
};
