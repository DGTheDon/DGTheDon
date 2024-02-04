import pandas as pd

def clean_data(content_data):
    # Remove irrelevant information
    content_data = content_data.drop(columns=['irrelevant_column1', 'irrelevant_column2'])

    # Remove outliers
    content_data = content_data[content_data['likes'] < content_data['likes'].quantile(0.99)]
    content_data = content_data[content_data['comments'] < content_data['comments'].quantile(0.99)]
    content_data = content_data[content_data['shares'] < content_data['shares'].quantile(0.99)]

    # Handle missing values
    content_data = content_data.fillna(content_data.median())

    # Save cleaned data to a file
    content_data.to_csv('cleaned_data.csv', index=False)

    return content_data

if __name__ == "__main__":
    # Load scraped data
    content_data = pd.read_csv('data_collection/content_data.csv')

    # Clean the data
    cleaned_data = clean_data(content_data)