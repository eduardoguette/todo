import { supabase } from "./supabaseClient";

export const signUp = async (dataUSer) => {
  const { user, session, error } = await supabase.auth.signUp(dataUSer);
  return [user, session, error];
};

export const logIn = async (dataUSer) => {
  const { user, session, error } = await supabase.auth.signIn(dataUSer);
  return [user, session, error];
};

export const singOut = async () => {
  const { error } = await supabase.auth.signOut();
  return [error];
};
export const deleteUser = async (a, b) => {
  const { user, error } = await supabase.auth.api.deleteUser(a, b);
  return [user, error];
};
export const getTodos = async () => {
  const { data, error } = await supabase.from("todos").select();
  return [data, error];
};
export const createTodo = async (newTodo) => {
  const { data, error } = await supabase.from("todos").insert(newTodo);
  return [data, error];
};
export const updateTodo = async (change, id) => {
  const { data, error } = await supabase.from("todos").update(change).match(id);
  return [data, error];
};
export const deleteTodo = async (id) => {
  const { data, error } = await supabase.from("todos").delete().match(id);
  return [data, error];
};
