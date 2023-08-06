export const argFunc = (text: string, ...names: string[]) => {
  console.log(`${text} ${names.join(',')}`)
}

export const fetchData = (url: string): Promise<string> => {
  return Promise.resolve('result')
}

export const getObjectProps = ( user: {
  name: string
  age: number
}) => {
  return `The name is ${user?.name ?? 'DefaultName'}, and the age is ${user?.age ?? 'DefaultAge'}`
}

const test = 'a'

export default test