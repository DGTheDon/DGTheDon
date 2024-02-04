import os
from flask import Flask, render_template, request, jsonify
from functions import loginUser, signupUser, createPost, deletePost, fetchPosts
from config import appConfig
from database import userData

app = Flask(__name__)
app.config.from_object(appConfig)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    result = loginUser(email, password)
    return jsonify(result)

@app.route('/signup', methods=['POST'])
def signup():
    email = request.form['email']
    password = request.form['password']
    result = signupUser(email, password)
    return jsonify(result)

@app.route('/create_post', methods=['POST'])
def create_post():
    title = request.form['title']
    content = request.form['content']
    result = createPost(title, content)
    return jsonify(result)

@app.route('/delete_post', methods=['POST'])
def delete_post():
    post_id = request.form['post_id']
    result = deletePost(post_id)
    return jsonify(result)

@app.route('/fetch_posts', methods=['GET'])
def fetch_posts():
    posts = fetchPosts()
    return jsonify(posts)

if __name__ == '__main__':
    app.run()