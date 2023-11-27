import styles from './style';
import React, { useEffect, useState } from 'react';
import { criarEvento } from '../CreateScreen/CreateScreen';
import { fetchEventos } from '../../../service/eventoService';
import { deletarEvento } from '../DeleteScreen/DeleteScreen';
import { View, Text, FlatList, TouchableOpacity, Button, useFocusEffect } from 'react-native';

const CORES = ['#8B0000', '#3DE123', '#FFFFFF', '#40AEFF', '#AC12FF', '#8B0000', '#3DE123', '#FFFFFF'];
function ListaEventos({ navigation }) {
   
 const [eventos, setEventos] = useState([]);
 useEffect(
   React.useCallback(() => {
   const carregarEventos = async () => {
   const data = await fetchEventos();
   setEventos(data);
   };
   carregarEventos();
   },[])
  );
  
 
return (
    <View style={styles.container}>
      <Button title="Criar Evento" onPress={criarEvento}/>
        <Text>Create Event</Text>
      <Button title="Deletar Evento" onPress={deletarEvento}/>
        <Text>Delete Event</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          const corItem = CORES[index % CORES.length];
          return (
            <TouchableOpacity
              onPress={() => editarEvento(item)}
              onLongPress={() => {
                deletarEvento(item, eventos, setEventos);
              }}>
              <View style={{ ...styles.itemContainer, backgroundColor: corItem }}>
                <Text style={styles.itemDate}>{item.data}</Text>
                <Text style={styles.itemTitle}>{item.nome}</Text>
                <Text style={styles.itemDescription}>{item.descricao}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
    function editarEvento(eventoSelecionado) {
      navigation.navigate('EdicaoEvento', { evento: eventoSelecionado });
     };
     function criarEvento(eventoSelecionado) {
      navigation.navigate('CriarEvento', { evento: eventoSelecionado});
     };
     function deletarEvento(eventoSelecionado) {
      navigation.navigate('DeletarEvento', { evento: eventoSelecionado});
     };
   }
  
   export default ListaEventos;