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
        const docs = [].concat(querySnapshot.docs);

        docs.sort((a, b) => {
            if (a.data().created > b.data().created) {
              return -1;
            } else if (a.data().created < b.data().created) {
              return 1;
            }
            return 0;
          });

        docs.sort((a, b) => {
          if (a.data().active && !b.data().active) {
            return -1;
          } else if (!a.data().active && b.data().active) {
            return 1;
          }
          return 0;
        });

        setItems(docs);
      });
    }
    getItems();
  }, []);

  async function toggleHandler(item) {
    const document = doc(db, "items", item.id);
    await updateDoc(document, {
      active: !item.data().active,
    });
  }



  return (
    <div className="list">
      {items.map((item) => (
        <div key={item.id} className="listItems">
          <label className="container">
            <input
              className="checkbox"
              type={"checkbox"}
              checked={!item.data().active}
              onChange={() => toggleHandler(item)}
            ></input>
            <span className="checkmark"></span>
          </label>
          <div className={!item.data().active ? "Done" : ""}>{item.id}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
