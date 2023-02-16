import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async function () {
    const item = await AsyncStorage.getItem("POST", (err) => {
        if(err) {
            console.log(err);
        }
    });

    return JSON.parse(item);
}

export const postItem = async function (value) {
    await AsyncStorage.setItem("POST", JSON.stringify(value));
};

