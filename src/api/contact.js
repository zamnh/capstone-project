import { HTTP_STATUS } from "../constant";
import network from "../services/network";

const ENDPOINTS = {
  contacts: "/contacts",
};

export async function getContacts(q) {
  try {
    const res = await network.get(ENDPOINTS.contacts + "?q=" + q);
    if (res.status === HTTP_STATUS.success) {
      return res.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createContact() {
  try {
    const newContact = {
      createdAt: Date.now(),
    };
    const res = await network.post(ENDPOINTS.contacts, newContact);
    if (res.status === HTTP_STATUS.created) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

export async function getContact(id) {
  try {
    const res = await network.get(ENDPOINTS.contacts + "/" + id);
    if (res.status === HTTP_STATUS.success) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

export async function updateContact(id, newContact) {
  try {
    const res = await network.put(ENDPOINTS.contacts + "/" + id, newContact);
    if (res.status === HTTP_STATUS.success) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteContact(id) {
  try {
    const res = await network.delete(ENDPOINTS.contacts + "/" + id);
    if (res.status === HTTP_STATUS.success) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
