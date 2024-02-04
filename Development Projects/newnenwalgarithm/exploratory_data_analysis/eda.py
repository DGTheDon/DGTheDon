import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from data_cleaning.cleaning import cleaned_data

def analyze_data(cleaned_data):
    # Calculate descriptive statistics
    content_stats = cleaned_data.describe()

    # Visualize content type distribution
    plt.figure(figsize=(8, 6))
    sns.countplot(x='content_type', data=cleaned_data)
    plt.title('Content Type Distribution')
    plt.xlabel('Content Type')
    plt.ylabel('Count')
    plt.savefig('exploratory_data_analysis/content_type_distribution.png')

    # Visualize content theme distribution
    plt.figure(figsize=(12, 6))
    sns.countplot(x='content_theme', data=cleaned_data)
    plt.title('Content Theme Distribution')
    plt.xlabel('Content Theme')
    plt.ylabel('Count')
    plt.xticks(rotation=45)
    plt.savefig('exploratory_data_analysis/content_theme_distribution.png')

    # Visualize posting time distribution
    plt.figure(figsize=(12, 6))
    sns.countplot(x='posting_time', data=cleaned_data)
    plt.title('Posting Time Distribution')
    plt.xlabel('Posting Time')
    plt.ylabel('Count')
    plt.xticks(rotation=45)
    plt.savefig('exploratory_data_analysis/posting_time_distribution.png')

    # Visualize engagement metrics correlations
    plt.figure(figsize=(10, 8))
    sns.heatmap(cleaned_data.corr(), annot=True, cmap='coolwarm')
    plt.title('Engagement Metrics Correlations')
    plt.savefig('exploratory_data_analysis/engagement_metrics_correlations.png')

    return content_stats

analyzed_data = analyze_data(cleaned_data)