import React, { useState, useEffect } from 'react';
import { fetchSubscriptions } from '../utils/api';

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSubscriptions();
      setSubscriptions(data);
    };
    fetchData();
  }, []);

  return (
    <div className="subscriptionList">
      <h2>Subscriptions</h2>
      <ul>
        {subscriptions.map((subscription) => (
          <li key={subscription._id}>
            <div>
              <h3>{subscription.creator.username}</h3>
              <p>Price: ${subscription.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscription;