import { View, Text, Image, TextInput, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import Input from '../../screens/Input'

const DashboardHome = () => {
    return (
        <View style={{ backgroundColor: '#081122', height: '100%' }}>

            {/* value vision title */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 34 }}>
                <View style={{ marginRight: 6 }}><Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold', fontFamily: '' }}>value</Text></View>
                <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, width: 100 }}><Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: '#081122' }}>vision</Text></View>

            </View>

            {/* search bar */}
            <View style={{ marginTop: 30, marginHorizontal: 20 }}>

                <View style={{
                    backgroundColor: "white", display: 'flex', height: 50, flexDirection: 'row',
                    justifyContent: 'flex-start', alignItems: "center", borderRadius: 15,
                }}>
                    <Image
                        source={require('../img/Search.png')}
                        style={{ height: 20, marginLeft: 10 }}
                    />
                    <TextInput style={{}}

                        placeholder="What are you looking for "
                        keyboard="default"

                    />

                </View>


            </View>

            {/* trending */}
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>

                <View>
                    <Text style={{ color: 'white', fontSize: 20 }}>Trending</Text>
                </View>

                {/* vr world */}
                <View style={{ marginTop: 10 }}>
                    <ScrollView horizontal={true} style={{}}>

                        <View style={{ height: 150, width: 150, marginRight: 20, }}>
                            <Image
                                source={require('../img/vrw.png')}
                                style={{ height: "100%", width: 150, borderRadius: 15 }}
                            />

                        </View>
                        <View style={{ height: 150, width: 150, marginRight: 20, }}>
                            <Image
                                source={require('../img/vrw2.png')}
                                style={{ height: "100%", width: 150, borderRadius: 15 }}
                            />

                        </View>
                        <View style={{ height: 150, width: 150, marginRight: 20, }}>
                            <Image
                                source={require('../img/vrw3.png')}
                                style={{ height: "100%", width: 150, borderRadius: 15 }}
                            />

                        </View>



                    </ScrollView>
                </View>


            </View>



            {/* Explore categories */}

            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                {/* title */}
                <View>
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Explore categories</Text>

                </View>

                {/* items  */}
                <View >
                <ImageBackground source={require('../img/i1.png')}
                resizeMode="cover" style={{ height: 130, width: "100%" }}
                >
                
                <View style={{marginTop:50,marginLeft:15}}>
                    <Text style={{color:'#011B2A',fontSize:20}}>
                    Random VR World
                    </Text>
                    <Text  style={{color:'#000000CC',fontSize:15}}>
                    Subtitle goes here
                    </Text>
                </View>

                </ImageBackground>

                </View>


                {/* 2nd itme */}
                <View>

                <ImageBackground source={require('../img/i2.png')}
                resizeMode="cover" style={{ height: 140, width: "100%" }}
                >
                
                <View style={{marginTop:50,marginLeft:15}}>
                    <Text style={{color:'#011B2A',fontSize:20}}>
                    VR Environement
                    </Text>
                    <Text  style={{color:'#000000CC',fontSize:15}}>
                    Subtitle goes here
                    </Text>
                </View>

                </ImageBackground>


                </View>
            </View>

        </View>
    )
}


export default DashboardHome