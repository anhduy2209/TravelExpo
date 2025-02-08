import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Utilities/types';

const useNavigationHelper = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const navigateTo = (screenName: keyof RootStackParamList) => {
        navigation.navigate(screenName);
    };

    const goBack = () => {
        navigation.goBack()
    }

    return { navigateTo, goBack };
};

export default useNavigationHelper;
