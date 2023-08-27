import { firesotre } from "/src/Service/firebaseService.js";
import { users } from "/src/Components/HelloWorldClass.js";



export class crudService {
  constructor() {
    //コレクション名 users
    this.userRef = firesotre.collection("users");
  }

  //firebase getData
  getData = async function () {
    const userDoc = await this.userRef.get();

    //ドキュメントに全データ取得する
    const getAllData = userDoc.docs.map((doc) => {
      return doc.data();
    });

    //DocumentSnapshot型
    console.log(getAllData);
    //json型
    console.log(JSON.stringify(getAllData));

    //ドキュメントに全ID取得する
    const getAllId = userDoc.docs.map((doc) => {
      return doc.id;
    });
    console.log(getAllId);

    //条件で検索
    const filterData = await this.userRef.where("Id", "==", "0608").get();
    filterData.forEach((result) => {
      console.log(result.data());
    });

    //IDでデータを取得する
    const getById = [];
    for (let i = 0; i < getAllId.length; i++) {
      const getDataById = await this.userRef.doc(getAllId[i]).get();
      if (getDataById.exists) {
        getById.push(getDataById.data());
      }
    }
    console.log(getById);
  };

  //firebase addData
  setData = async function () {
    const userClass = new users();
    const uid = this.userRef.doc().id;
    const userInfo = userClass.getUser();
    userInfo.Id = uid;

    // await userRef.add(userInfo);
    await this.userRef.doc(uid).set(userInfo);

  };

  //firebase updateData
  updateData = async function () {
    const userDoc = await this.userRef.get();
    //ドキュメントに全ID取得する
    const getAllId = userDoc.docs.map((doc) => {
      return doc.id;
    });
    console.log(getAllId);

    //ドキュメント存在場合インデスク０のデータ更新する
    if (getAllId) {
      await this.userRef.doc(getAllId[0]).update({
        Id: "updatedId",
        born: "updatedborn",
        first: "updatedfirst",
        last: "updatedlast",
      });
    } else {
      throw new Error("no doc can update");
    }
  };


  //firebase deleteData
  deleteData = async function () {

    const userDoc = await this.userRef.get();
    //ドキュメントに全ID取得する
    const getAllId = userDoc.docs.map((doc) => {
      return doc.id;
    });
    console.log(getAllId);

    //ドキュメント存在場合インデスク０のデータ削除する
    if (getAllId) {
      await this.userRef.doc(getAllId[0]).delete();
    } else {
      throw new Error("no doc can delete");
    }
  };

}


