import unittest
from classes import User, Post
from database import db_session

class TestUserClass(unittest.TestCase):

    def setUp(self):
        self.user = User(username="testuser", email="testuser@example.com", password="testpassword")

    def tearDown(self):
        db_session.query(User).filter(User.username == "testuser").delete()
        db_session.commit()

    def test_create_user(self):
        db_session.add(self.user)
        db_session.commit()
        user = db_session.query(User).filter(User.username == "testuser").first()
        self.assertIsNotNone(user)
        self.assertEqual(user.email, "testuser@example.com")

    def test_check_password(self):
        db_session.add(self.user)
        db_session.commit()
        user = db_session.query(User).filter(User.username == "testuser").first()
        self.assertTrue(user.check_password("testpassword"))
        self.assertFalse(user.check_password("wrongpassword"))

class TestPostClass(unittest.TestCase):

    def setUp(self):
        self.user = User(username="testuser", email="testuser@example.com", password="testpassword")
        self.post = Post(title="Test Post", content="This is a test post.", user_id=self.user.id)

    def tearDown(self):
        db_session.query(Post).filter(Post.title == "Test Post").delete()
        db_session.query(User).filter(User.username == "testuser").delete()
        db_session.commit()

    def test_create_post(self):
        db_session.add(self.user)
        db_session.add(self.post)
        db_session.commit()
        post = db_session.query(Post).filter(Post.title == "Test Post").first()
        self.assertIsNotNone(post)
        self.assertEqual(post.content, "This is a test post.")
        self.assertEqual(post.user_id, self.user.id)

if __name__ == '__main__':
    unittest.main()