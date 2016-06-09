import Vue = require('vue')

interface ITask {
    body: string
    done: boolean
}

class TodoApp extends Vue {
    tasks: ITask[]
    
    newTaskBody = ''
    editingTask = {}
    
    
    constructor() {
        super()
        
        this._init({
            el: '#todoapp',
            data: {
                tasks: this.tasks,
                newTaskBody: this.newTaskBody,
                editingTask: this.editingTask
            },
            computed: {
                // getCountDone: this.getCountDone
                
                allDone: {
                    get() {
                        let res = true
                        this.tasks.forEach((task) => {
                            if(task.done === false) {
                                res = false
                                return false
                            }
                        })
                        return res
                    },
                    
                    set(value) {
                        this.tasks.forEach((task) => {
                            task.done = value
                        })
                    }
                }
            },
            created() {
                this.tasks = [
                    { body: 'do this 1', done: false }
                ]
            },
            method: {
                addTask: this.addTask,
                deleteTask: this.deleteTask,
                doneEdit: this.doneEdit,
                editTask: this.editTask
            }
        })
    }
    
    addTask(): void{
        const task = this.newTaskBody || this.newTaskBody.trim()
        
        if(!task) {
            return
        }
        
        this.tasks.push({body: task, done: false})
        this.newTaskBody = ''
    }
    
    deleteTask(delTask: ITask): void{
        console.log('delete')
        this.tasks.$remove(delTask)
    }
    
    doneEdit(doneTask: ITask): void{
        if(!doneTask.body.trim()) {
            return
        }
            
        doneTask.body = doneTask.body.trim()
         
        this.editingTask = null
    }
    
    editTask(task: ITask): void{
        console.log('edit')
        this.editingTask = task
    }
}

export default new TodoApp()