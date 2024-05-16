import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackHandler = (handleBackPress: () => boolean | null | undefined) => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (handleBackPress) {
                return handleBackPress();
            }
            return false;
        });

        return () => {
            backHandler.remove();
        };
    }, [handleBackPress]);
};

export default useBackHandler;
