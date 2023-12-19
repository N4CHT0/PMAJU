import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Modal } from 'react-native'
import React,{useState} from 'react'
import { Notification, SearchNormal1 } from 'iconsax-react-native'
import FastImage from 'react-native-fast-image'
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
        <View style={{flex: 1,backgroundColor: '#F7F7F7'}}>
          <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', gap: 150, backgroundColor: '#65D46D'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26,}}>HAPPYFOOD</Text>
            <TouchableOpacity>
                <Notification size="32" color="#F7F7F7"/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
          <View style={{padding: 20, flexDirection: 'row', gap: 15, alignItems: 'center', backgroundColor: 'white', borderRadius: 20, shadowRadius: 20}}>
            <SearchNormal1 size="26" color="black"/>
            <Text>Search.....</Text>
          </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'column', gap: 20, padding: 18}}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <View style={{flexDirection: 'row',gap: 20}}>
            <FastImage
            style={{height: 150, width: 150, borderRadius: 28}}
            source={{uri: 'https://thumb.viva.id/intipseleb/1265x711/2023/08/25/64e858a8d4d93-menu-mie-gacoan.jpg',
            priority: FastImage.priority.high,
            headers: {Authorization: 'someAuthToken'},
            }}
            resizeMode={FastImage.resizeMode.cover}/>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontSize: 18}}>Mie Gacoan Lv 1 - 4</Text>
              <Text style={{fontSize: 15, color: 'black'}}>Rp.12.000.00</Text>
            </View>
            </View>
            </TouchableOpacity>
          </View>
          <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      style={{}}
      onRequestClose={() =>{
        setModalVisible(!modalVisible);
      }}>
        <View style={{backgroundColor: 'white',position:'absolute', padding: 20,top: 300, paddingHorizontal: 20,borderRadius: 28,left: 10,paddingVertical: 20}}>
        <View style={{flexDirection: 'row',gap: 20}}>
            <FastImage
            style={{height: 150, width: 150, borderRadius: 28}}
            source={{uri: 'https://thumb.viva.id/intipseleb/1265x711/2023/08/25/64e858a8d4d93-menu-mie-gacoan.jpg',
            priority: FastImage.priority.high,
            headers: {Authorization: 'someAuthToken'},
            }}
            resizeMode={FastImage.resizeMode.cover}/>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={{color: 'black', fontSize: 18}}>Mie Gacoan Lv 1 - 4</Text>
              <Text style={{fontSize: 15, color: 'black'}}>Rp.12.000.00</Text>
            </View>
            </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text
            style={{
              fontFamily: 'SquadaOne-Regular',
              color: 'blue',
              fontSize: 18,
            }}>
            Beli
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text
            style={{
              fontFamily: 'SquadaOne-Regular',
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        </View>
      </Modal>
        </View>
  )
}

export default App

const styles = StyleSheet.create({})