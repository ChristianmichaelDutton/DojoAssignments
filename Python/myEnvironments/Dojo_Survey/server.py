from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/result', methods = ['post'])
def create_user():
   print "Got Post Info"
   name = request.form['name']
   location =request.form['location']
   language = request.form['language']
   text = request.form['text']
   return render_template("result.html", name=name, location=location, language=language, text=text)

app.run(debug=True)