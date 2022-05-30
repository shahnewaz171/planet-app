interface Props{
    primary: string,
    primaryBold: string,
    bold: string
}

export const typography: Props = {
    primary: "Spartan-Regular",
    primaryBold: "Spartan-Bold",
    bold: "Antonio-Medium"
}

// usage -> baseFont: { fontFamily: typography.primary }