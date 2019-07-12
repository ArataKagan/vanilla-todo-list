describe('Testing the functionality, this is the checklist', () => {
    it('should add an item', () => {
        let todo = new ToDo();
        let item = {
            title: "do laundry",
            complete: false
        }
        const done = todo.addTodo(item);
        expect(todo.getItems().length).toBe(1);
    }),
    it('should delete an item', () => {
        let todo = new ToDo();
        let item = {
            id: 1,
            title: "wash dishes",
            complete: false
        }
        let item2 = {
            id: 2,
            title: "walk dog",
            complete: false
        }
        todo.addTodo(item)
        todo.addTodo(item2)
        todo.delete(2)
        expect(todo.getItems()[todo.getItems().length-1].id).toBe(1);
    }),
    it('should mark item as complete', () => {
        let todo = new ToDo();
        let item = {
            id: 1,
            title: "wash dishes",
            complete: false
        }
        let item2 = {
            id: 2,
            title: "pick up puppies",
            complete: false
        }
        todo.addTodo(item)
        todo.addTodo(item2)
        todo.complete(2)
        expect(todo.getItems().find(item => item.id === 2).complete).toBe(true);
    })
})