#Flask app: serve apis, gets data from my db and connect my homepage

from flask import Flask, abort
from flask import request, render_template
from flask import jsonify
from flask import Response
import json


#intializes app and connects to my database
app = Flask(__name__)

#Homepage
@app.route("/")
def index():
    return render_template('homepage.html')

@app.route("/api", methods=['POST'])
def api():
    if request.method == 'POST':
        data = json.loads(request.data.decode())
        print(data)
        yay = {200: "Successsssssss"}
        return jsonify(yay)

if __name__ == '__main__':
    app.run()
