import {
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase.config";

function List() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getItems() {
      const q = query(collection(db, "items"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setItems(querySnapshot.docs);
      });
    }
    getItems();
  }, []);

  async function toggleHandler(item){
    const document = doc(db, "items", item.id);
  await updateDoc(document, {
    active: !item.data().active
  });
  }

 
  

  console.log(items);

  return (
    <div className="list">
      {items.map((item) => (
        <div key={item.id} className="listItems">
          <input 
          type={"checkbox"}
          checked={!item.data().active}
          onChange={() => toggleHandler(item)}
          ></input>
          {item.id}
        </div>
      ))}
      {items.map((item) => (
        <div key={item.id} className="listItems">
          <input 
          type={"checkbox"}
          checked={!item.data().active}
          onChange={() => toggleHandler(item)}
          ></input>
          {item.id}
        </div>
      ))}
    </div>
  );
}

export default List;
