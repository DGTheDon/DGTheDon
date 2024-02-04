import requests
from bs4 import BeautifulSoup
import json

def scrape_data(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')

    content_data = []

    for post in soup.find_all('div', class_='post'):
        content_type = post['data-content-type']
        content_theme = post['data-content-theme']
        posting_time = post['data-posting-time']
        likes = int(post['data-likes'])
        comments = int(post['data-comments'])
        shares = int(post['data-shares'])

        content_data.append({
            'content_type': content_type,
            'content_theme': content_theme,
            'posting_time': posting_time,
            'likes': likes,
            'comments': comments,
            'shares': shares
        })

    return content_data

if __name__ == "__main__":
    url = "https://www.example.com/onlyfans-page"
    content_data = scrape_data(url)

    with open('data_cleaning/cleaned_data.json', 'w') as outfile:
        json.dump(content_data, outfile)