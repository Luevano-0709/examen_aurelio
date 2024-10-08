import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const SettingsScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headerText}>Latest News</Text>

            {/* News Item 1 */}
            <View style={styles.newsItem}>
                <Image
                    style={styles.newsImage}
                    source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image, replace with actual image URL
                />
                <View style={styles.newsTextContainer}>
                    <Text style={styles.newsTitle}>Breaking News #1</Text>
                    <Text style={styles.newsDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
            </View>

            {/* News Item 2 */}
            <View style={styles.newsItem}>
                <Image
                    style={styles.newsImage}
                    source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image, replace with actual image URL
                />
                <View style={styles.newsTextContainer}>
                    <Text style={styles.newsTitle}>Breaking News #2</Text>
                    <Text style={styles.newsDescription}>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
            </View>

            {/* News Item 3 */}
            <View style={styles.newsItem}>
                <Image
                    style={styles.newsImage}
                    source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image, replace with actual image URL
                />
                <View style={styles.newsTextContainer}>
                    <Text style={styles.newsTitle}>Breaking News #3</Text>
                    <Text style={styles.newsDescription}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#f4f4f4",
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    newsItem: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    newsImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    newsTextContainer: {
        flex: 1,
        justifyContent: "center",
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    newsDescription: {
        fontSize: 14,
        color: "#777",
    },
});

export default SettingsScreen;
