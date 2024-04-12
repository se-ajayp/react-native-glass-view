import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur';
const GlassView = ({ children }) => {
    return (
        <View style={styles.container}>
            <BlurView
                style={styles.blur}
                blurType="light"
                blurAmount={10} // Adjust blur amount as needed
            >
                {children}
            </BlurView>
        </View>
    )
}

export default GlassView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
        borderRadius: 10, // Optional: Add border radius for rounded corners
    },
    blur: {
        flex: 1,
        borderRadius: 10, // Optional: Same border radius as container
    },
})