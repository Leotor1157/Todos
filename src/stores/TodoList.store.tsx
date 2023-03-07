import { action, map } from 'nanostores'

export type TodosState = {
    text: string
    todos: string[]
}

export const TodoStore = map<TodosState>({
    text : "",
    todos: [],
})

export const ajouter = action(TodoStore, 'ajouter', store => {
    const { text, todos } = store.get()
    todos.push(text)
    store.setKey('todos', todos)
})

export const modifierText = action(TodoStore, 'modifierText', (store, lettreEntree:string) =>{
    store.setKey('text', lettreEntree)
})


export const supprimer = action(TodoStore, "supprimer", (store, i:number )=> {
    const { todos } = store.get()
    const newTodos = todos.filter((todo, index) => index !== i)
    store.setKey('todos', newTodos)
})