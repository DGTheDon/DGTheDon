import sqlite3
from contextlib import closing
from classes import User, Post

DATABASE = "app.db"

def connect_db():
    return sqlite3.connect(DATABASE)

def init_db():
    with closing(connect_db()) as db:
        with open("schema.sql", "r") as f:
            db.cursor().executescript(f.read())
        db.commit()

def get_user_by_username(username):
    with closing(connect_db()) as db:
        cur = db.execute("SELECT * FROM users WHERE username = ?", (username,))
        user = cur.fetchone()
        if user:
            return User(*user)
        return None

def create_user(username, password):
    with closing(connect_db()) as db:
        db.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        db.commit()

def get_posts():
    with closing(connect_db()) as db:
        cur = db.execute("SELECT * FROM posts")
        posts = [Post(*row) for row in cur.fetchall()]
        return posts

def create_post(title, content, user_id):
    with closing(connect_db()) as db:
        db.execute("INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)", (title, content, user_id))
        db.commit()

def delete_post(post_id):
    with closing(connect_db()) as db:
        db.execute("DELETE FROM posts WHERE id = ?", (post_id,))
        db.commit()