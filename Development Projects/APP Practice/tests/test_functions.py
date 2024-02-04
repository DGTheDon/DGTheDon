import unittest
from functions import loginUser, signupUser, createPost, deletePost, fetchPosts

class TestFunctions(unittest.TestCase):

    def test_loginUser(self):
        # Test valid login
        result = loginUser("test@example.com", "password123")
        self.assertEqual(result, "LOGIN_SUCCESS")

        # Test invalid login
        result = loginUser("invalid@example.com", "wrongpassword")
        self.assertNotEqual(result, "LOGIN_SUCCESS")

    def test_signupUser(self):
        # Test valid signup
        result = signupUser("newuser@example.com", "newpassword")
        self.assertEqual(result, "SIGNUP_SUCCESS")

        # Test invalid signup (user already exists)
        result = signupUser("test@example.com", "password123")
        self.assertNotEqual(result, "SIGNUP_SUCCESS")

    def test_createPost(self):
        # Test creating a post
        result = createPost("Test title", "Test content")
        self.assertEqual(result, "POST_CREATED")

    def test_deletePost(self):
        # Test deleting a post
        post_id = 1
        result = deletePost(post_id)
        self.assertEqual(result, "POST_DELETED")

    def test_fetchPosts(self):
        # Test fetching posts
        posts = fetchPosts()
        self.assertIsInstance(posts, list)

if __name__ == '__main__':
    unittest.main()