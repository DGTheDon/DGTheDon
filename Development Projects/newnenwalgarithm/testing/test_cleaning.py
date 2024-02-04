import unittest
from data_cleaning.cleaning import clean_data

class TestCleaning(unittest.TestCase):

    def test_clean_data(self):
        # Sample raw data
        raw_data = [
            {
                "content_type": "photo",
                "theme": "fitness",
                "posting_time": "2022-01-01T12:00:00",
                "likes": 1000,
                "comments": 50,
                "shares": 20,
                "creator_popularity": 10000,
                "price": 10.0
            },
            {
                "content_type": "video",
                "theme": "cooking",
                "posting_time": "2022-01-02T15:00:00",
                "likes": 2000,
                "comments": 100,
                "shares": 40,
                "creator_popularity": 20000,
                "price": 15.0
            },
            {
                "content_type": "text",
                "theme": "fashion",
                "posting_time": "2022-01-03T18:00:00",
                "likes": 3000,
                "comments": 150,
                "shares": 60,
                "creator_popularity": 30000,
                "price": 20.0
            }
        ]

        # Expected cleaned data
        expected_cleaned_data = [
            {
                "content_type": "photo",
                "theme": "fitness",
                "posting_time": "2022-01-01T12:00:00",
                "likes": 1000,
                "comments": 50,
                "shares": 20,
                "creator_popularity": 10000,
                "price": 10.0
            },
            {
                "content_type": "video",
                "theme": "cooking",
                "posting_time": "2022-01-02T15:00:00",
                "likes": 2000,
                "comments": 100,
                "shares": 40,
                "creator_popularity": 20000,
                "price": 15.0
            },
            {
                "content_type": "text",
                "theme": "fashion",
                "posting_time": "2022-01-03T18:00:00",
                "likes": 3000,
                "comments": 150,
                "shares": 60,
                "creator_popularity": 30000,
                "price": 20.0
            }
        ]

        cleaned_data = clean_data(raw_data)
        self.assertEqual(cleaned_data, expected_cleaned_data)

if __name__ == '__main__':
    unittest.main()