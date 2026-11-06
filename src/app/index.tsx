//นำเข้า {วิว , ข้อความ} จาก ชื่อไลบารี่
import { Image, StyleSheet, Text, View } from 'react-native';

//(หน้าขาวๆ) exportส่งออก defaultเริ่มต้น functionฟังก์ชั่น Appชื่อฟังก์ชั่น 
export default function App(){
  return(
    <View style={homeStyle.container}>
      {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>Pimpimol Kleawkladphai</Text>

    {/* ใส่ภาพจากไฟล์ */}
    <Image
     source={require('@/assets/sett.jpeg')}
     style={{
      width: 350, //กว้าง
      height: 350 , //สูง
      borderRadius: 20 , //โค้ง
      borderWidth: 10 , 
      borderColor: "white" ,
     }}
   />
   {/* ใส่รูปจากเว็ป */}
   <Image
    source={{uri:"https://wiki.leagueoflegends.com/en-us/images/thumb/Sett_PrestigeHEARTSTEELLiveMyLifeSkin_HD.jpg/1600px-Sett_PrestigeHEARTSTEELLiveMyLifeSkin_HD.jpg?57c13&20260924004539"}}
    style={{
      width: 350, //กว้าง
      height: 350 , //สูง
      borderRadius: 20 , //โค้ง
      borderWidth: 10 , 
      borderColor: "white" ,
     }}
   />

   <View style={{flexDirection: "row"}}>
    <Text>😍</Text>
    <Text>💐</Text>
   </View>

    </View>
  )
}

//สร้างสไตล์ตกแต่ง
  const homeStyle = StyleSheet.create({
    container:{
      backgroundColor: "black" ,
      flex:1 , //ขยายพื้รที่
      alignItems: "center" ,
    },
    title:{
      color: "white" , // สีอักษร
      fontSize: 32 , //ขนาดอักษร
      fontWeight: 700 , // ความหนาอักษร 100-900
      fontStyle: "italic" , //เสียง
      textAlign: "center"
    }
  })