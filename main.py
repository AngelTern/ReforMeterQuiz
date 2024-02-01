from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__, static_folder='static')

@app.route('/')
def main():
    return render_template('index.html')



@app.route('/submit', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        age = request.form['age']
        gender = request.form['gender']
        # Process the submitted data or save it to a database
        # For now, let's just print the values
        print(f"Submitted Age: {age}, Gender: {gender}")
        # Redirect to the quiz route after processing the form
        return redirect(url_for('quiz'))
    else:
        # Handle the case where the method is not 'POST'
        return redirect(url_for('main'))

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

if __name__ == '__main__':
    app.run(debug=True)
