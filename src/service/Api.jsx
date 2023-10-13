import axios from "axios"

const API_URL = 'http://127.0.0.1:5000'

export const addUser = async data => {
    try {
        return await axios.post(`${API_URL}/users`, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${API_URL}/users`)
    }
    catch (error) {
        console.log('Error while calling getUsers API', error.message)
    }
}

export const getUser = async data => {
    try {
        return await axios.get(`${API_URL}/users/${data}`)
    }
    catch (error) {
        console.log('Error while calling getUser API', error.message)
    }
}

export const editUser = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/users/${id}`, data)
    }
    catch (error) {
        console.log('Error while calling editUser API', error.message)
    }
}

export const deleteUser = async id => {
    try {
        return await axios.delete(`${API_URL}/users/${id}`)
    }
    catch (error) {
        console.log('Error while calling deleteUser API', error.message)
    }
}

//Qualification
export const addQualification = async data => {
    try {
        return await axios.post(`${API_URL}/qualification`, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}

export const getQualifications = async () => {
    try {
        return await axios.get(`${API_URL}/qualification`)
    }
    catch (error) {
        console.log('Error while calling getQualifications API', error.message)
    }
}

//Product
export const addProduct = async data => {
    try {
        return await axios.post(`${API_URL}/product`, data)
    }
    catch (error) {
        console.log('Error while calling addProduct API', error.message)
    }
}

export const getProducts = async () => {
    try {
        return await axios.get(`${API_URL}/product`)
    }
    catch (error) {
        console.log('Error while calling getProducts API', error.message)
    }
}