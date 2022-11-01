import { View, Text, FlatList, Image, Pressable,Button } from 'react-native'
import React, { useState, useEffect} from 'react'

const Home = ({navigation}) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://10.0.2.2:5000/api/react_native')
            .then(res => res.json())
            .then((result) => {
                setItems(result)
                setIsLoading(false)
                // console.log(result)
            })
    },[isLoading])

const goDetail = (id) => {
    navigation.navigate("Detail", {id: id})
}

    const renderItem =({ item }) => (
        
        <View>
            <Pressable onPress={() => goDetail(item.id)}>
            <Image  source={{uri: item.coverimage }}
                style={{ width:200, height:150, marginTop:20 ,marginHorizontal:30 }}
            />
            </Pressable> 
            
            <View style={{ padding: 30 }}>
                <Text style={{ fontSize: 30 }}>สินค้า : {item.name}</Text>
                <Text>รายละเอียดสินค้า : {item.detail}</Text>
                <Text>ราคา : {item.price} บาท</Text>
                <Text>วันหมดอายุPromotion : {item.expiration_date} </Text>

            </View>
            
            
        </View>
        
    );


    return (
        
    <View>
        <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={isLoading}
        onRefresh={() => setIsLoading(true)}
         />
    </View>
  )
}

export default Home 