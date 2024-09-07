interface UserData {
  userAuth: string
  username: string
  name: string
  userType: string
}

export interface User extends UserData {
  id: string
}

export const UsersTable = {
  id: 'id',
  userAuth: 'user_auth',
  username: 'username',
  name: 'name',
  userType: 'user_type',
}
