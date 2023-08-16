import React, { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { ISelectOption } from '../../../types/common';
import Arrow from '../../icons/Arrow';

import { styles } from './styles';

interface ISelectProps {
  options: ISelectOption[];
  selectedOption?: ISelectOption | null;
  onChange?: (option: ISelectOption) => void;
}

const Select: React.FC<ISelectProps> = ({ options, onChange, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <View>
      <Pressable onPress={handleToggle} style={styles.selectContainer}>
        <Text>{selectedOption?.label || 'Select'}</Text>

        <View style={isOpen && styles.arrowDown}>
          <Arrow />
        </View>
      </Pressable>

      {isOpen && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <Pressable style={styles.option} key={option.value} onPress={(): void => handleChange(option)}>
              <Text>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default Select;
