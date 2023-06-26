import { MongoClient } from "mongodb";
import Detail from "@/components/UI/Detail/Detail";
const Sauce = ({ sauceList }) => {
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
      {sauceList.map((base) => (
        <>
          <Detail
            key={base.id}
            image={base.image}
            title={base.name}
            quantity={base.quantity}
            totalQty={40}
          />
          <br />
        </>
      ))}
    </div>
  );
};

export default Sauce;

export async function getStaticProps() {
  const uri =
    "mongodb+srv://<username>:<password>@reactcluster.qulg5qe.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  const dbName = "contents";
  const collectionName = "sauces";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const result = await collection.find().toArray();

  client.close();

  return {
    props: {
      sauceList: result.map((doc) => ({
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
