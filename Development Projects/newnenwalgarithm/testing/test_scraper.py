import unittest
from data_collection.scraper import scrape_data

class TestScraper(unittest.TestCase):

    def test_scrape_data(self):
        # Test if the scraper returns data in the expected format
        sample_url = "https://www.example.com/sample_onlyfans_page"
        scraped_data = scrape_data(sample_url)

        # Check if the scraped data is a list
        self.assertIsInstance(scraped_data, list)

        # Check if each item in the list is a dictionary
        for item in scraped_data:
            self.assertIsInstance(item, dict)

            # Check if the dictionary contains the required keys
            self.assertIn("content_type", item)
            self.assertIn("content_theme", item)
            self.assertIn("posting_time", item)
            self.assertIn("engagement_metrics", item)

            # Check if the values are of the correct data type
            self.assertIsInstance(item["content_type"], str)
            self.assertIsInstance(item["content_theme"], str)
            self.assertIsInstance(item["posting_time"], str)
            self.assertIsInstance(item["engagement_metrics"], dict)

            # Check if the engagement metrics dictionary contains the required keys
            self.assertIn("likes", item["engagement_metrics"])
            self.assertIn("comments", item["engagement_metrics"])
            self.assertIn("shares", item["engagement_metrics"])

            # Check if the values are of the correct data type
            self.assertIsInstance(item["engagement_metrics"]["likes"], int)
            self.assertIsInstance(item["engagement_metrics"]["comments"], int)
            self.assertIsInstance(item["engagement_metrics"]["shares"], int)

if __name__ == "__main__":
    unittest.main()