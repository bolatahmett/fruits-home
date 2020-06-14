import axios from 'axios';

export async function addItem(product: any): Promise<any> {
    return await apiCall("http://localhost:5000/api/addItem", product);
}

export async function removeItem(product: any): Promise<any> {
    return await apiCall("http://localhost:5000/api/removeItem", JSON.stringify(product));
}

export async function getItem(jsonQuery: any): Promise<any> {
    return await apiCall("http://localhost:5000/api/getItem", jsonQuery);
}

export async function getAllItems(): Promise<any> {
    const result = await apiCall("http://localhost:5000/api/getAll", "");
    console.log("result:", result);
    return result;
}

export async function apiCall(url: any, requestBody: any): Promise<any> {
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