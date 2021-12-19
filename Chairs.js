import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Chair({ item, index }) {
    const [available, setAvailable] = useState(false);

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: available ? "#abd9ba" : "#d9abab" }]}
            onPress={() => setAvailable(!available)}>
            <Text>{item}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        height: 50,
        width: 50,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderBottomWidth: 10,
        borderBottomColor: '#000'
    }
})

export default Chair;