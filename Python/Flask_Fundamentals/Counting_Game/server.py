'''Guessing Game'''
import random
from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
app.secret_key = "Thisismysecretkey"

@app.route('/')
def index():
    if 'dragon' not in session:
        session['dragon'] = random.randrange(1, 101)
        dragon = session['dragon']
    if 'number' not in session:
        answer = ""
    return render_template('index.html',data=session['number'], dragon=session['dragon'])

@app.route('/guess', methods = ['post'])
def guess():
    session['submit'] = request.form['submit']
    session['number'] = int(request.form['number'])
    data = session['number']
    dragon = session['dragon']
    if session['submit'] =="Save Ahri!":
        if data > dragon:
            print "That's too high!"
        elif data < session['dragon']:
            print "That's too low!"
        else:
            session.pop['number']
            session.pop['dragon']
            print "Congrats!"
        return redirect('/', data=session['number'], dragon=session['dragon'])

app.run(debug=True)


#
# @app.route('/')
# def index():
#     if 'num' not in session:
#         session['num'] = random.randrange(0,101)
#     if 'guess' not in session:
#         answer= ""
#     else:
#         if str(session['guess']) == str(session['num']):
#             answer = "You are right!!! " + str(session['num']) + " is the number!"
#             session.pop('num')
#             session.pop('guess')
#             return render_template("results.html", answer=answer)
#         else:
#             if int(session['guess']) < int(session['num']):
#                 answer = "You are too low."
#             else:
#                 answer = "You are too high."
#             session.pop('guess')
#     return render_template("index.html", answer=answer)
#
# @app.route('/results', methods=['POST'])
# def results():
#     session['guess'] = request.form['guess']
#     return redirect('/')
#
# @app.route('/index2', methods=['POST'])
# def index2():
#     return redirect('/')
#
# app.run(debug=True)
