'''Guessing Game'''
import random
from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
app.secret_key = "Thisismysecretkey"

@app.route('/')
def index():
    if 'dragon' not in session:
        session['dragon'] = random.randrange(1, 101)
    return render_template('index.html')

@app.route('/guess', methods = ['post'])
def guess():
    session['submit'] = request.form['submit']
    session['number'] = int(request.form['number'])
    data = session['number']
    if session['submit'] =="Save Ahri!":
        if data > session['dragon']:
            print "That's too high!"
        elif data < session['dragon']:
            print "That's too low!"
        else:
            print "Congrats!"
        return redirect('/', session['number'])

app.run(debug=True)