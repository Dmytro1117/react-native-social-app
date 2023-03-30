import { ref, getDownloadURL, uploadBytes, getStorage } from "firebase/storage";

export const uploadUserPhotoToServer = async (photoUri) => {
  const storage = getStorage();
  const response = await fetch(photoUri);
  const file = await response.blob();

  const filename = new Date().getTime() + "userPost.jpg";
  const storageRef = ref(storage, "userPhoto/" + filename);

  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });

  return await getDownloadURL(storageRef).then((downloadURL) => {
    return downloadURL;
  });
};
