import React from 'react';
import { ViewProps, SafeAreaView, StyleProp, ViewStyle, StatusBar } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import { ThemeKey } from '../../config/themes';
import useConstants from '../../hooks/useConstants';

interface Props extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ThemedView: React.FunctionComponent<Props> = (props: Props) => {
 
  const { children, style, ...restProps } = props;
  const theme: AppTheme = useTheme();
  const { selectedTheme }: AppConstants = useConstants();
    
  const selectedStatusBar = selectedTheme === ThemeKey.dark ? "light-content" : "dark-content";

  // Define the theme color style
  const themeColorStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme.backgroundColor,
    // Add other theme properties as needed
  };

  // Merge the theme color style with the provided style
  const newStyle: StyleProp<ViewStyle> = [themeColorStyle, style];

  return (
    <SafeAreaView style={newStyle} {...restProps}>
      <StatusBar barStyle={selectedStatusBar} backgroundColor={theme.backgroundColor}/>
      {children} {/* Render children directly */}
    </SafeAreaView>
  );
};

export default ThemedView;
