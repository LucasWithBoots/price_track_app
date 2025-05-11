import * as SecureStore from "expo-secure-store";
import { IItem } from "../interfaces/IItem/IItem";

const MYAPP_ITENS = "myapp_itens";

const saveItens = (item: IItem) => {
  SecureStore.setItem(MYAPP_ITENS, JSON.stringify(item));
};

const getItens = () => {
  const itens = SecureStore.getItem(MYAPP_ITENS);
  return itens ? (JSON.parse(itens) as IItem) : null;
};
