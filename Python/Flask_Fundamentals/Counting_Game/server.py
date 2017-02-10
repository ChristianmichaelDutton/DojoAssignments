'''Counting Game'''
import random
from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
app.secret_key = "Thisismysecretkey"

@app.route('/')
def index():
    session['number'] = int(random.randrange(1,101))
    if 'count' not in session:
        session['count']=1
    else:
        session['count']+=1
    return render_template('index.html')


@app.route('/logic', methods = ['post'])
def logic():
    session['button'] = request.form['button']
    if session['button']=="Reload for +2":
        session['count']+=1
        return redirect('/')

@app.route('/path', methods = ['post'])
def pathwatcher():
    session['button1'] = request.form['button1']
    if session['button1']=="Reset":
        session.clear()
        return redirect('/')

app.run(debug=True)