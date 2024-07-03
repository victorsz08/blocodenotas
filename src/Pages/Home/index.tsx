import Note from "../../components/Note"
import SearchCep from "../../components/SearchCep"
import TodoList from "../../components/Todo"




export default function HomePage(){
    return (
        <section className="home-container">
            <div className="utils-container">
                <SearchCep/>
                <TodoList/>
            </div>
            <div className="note-container">
                <Note/>
            </div>
        </section>
    )
}