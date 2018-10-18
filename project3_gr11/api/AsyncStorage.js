//Using ASyncStorage so the data is persistent on the device.
import { AsyncStorage } from "react-native";

//Persisting(saving) data
export async function storeData(key, value) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        // retrieveData('dailyReminder');
    } catch (error) {
        console.log(error);
    }
}

//Fetching data
export async function retrieveData(key)  {
    try {
        //Retrieve data as boolean [x]
        const value =  await AsyncStorage.getItem(key);
        const retrievedItem = JSON.parse(value);
        return retrievedItem;
    } catch (error) {
        console.log(error);
    }
}

//Remove data with key
export async function removeData(key) {
    try {
        await AsyncStorage.removeItem(key);
        console.log("item removed");
    } catch (error) {
        console.log(error);
    }
}

//Get all keys in AsyncStorage
export async function retrieveAllKeys() {
    try {
        const value = await AsyncStorage.getAllKeys();
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}

