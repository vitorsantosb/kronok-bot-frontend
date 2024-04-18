// User
export const persistLocalStorageUser = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorageUser = (key) => {
  localStorage.removeItem(key);
};

// Permissions
export const persistLocalStoragePermissions = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStoragePermissions = (key) => {
  localStorage.removeItem(key);
};

//Constacts
export const persistLocalStorageContacts = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorageContacts = (key) => {
  localStorage.removeItem(key);
};

//Courses
export const persistLocalStorageCourses = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorageCourses = (key) => {
  localStorage.removeItem(key);
};

//Chat rooms
export const persistLocalStorageChatRooms = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorageChatRooms = (key) => {
  localStorage.removeItem(key);
};
