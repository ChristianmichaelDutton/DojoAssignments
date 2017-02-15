'''Email Validation'''
from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
app.secret_key = "Thisismysecretkey"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success')
def success():
    return render_template('success.html')

app.run(debug=True)