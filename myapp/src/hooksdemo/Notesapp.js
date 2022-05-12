import { useEffect, useState } from "react";


function NotesApp(){
    const[notes,setNotes]=useState([])
    const[title,setTitle]=useState('')
    const[email,setEmail]=useState('')
    //for providind default value
    //const[title,setTitile]=useState('music')
    useEffect(()=>{
        const notesdata=JSON.parse(localStorage.getItem('notes'))
        setNotes(notesdata)
     },[])
    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
     })
 

    const addNotes=(e)=>{
        e.preventDefault()
        setNotes([
            ...notes,{title},{email}
        ])
        setTitle('')
        setEmail('')
    }

    const removeNote=(title)=>{
        
            setNotes(notes.filter((note)=> note.title !==title))
        
    }
    return(
        <div>
            <h3>Notes List...</h3><br/>
            {notes.map((note)=>(
                <div>
                <h3>{note.title} {note.email}</h3>
                <button onClick={()=>removeNote(note.title)}>Remove</button>
                </div>
            ))}
            <p>Add Note</p>
            <form onSubmit={addNotes}>
                Title:<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br/>
                Email:<input type="email" value={email} onChange={(el)=>setEmail(el.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NotesApp