import React, { useCallback, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { ISelectOption } from '../../../types/common';
import Arrow from '../../icons/Arrow';

interface ISelectProps {
  options: ISelectOption[];
  selectedOption?: ISelectOption | null;
  onChange?: (option: ISelectOption) => void;
}

const Select: React.FC<ISelectProps> = ({ options, onChange, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<View>(null);

  const handleToggle = useCallback((): void => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleChange = useCallback(
    (option: ISelectOption): void => {
      onChange?.(option);

      setIsOpen(false);
    },
    [onChange],
  );

  return (
    <View ref={ref}>
      <Pressable onPress={handleToggle}>
        <Text>{selectedOption?.label || 'Select'}</Text>

        <Arrow />
      </Pressable>

      {isOpen && (
        <View>
          {options.map((option) => (
            <Pressable key={option.value} onPress={(): void => handleChange(option)}>
              <Text>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default Select;
