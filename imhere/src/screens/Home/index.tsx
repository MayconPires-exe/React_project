import React from "react";
import { 
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {

  const participants = [
    'Maycon',
    'Rodrigo',
    'Ingrid',
    'Maria',
    'João',
    'José',
    'Iza',
    'Joana',
    'Joaquim',
    'Jaquez',
    'Mayke',
    'Rosana',
    'Luiz'
  ];

  function handleParticipantAdd() {
    if (participants.includes("Maycon")) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome.')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover o participante ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Terça, 17 de Janeiro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants ? participants : []}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
          </Text>
        )}
      />
    </View>
  );
}