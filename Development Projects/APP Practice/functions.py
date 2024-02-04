import requests
from config import appConfig
from classes import User, Post

def loginUser(username, password):
    payload = {
        "username": username,
        "password": password
    }
    response = requests.post(appConfig["api_url"] + "/login", json=payload)
    if response.status_code == 200:
        return response.json()["token"]
    else:
        return None

def signupUser(username, password, email):
    payload = {
        "username": username,
        "password": password,
        "email": email
    }
    response = requests.post(appConfig["api_url"] + "/signup", json=payload)
    if response.status_code == 201:
        return response.json()["token"]
    else:
        return None

def createPost(title, content, user_id):
    payload = {
        "title": title,
        "content": content,
        "user_id": user_id
    }
    response = requests.post(appConfig["api_url"] + "/posts", json=payload)
    if response.status_code == 201:
        return Post.from_dict(response.json())
    else:
        return None

def deletePost(post_id):
    response = requests.delete(appConfig["api_url"] + f"/posts/{post_id}")
    return response.status_code == 204

def fetchPosts():
    response = requests.get(appConfig["api_url"] + "/posts")
    if response.status_code == 200:
        return [Post.from_dict(post_data) for post_data in response.json()]
    else:
        return []