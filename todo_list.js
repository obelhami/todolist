let Todo_array = {
    name:[],
    date:[]
};
const Todo_input = document.querySelector('.input_todo');
const Date_input = document.querySelector('.input_date');

function add_todo()
{
    if (Todo_input.value.trim() && Date_input.value.trim())
    {
        Todo_array.name.push(Todo_input.value);
        Todo_array.date.push(Date_input.value);
    }
        // console.log('todo ' + Todo_input.value);
        // console.log('date ' + Date_input.value);
}

function render_todo()
{
    let htmltodo = '';
    for (let i = 0; i < Todo_array.name.length; i++)
    {
        let todo = Todo_array.name[i];
        console.log(todo);
        let date = Todo_array.date[i];
        console.log(date);
        if (todo.trim() && date.trim())
        {
            const html= `<div class="test">${todo} </div> <div class="test">${date}</div> 
            <div class="test"> <button onclick="
                delete_todo(${i});
            ">Delete</button>
            </div>`;
            htmltodo += html;
            flag = 1;
        }
    }
    console.log(htmltodo);
    document.querySelector('.add_paragraph').innerHTML = htmltodo;
        Todo_input.value = '';
        Date_input.value = '';
}

function delete_todo(index)
{
    Todo_array.name.splice(index, 1);
    render_todo();

}