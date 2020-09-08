let allJson = require('../Data/withoutdb.json');
const filename =  './Data/withoutdb.json'
const helper = require('../Helpers/helper.js')

function getAllJson() {
    return new Promise ((resolve, reject) => {
        if (allJson.length === 0) {
            reject({
                message: 'no database available',
                status: 202
            })
        }

        resolve(allJson)
    })
}

function getJson(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(allJson, id)
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}

function postJson(newJson) {
    return new Promise ((resolve, reject) => {
        const id = {id: helper.getNewId(allJson)}
        const date = {
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        }

        newJson = {...id, ...date,...newJson}
        allJson.push(newJson)
        helper.writeJSONFile(filename, allJson)
        resolve(newJson)
    })
}

function updatedJson(id, newJson) {
    return new Promise((resolve, reject)=> {
        helper.mustBeInArray(allJson, id)
        .then(post => {
            const index = allJson.findIndex(p => p.id == post.id )
            id = { id: post.id}
            const date = {
                createdAt: post.createdAt,
                updatedAt: helper.newDate()
            }
            posts[index] = {...id, ...date, ...newJson}
            helper.writeJSONFile(filename, allJson)
            resolve(allJson[index])
        })
        .catch(err => reject(err))
    })
}


function deleteJson (id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(allJson, id)
        .then(() => {
            posts = post.filter(p=> p.id !== id)
            helper.writeJSONFile(filename, allJson)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    postJson,
    getAllJson,
    getJson,
    updatedJson,
    deleteJson
}

