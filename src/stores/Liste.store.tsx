import { action, map } from "nanostores"

/*

const state = {
    newList: 'Courses du dimanche',
    lists: [
        {
            user: 'Rose',
            name: 'Petites courses',
            newTodo: 'Du pain',
            todos: [
                { label: 'Pommes de terres', complete: false },
                { label: 'Pommes de terres', complete: true },
            ]
        },
        {
            user: 'Rose',
            name: 'A faire demain'
        }
    ]
}

*/

export type Todo = {
    label: string
    complete: boolean
}

export type TodoList = Todo[]

export type List = {
    user: string
    name: string
    newTodo: string
    todos : TodoList
}

export type MainList = {
    newList: string
    lists : List[]
}

export const ListStore = map<MainList>({
    newList : "",
    lists: [],
})

export const ajouter = action(ListStore, 'lister', store => {
    const { newList, lists } = store.get()
    lists.push({user:'Rose', name: newList, newTodo:'Courses du dimanche', todos:[]})
    store.setKey('lists', lists)
})

export const modifierText = action(ListStore, 'modifierText', (store, lettreEntree:string) =>{
    store.setKey('newList', lettreEntree)
})


export const supprimer = action(ListStore, "supprimer", (store, i:number )=> {
    const { lists } = store.get()
    const newTodos = lists.filter((list, index) => index !== i)
    store.setKey('lists', newTodos)
})