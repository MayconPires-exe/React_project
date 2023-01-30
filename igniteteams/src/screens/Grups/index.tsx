import { StyleSheet, Text, View } from 'react-native';

export function Grups() {
  return (
    <View style={styles.container}>
      <Text>Grups</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
