import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, TextInputProps } from 'react-native';

import CloseEye from '../../icons/CloseEye';
import Cross from '../../icons/Cross';
import Eye from '../../icons/Eye';

import { getStyles } from './styles';

interface IInputProps extends TextInputProps {
  onCrossClick?: () => void;
  isCrossVisible?: boolean;
  error?: string | null;
  isPasswordInput?: boolean;
}

const Input: React.FC<IInputProps> = ({ onCrossClick, isCrossVisible, error, isPasswordInput, ...rest }) => {
  const styles = getStyles({
    isError: !!error,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyeClick = (): void => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput {...rest} secureTextEntry={isPasswordVisible ? false : isPasswordInput} style={styles.input} />

        {isCrossVisible && !isPasswordInput && (
          <TouchableOpacity onPress={onCrossClick} style={styles.crossButton}>
            <Cross />
          </TouchableOpacity>
        )}

        {isPasswordInput && (
          <TouchableOpacity onPress={onEyeClick} style={styles.eyeButton}>
            {isPasswordVisible ? <CloseEye /> : <Eye />}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
