import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { presets } from './text.preset';

const Text = ({ children, preset="default", style }: any) => {
    const textStyles = StyleSheet.compose(presets[preset], style);

    return (
        <RNText style={textStyles}>{ children }</RNText>
    );
};

export default Text;