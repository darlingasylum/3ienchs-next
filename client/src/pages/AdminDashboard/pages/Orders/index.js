import React, { useState } from 'react';
import { formatOrders } from './../../../../../utils/formatOrders';
import { APICall } from './../../../../../utils/APICall';
import ExpansionPanelOrders from './../../components/ExpansionPanelOrders';

export default function AdminDashboard({ orders, content }) {
  const [items, setItems] = useState(orders);

  const getItems = () => {
    APICall(content.APIurl)
      .then((response) => {
        return response;
      })
      .then((response) => setItems(formatOrders(response.orders)))
      .catch((err) => console.log(err.message));
  };

  const renderList = (items) => {
    const components = {
      ExpansionPanelOrders: ExpansionPanelOrders,
    };
    const ExpansionPanel = components[content.type];

    if (items.length > 0) {
      return items.map((order) => (
        <ExpansionPanel
          order={order}
          key={order.id}
          getItems={getItems}
          content={content}
        ></ExpansionPanel>
      ));
    }
    return null;
  };

  return (
    <div className='mt-18 ml-8 mr-8'>
      <p>Commandes en cours :</p>
      <div className='my-8'>{renderList(items.actualOrders)}</div>
      <p>Commandes terminées :</p>
      <div className='my-8'>{renderList(items.overOrders)}</div>
    </div>
  );
}
