import React, { useCallback, useEffect } from 'react';
import { ViewStyle, StyleSheet, BackHandler } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import { useSelector, useDispatch } from 'react-redux'; // Thêm import useSelector và useDispatch
import { RootState } from '../store'; // Import RootState từ store Redux
import { setLanguage } from '../store/reducers/config'; // Import action setLanguage
import WelcomeScreen from '../screen/Welcome';
import { ApplicationConfig } from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';
import ThemedView from '../components/UI/ThemeView';
import { LanguageKey } from '../config/languages';
import Login from '../screen/Login';

interface BackHandlerHOCProps {
    children?: React.ReactNode; // Định kiểu cho prop children
}

const Router: React.FunctionComponent = () => {
  const configReducer = useSelector((state: RootState) => state.config); // Sử dụng useSelector để lấy trạng thái config từ store
  const dispatch = useDispatch(); // Sử dụng useDispatch để gửi action
  
  // Hàm để thay đổi ngôn ngữ
  const changeLanguage = (language: string) => {
    // Kiểm tra xem language có phải là một giá trị hợp lệ từ enum LanguageKey không
    if (Object.values(LanguageKey).includes(language as LanguageKey)) {
      dispatch(setLanguage(language as LanguageKey)); // Chuyển giá trị sang enum LanguageKey trước khi gửi action
    } else {
      console.error("Invalid language:", language);
    }
  };

 

  return (
    <ConfigContext.Provider value={configReducer}>
      <ThemedView style={style.container}>
        <NativeRouter>
        
            <Routes>
              <Route path='/' element={<WelcomeScreen changeLanguage={changeLanguage} />} />
              <Route path='/Login' element={<Login changeLanguage={changeLanguage} />} />
              {/* Các Route khác ở đây */}
            </Routes>
        </NativeRouter>
      </ThemedView>
    </ConfigContext.Provider>
  )
}

export default Router;

interface Style {
  container: ViewStyle
}

const style: Style = StyleSheet.create<Style>({
  container: {
      flex: 1
  }
})
