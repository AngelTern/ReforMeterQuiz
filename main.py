from flask import Flask, render_template, redirect,url_for,request  



app = Flask(__name__, static_folder='static')


@app.route('/')
def main():
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

if __name__ == '__main__':
    app.run(debug = True)