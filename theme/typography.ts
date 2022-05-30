import { Platform } from "react-native";


export const typography = {
    primary: Platform.select({ ios: "Spartan-regular", android: "Spartan-regular" }),
    primaryBold: Platform.select({ ios: "Spartan-bold", android: "Spartan-bold" }),
    secondary: Platform.select({ ios: "Antonio_Medium", android: "Antonio_Medium" })
}

// usage -> baseFont: { fontFamily: typography.primary }