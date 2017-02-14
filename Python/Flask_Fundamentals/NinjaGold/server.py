'''Ninja Gold'''
import random
from flask import Flask, render_template, session, redirect, request
from datetime import datetime

app = Flask(__name__)
app.secret_key = "Ninjagold"

@app.route('/')
def index():
    if 'gold' not in session:
        session['gold']=0
    if 'adventures' not in session:
        session['adventures'] = []
    return render_template('index.html')

@app.route('/process_money', methods =['Post'])
def process():
    if request.form['building']=='farm':
        goldpieces = random.randrange(1,9)+6
    elif request.form['building']=='dungeon':
        goldpieces = random.randrange(1,21)
    elif request.form['building']=='hovel':
        goldpieces = random.randrange(1,4)+1
    else:
        if random.randrange(1,11)>5:
            goldpieces = random.randrange(1,11)+random.randrange(1,11)+random.randrange(1,11)+random.randrange(1,11)+random.randrange(1,11)
        else:
            goldpieces = (random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)
    session['gold'] += goldpieces
    date = datetime.now().strftime("%A/%B/%d/%Y/%-I/%M/%S/%p")
    if goldpieces >=0:
        adventure = "Earned {} in the {} at {}".format(goldpieces,request.form['building'],date)
    else:
        adventure = "Lost {} in the {} at {}".format(goldpieces*-1,request.form['building'],date)
    session['adventures'].append(adventure)
    return redirect('/')

app.run(debug=True)