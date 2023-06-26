import React, { useState, useEffect } from "react";
import { MongoClient } from "mongodb";
import ToppingsSpecialCurItem from "../../components/Menu/MenuUI/toppings/toppingsSpecialCurItem";
import ToppingsListItems from "../../components/Menu/MenuUI/toppings/ListItems";


const Menu = ({ toppingsList }) => {
  return (
    <div>
      <ToppingsSpecialCurItem type="Toppings" />
      <ToppingsListItems
        items={toppingsList}
        domain="toppings"
        type="TOPPINGS"
      />
    </div>
  );
};

export async function getStaticProps() {
  const uri =
    "mongodb+srv://<username>:<password>@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "toppings";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const result = await collection.find().toArray();

  client.close();

  return {
    props: {
      toppingsList: result.map((doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        price: doc.price,
        description: doc.description,
        image: doc.image,
        type: doc.type,
      })),
    },
    revalidate: 1,
  };
}

export default Menu;
