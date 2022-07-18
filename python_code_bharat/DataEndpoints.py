from flask import Flask, jsonify, request, json, Response
from pymongo import MongoClient
from flask_pymongo import PyMongo
import certifi
from flask import make_response
from bson import json_util
import regex
ca = certifi.where()
app = Flask(__name__)
mongodb_client = PyMongo(app, uri="mongodb+srv://searchlite:Abcd1234@searchlitedatabase.xxduroh.mongodb.net/SearchLiteData", tlsCAFile=ca)
db = mongodb_client.db
def jd(obj):
    return json_util.dumps(obj, default=json_util.default)
@app.route("/viewall")
def home():
    todos = db.SearchLiteCollection.find()
    response = make_response(jd(todos))
    response.content_type="application/json"
    return response
@app.route("/find/<string:key>")
def findresult(key):
    todos = db.SearchLiteCollection.find({'Description' : { '$regex' : key, '$options' : 'i' } })
    response = make_response(jd(todos))
    response.content_type="application/json"
    return response
@app.route("/sort/<string:results>")
def findresultdescview(results):
    todos = db.SearchLiteCollection.find({'Description' : { '$regex' : results, '$options' : 'i' } }).sort("Number Visits",-1)
    response = make_response(jd(todos))
    response.content_type="application/json"
    return response
if __name__=="__main__":
    app.run(debug='true')
