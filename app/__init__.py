from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOADED_IMAGES_DEST'] = 'app/static/uploads/'
app.config['SECRET_KEY'] = "this is a secret"
db = SQLAlchemy(app)

from app.models import *
from app.urls import *
