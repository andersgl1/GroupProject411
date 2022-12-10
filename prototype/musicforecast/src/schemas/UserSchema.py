import pymongo
from pymongo import MongoClient
from jsonschema import validate


client=MongoClient("mongodb+srv://projectuser:p5comgroup@groupproject411.c2lxw0b.mongodb.net/?retryWrites=true&w=majority")


user_schema = {

    "type": "object",
     "required": [ "firstName", "lastName", "email", "password","mode","theme"],
     "properties":{
        "firstName":{
            "type":"string",
            "trim": True,
        },
        "lastName":{
            "type":"string",
            "trim": True,
        },
        "email":{
            "bsonType":"string",
            "trim": True,
            "unique":True,
        },
        "password":{
            "type":"string",
        },
        "mode":{
            "type":"string",
        },
        "theme":{
            "type":"string",
        },
    },
}

validate (instance={"firstName":"Hoshi"}, schema=user_schema)#fail
validate (instance={
    "firstName":"Hoshi",
    "lastName":"Ichika",
    "email":"ww@.edu",
    "password":"123",
    "mode":"Opposite",
    "theme":"Light"
}, schema=user_schema) #passed

