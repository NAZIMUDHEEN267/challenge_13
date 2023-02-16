import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect } from 'react'
import { getItem, postItem } from '../async-storage/Storage';

const Screen = () => {
    const [data, setData] = React.useState("");
    const [text, setText] = React.useState("");

    async function handleGetData() {
        const getData = await getItem();
        setData(getData);
    }

    useEffect(() => {
        handleGetData();
    }, [])

    async function handlePostData() {
        await postItem(text);
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            {/* message box */}
            <View style={{ width: "100%", height: "30%", borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: "600" }}>{data}</Text>
            </View>

            <View style={{ height: 10 }} />

            <View style={{
                height: "60%",
                justifyContent: "center"
            }}>
                {/* Text input */}
                <TextInput
                    style={{ borderColor: "#000", borderWidth: 1, borderRadius: 4, padding: 10 }}
                    multiline numberOfLines={4}
                    value={text}
                    onChangeText={(str) => setText(str)}
                    placeholder={"Type here"} />

                <View style={{ height: 10 }} />

                {/* Add button */}
                <Button title='ADD DATA' onPress={handlePostData} />

                <View style={{ height: 10 }} />

                {/* Get button */}
                <Button title='GET DATA' onPress={handleGetData} />
            </View>
        </View>
    )
}

export default Screen