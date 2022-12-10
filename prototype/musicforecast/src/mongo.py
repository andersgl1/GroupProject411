import pymongo
from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient

uri = "mongodb+srv://projectuser:p5comgroup@groupproject411.c2lxw0b.mongodb.net/?retryWrites=true&w=majority"
async def database_connect():
    client = AsyncIOMotorClient(uri)
    print ("connecting")
    return client
    