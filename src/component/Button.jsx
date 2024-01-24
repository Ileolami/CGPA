const Button =({ props, onClick }) =>{
    return(
        <button type='button' 
        onClick={onClick} 
        className=" bg-slate-500 w-30 px-5 lg:w-30 lg:px-8 h-12 m-5 rounded-xl text-2xl hover:bg-slate-400">
            {props}
        </button>
    )
}

export default Button;