// Decorator of TYPE

// Partial

interface MyUser {
  name: string
  id: string
  email?: string
  phone?: string
}

type MyUserOptionals = Partial<MyUser>

// interface MyUserOptionals {
//   name?: string
//   id?: string
//   email?: string
//   phone?: string
// }

type RequiredMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, "email" | "name">

const JustEmailAndNameUser: JustEmailAndName = {
  name: 'test'
}