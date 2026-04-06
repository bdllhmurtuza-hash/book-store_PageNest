from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def login():
    return render_template("login.html")

@app.route('/home')
def home():
    return render_template("index.html")

@app.route('/cart')
def cart():
    return render_template("cart.html")

@app.route('/sell')
def sell():
    return render_template("sell.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)