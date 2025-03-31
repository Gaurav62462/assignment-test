const Content = () =>{
    const split = window.location.pathname.split('/')

    return(
        <div className="mt-10">
        <h1 className="capitalize text-center text-[20px] font-bold">This is the {split[1]} Section</h1>
        </div>
    )
}

export default Content