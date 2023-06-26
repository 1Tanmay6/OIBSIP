import { MongoClient } from "mongodb";
import Detail from "@/components/UI/Detail/Detail";
const Toppings = ({ toppingList }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {toppingList.map((base) => (
        <>
          <Detail
            key={base.id}
            image={base.image}
            title={base.name}
            quantity={base.quantity}
            totalQty={10}
          />
          <br />
        </>
      ))}
    </div>
  );
};

export default Toppings;

export async function getStaticProps() {
  const uri =
    "mongodb+srv://user1:someuser@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

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
      toppingList: result.map((doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        price: doc.price,
        description: doc.description,
        image: doc.image,
        quantity: doc.quantity,
      })),
    },
    revalidate: 1,
  };
}
