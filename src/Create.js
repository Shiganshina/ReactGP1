import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('A');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(blog)
        }).then(() => {
                console.log('new');
                navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add New</h2>
            <form>
                <label>Title : </label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Content : </label>
                <textarea
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author : </label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="a">a</option>
                    <option value="b">b</option>
                </select>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default Create;