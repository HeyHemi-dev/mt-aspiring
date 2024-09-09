interface UserData {
  userAuth: string
  username: string
  name: string
  userType: 'personal' | 'business'
}

export interface User extends UserData {
  id: number
}

export const UsersTable = {
  table: 'users',
  all: 'users.*',
  id: 'users.id',
  userAuth: 'users.user_auth',
  username: 'users.username',
  name: 'users.name',
  userType: 'users.user_type',
}
