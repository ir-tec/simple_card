export const get_time = (date: any) => {
  date = date ? date : new Date();
  let t = date
    .toLocaleDateString("fa-IR")
    .replace(/([۰-۹])/g, (token: string) =>
      String.fromCharCode(token.charCodeAt(0) - 1728)
    );
  t = t.split("/");
  t = `${t[0]}/${t[1] < 10 ? "0" : ""}${t[1]}/${t[2] < 10 ? "0" : ""}${t[2]}`;
  return t;
};
