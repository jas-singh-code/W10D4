def index
    render json: Todo.all
end

def show
    render json: Todo.find(params[:id])
end

def new
    render json: Todo.new(todo_params)
end

def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
end

def edit
    @todo
end

def update
end


def destroy

end

def todo_params
    params.require(:todo).permit(:title, :body, :done)
end
