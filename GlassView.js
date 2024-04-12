import React from 'react';
import { View, StyleSheet } from 'react-native';

const GlassView = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background color
        borderRadius: 10,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default GlassView;
