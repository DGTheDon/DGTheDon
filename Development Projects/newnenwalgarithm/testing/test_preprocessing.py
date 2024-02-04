import unittest
from data_cleaning.cleaning import clean_data
from data_preprocessing.preprocessing import preprocess_data

class TestPreprocessing(unittest.TestCase):

    def test_preprocessing(self):
        # Load sample raw data
        raw_data = [
            {"content_type": "photo", "theme": "fitness", "posting_time": "2022-01-01 12:00:00", "likes": 100, "comments": 10, "shares": 5},
            {"content_type": "video", "theme": "cooking", "posting_time": "2022-01-02 18:00:00", "likes": 200, "comments": 20, "shares": 10},
            {"content_type": "text", "theme": "fashion", "posting_time": "2022-01-03 09:00:00", "likes": 50, "comments": 5, "shares": 2},
        ]

        # Clean and preprocess the data
        cleaned_data = clean_data(raw_data)
        preprocessed_data = preprocess_data(cleaned_data)

        # Check if the preprocessed data has the correct keys
        expected_keys = {"content_type", "theme", "posting_time", "likes", "comments", "shares"}
        for data_point in preprocessed_data:
            self.assertTrue(expected_keys.issubset(data_point.keys()))

        # Check if the categorical data has been converted to numerical data
        for data_point in preprocessed_data:
            self.assertIsInstance(data_point["content_type"], int)
            self.assertIsInstance(data_point["theme"], int)

        # Check if the numerical data has been normalized
        for data_point in preprocessed_data:
            self.assertTrue(0 <= data_point["likes"] <= 1)
            self.assertTrue(0 <= data_point["comments"] <= 1)
            self.assertTrue(0 <= data_point["shares"] <= 1)

if __name__ == "__main__":
    unittest.main()