export default function SearchSection(props){


    return(

        <div className="input-area"> 

        <input
        type="text"
        onChange={props.handleInputChange}
        
        placeholder="Search for movies..."
        />

        <button
        onClick={props.toggle}
        >
            Search
        </button>
        </div>


        
    )
}