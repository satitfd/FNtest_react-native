import { View, Text, Image,  } from 'react-native'
import React,{useState,useEffect} from 'react'

const Detail = ({ route }) => {
    const [item, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch('http://10.0.2.2:5000/api/react_native/'+ route.params.id)
            .then(res => res.json())
            .then((result) => {
                setItems(result)
                setIsLoading(false)
                // console.log(result)
            })
    },[])

  return (
    <View> 
        { isLoading ?
         <Text>Loading</Text>
        :
        <View>
             <Image  source={{uri: item.coverimage }}
                style={{ width:200, height:150, marginTop:20 ,marginHorizontal:30 }}
            />
           <View style={{ padding: 30 }}>
                <Text style={{ fontSize: 30 }}>สินค้า : {item.name}</Text>
                <Text>รายละเอียดสินค้า : {item.detail}</Text>
                <Text>ราคา : {item.price} บาท</Text>
                <Text>วันหมดอายุPromotion : {item.expiration_date} </Text>
            </View>
            
        </View>
       
        }
    </View>
  )
}

export default Detail