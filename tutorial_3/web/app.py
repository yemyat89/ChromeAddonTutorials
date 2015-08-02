from flask import Flask, jsonify, request
from itertools import count


next_index = count()
app = Flask(__name__)

memory = {}


@app.route('/')
def index():
    return 'Hello'


@app.route('/save', methods=['POST'])
def save():
    
    d = dict(request.form)
    memory[next_index.next()] = d 

    return jsonify(dict(result=True))


@app.route('/view')
def view():
    return jsonify(dict(data=memory))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0') 
