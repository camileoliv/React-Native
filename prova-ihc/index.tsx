import { Text, View, Button, TextInput} from 'react-native';
import React, { useState } from 'react';
import { styles } from "./styles";

export default function index(){
  const [nome, setNome] = useState('')
  const [pri, setPri] = useState('')
  const [seg, setSeg] = useState ('')
  const [ter, setTer] = useState ('')
  const [freq, setFreq] = useState ('')

  function calcularMedia() {
    const media = (parseFloat(pri) + parseFloat(seg) + parseFloat(ter)) / 3;
    const parsedFreq = parseInt(freq) 

      if(media >= 7 && parsedFreq <= 75) 
        {alert(`Olá ${nome}, você foi aprovado(a)`)} 
      else if (media >= 7 && parsedFreq > 75) 
        {alert(`Olá ${nome}, você foi reprovado(a) por frequência`)} 
      else
        {alert(`Olá ${nome}, você foi reprovado(a) por nota`)}

}
      

  return (
      <View style={styles.caixa}>

          <Text style={styles.ctitle}>Calculadora de média:</Text>

          <Text>Digite o seu nome:</Text>
          <TextInput style={styles.cinput} keyboardType='default' value={nome} onChangeText={setNome}/>

          <Text>Primeira nota:</Text>
          <TextInput style={styles.cinput} keyboardType='numeric' value={pri} onChangeText={setPri} />
          <Text>Segunda nota:</Text>
          <TextInput style={styles.cinput} keyboardType='numeric' value={seg} onChangeText={setSeg} />
          <Text>Terceira nota:</Text>
          <TextInput style={styles.cinput} keyboardType='numeric' value={ter} onChangeText={setTer} />

          <Text>De 0 a 100 digite o número de presenças em dia:</Text>
          <TextInput style={styles.cinput} keyboardType='numeric' value={freq}  onChangeText={setFreq} />

          <Button title='Verificar' 
          onPress={calcularMedia}/>

      </View>
  );
}
