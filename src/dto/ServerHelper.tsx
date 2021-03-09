import axios from 'axios';
import { database } from './FireBaseDB';

export async function addItem(jsonQuery: any): Promise<any> {
    return await apiCall("https://fruitshome.ru/api/addItem", jsonQuery);
}

export async function removeItem(jsonQuery: any): Promise<any> {
    return await apiCall("https://fruitshome.ru/api/removeItem", jsonQuery);
}

export async function getItem(jsonQuery: any): Promise<any> {
    return await firebaseApiCall("");
    // return await apiCall("https://fruitshome.ru/api/getItem", jsonQuery);
}

export async function getAllItems(): Promise<any> {
    return await firebaseApiCall("");
    // const result = await apiCall("https://fruitshome.ru/api/getAll");
}


export async function addUser(jsonQuery: any): Promise<any> {
    return await apiCall("https://fruitshome.ru/api/addUser", jsonQuery);
}

export async function removeUser(jsonQuery: any): Promise<any> {
    return await apiCall("https://fruitshome.ru/api/removeUser", jsonQuery);
}

export async function getUser(jsonQuery: any): Promise<any> {
    return await apiCall("https://fruitshome.ru/api/getUser", jsonQuery);
}

export async function getAllUsers(): Promise<any> {
    const result = await apiCall("https://fruitshome.ru/api/getAllUsers");
    return result;
}

export async function apiCall(url: any, requestBody: any = ""): Promise<any> {
    let result = undefined;
    await axios.post(url, requestBody)
        .then(function (response: any) {
            console.log(response);
            result = response.data;
        })
        .catch(function (error: any) {
            console.log("hata", error);
        });
    return result;
}

export async function firebaseApiCall(params:any) {
    let result = undefined;
    var ref = database.ref("products")
    await ref.once('value').then((snapshot) => {
        var JSON_Obj = snapshot.val();

        var tempArr = [];
        for (var key in JSON_Obj) {
           tempArr.push(JSON_Obj[key]);
       }

        result = tempArr;
    });
    return result;
}