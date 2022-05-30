import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

interface fontStyle{
    fontFamily: string,
    fontSize: number,
    color: string
}

const BASE: fontStyle = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white
}

const BASE_BOLD: fontStyle = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.white
}

const BOLD: fontStyle = {
    fontFamily: typography.bold,
    fontSize: 16,
    color: colors.white
}

export const presets: any = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32
    },
    h2: {
        ...BOLD,
        fontSize: 28
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 14
    },
    small: {
        ...BASE,
        fontSize: 12
    }
}