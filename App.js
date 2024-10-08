import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';  // Necesario para el video

export default function App() {
  const [view, setView] = useState(1); // Control de las vistas (1 = imagen y texto, 2 = video, 3 = botones)
  const [buttonColors, setButtonColors] = useState({
    Rojo: 'red',
    Verde: 'green',
    Azul: 'blue',
    Amarillo: 'yellow'
  });

  // Función para cambiar entre ventanas
  const switchView = (viewNumber) => {
    setView(viewNumber);
  };

  // Función para cambiar el color del botón al ser tocado
  const changeButtonColor = (color) => {
    const newColor = color === 'Rojo' ? 'purple' : 
                     color === 'Verde' ? 'orange' : 
                     color === 'Azul' ? 'pink' : 
                     'gray'; // Colores a los que cambiarán
                     
    setButtonColors((prevColors) => ({
      ...prevColors,
      [color]: newColor
    }));
  };

  // Vistas del proyecto
  const renderView = () => {
    switch (view) {
      case 1:
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2019_Ford_Mustang_GT_Blue.jpg/250px-2019_Ford_Mustang_GT_Blue.jpg' }}
              style={styles.image}
            />
            <Text style={styles.text}>Esta es la vista 1 con imagen y texto</Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.container}>
            <Video
              source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Video de ejemplo
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              style={styles.video}
            />
          </View>
        );
      case 3:
        return (
          <View style={styles.container}>
            {['Rojo', 'Verde', 'Azul', 'Amarillo'].map((color) => (
              <TouchableOpacity
                key={color}
                style={[styles.button, { backgroundColor: buttonColors[color] }]} // Usa el color dinámico
                onPress={() => changeButtonColor(color)} // Cambia el color cuando se presiona
              >
                <Text style={styles.buttonText}>{color}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Renderiza la vista según el estado */}
      {renderView()}

      {/* Botones de navegación */}
      <View style={styles.navContainer}>
        <Button title="Vista 1" onPress={() => switchView(1)} />
        <Button title="Vista 2" onPress={() => switchView(2)} />
        <Button title="Vista 3" onPress={() => switchView(3)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
  video: {
    width: 300,
    height: 300,
  },
  button: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
});
