import unittest
import pandas as pd
from exploratory_data_analysis import eda

class TestEDA(unittest.TestCase):

    def setUp(self):
        self.sample_data = pd.DataFrame({
            'content_type': ['photo', 'video', 'text', 'photo', 'video'],
            'content_theme': ['fitness', 'cooking', 'fashion', 'fitness', 'fashion'],
            'posting_time': ['morning', 'afternoon', 'evening', 'morning', 'evening'],
            'likes': [100, 200, 150, 300, 250],
            'comments': [10, 20, 15, 30, 25],
            'shares': [5, 10, 7, 15, 12]
        })

    def test_descriptive_statistics(self):
        result = eda.descriptive_statistics(self.sample_data)
        self.assertIsInstance(result, pd.DataFrame)
        self.assertEqual(len(result), 3)

    def test_visualizations(self):
        eda.visualizations(self.sample_data)
        self.assertTrue(True)

if __name__ == '__main__':
    unittest.main()