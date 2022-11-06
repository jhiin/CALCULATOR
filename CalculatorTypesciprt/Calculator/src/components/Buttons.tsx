 import { useContext } from "react";
 import { TouchableOpacity , Text, View  } from "react-native";
 import { ThemeContext } from "../context/ThemeContext";
import { myColors } from "../styles/Colors";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title : string;
    isBlue : boolean;
    isGray: boolean;
}

export default function Button({onPress , title , isBlue , isGray}: ButtonProps) {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity style={
            isBlue
            ? Styles.btnBlue
            : isGray 
            ? Styles.btnGray
            : theme === 'light'
            ? Styles.btnLight
            : Styles.btnDark
            }
            onPress={onPress}>
                <Text style={
                    isBlue || isGray
                    ? Styles.smallTextLight
                    : theme === 'dark'
                    ? Styles.smallTextLight
                    : Styles.smallTextDark
                }>
                    {title}
                </Text>
        </TouchableOpacity>
    )
}