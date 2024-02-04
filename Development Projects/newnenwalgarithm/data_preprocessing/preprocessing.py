import pandas as pd
from sklearn.preprocessing import LabelEncoder, MinMaxScaler

def preprocess_data(cleaned_data):
    # Load cleaned data
    data = pd.read_csv(cleaned_data)

    # Convert categorical data into numerical data
    label_encoder = LabelEncoder()
    data['content_type'] = label_encoder.fit_transform(data['content_type'])
    data['content_theme'] = label_encoder.fit_transform(data['content_theme'])

    # Normalize numerical data
    min_max_scaler = MinMaxScaler()
    data[['posting_time', 'likes', 'comments', 'shares']] = min_max_scaler.fit_transform(data[['posting_time', 'likes', 'comments', 'shares']])

    # Handle missing values
    data = data.fillna(data.mean())

    # Save preprocessed data
    preprocessed_data = 'preprocessed_data.csv'
    data.to_csv(preprocessed_data, index=False)

    return preprocessed_data

if __name__ == "__main__":
    cleaned_data = 'cleaned_data.csv'
    preprocessed_data = preprocess_data(cleaned_data)
    print(f"Preprocessed data saved to {preprocessed_data}")