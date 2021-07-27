export const CURRENT_TIME = async () => {
 const today = new Date();

 const year = today.getFullYear() + "";
 const month = today.getMonth() + 1 + "";
 const date = today.getDate() + "";
 const hour = today.getHours() + "";
 const min = today.getMinutes() + "";
 const sec = today.getSeconds() + "";

 const todayDate = year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;

 return todayDate;
};
