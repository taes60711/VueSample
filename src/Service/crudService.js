import { firesotre } from "/src/Service/firebaseService.js";
import { users } from "/src/components/HelloWorldClass.js";

//コレクション名 users
const userRef = firesotre.collection("users");

//firebase getData
export const getData = async function () {
  const userDoc = await userRef.get();

  //ドキュメントに全データ取得する
  const getAllData = userDoc.docs.map((doc) => {
    return doc.data();
  });
  console.log(getAllData);

  //ドキュメントに全ID取得する
  const getAllId = userDoc.docs.map((doc) => {
    return doc.id;
  });
  console.log(getAllId);

  //IDでデータを取得する
  const getById = [];
  for (let i = 0; i < getAllId.length; i++) {
    const getDataById = await userRef.doc(getAllId[i]).get();
    if (getDataById.exists) {
      getById.push(getDataById.data());
    }
  }
  console.log(getById);
};

//firebase addData
export const setData = async function () {
  const userClass = new users();

  //.add({}) == doc().set({})
  await userRef.add(userClass.getUser());
  // await userRef.doc().set(userClass.getUser())
};

//firebase updateData
export const updateData = async function () {
  const userDoc = await userRef.get();
  //ドキュメントに全ID取得する
  const getAllId = userDoc.docs.map((doc) => {
    return doc.id;
  });
  console.log(getAllId);
  
  //ドキュメント存在場合インデスク０のデータ更新する
  if (getAllId) {
    await userRef.doc(getAllId[0]).update({
      Id: "updatedId",
      born: "updatedborn",
      first: "updatedfirst",
      last: "updatedlast",
    });
  }else{
    throw new Error("no doc can update");
  }
};


//firebase deleteData
export const deleteData = async function () {
    
    const userDoc = await userRef.get();
    //ドキュメントに全ID取得する
    const getAllId = userDoc.docs.map((doc) => {
      return doc.id;
    });
    console.log(getAllId);
    
    //ドキュメント存在場合インデスク０のデータ削除する
    if (getAllId) {
      await userRef.doc(getAllId[0]).delete();
    }else{
        throw new Error("no doc can delete");
      }
  };
