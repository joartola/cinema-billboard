import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddMovieModal({ visible, onClose, onSubmit }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Add New Movie</Text>
          {/* Form elements would go here */}
          <TextInput placeholder="Title" style={styles.input} />
          <TextInput placeholder="Poster URL" style={styles.input} />
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={() => {
                // Handle form submission
                if (onSubmit) onSubmit();
                onClose();
              }}
            />
            <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
